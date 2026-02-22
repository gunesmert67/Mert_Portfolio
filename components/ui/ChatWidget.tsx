'use client';

import React, {
  useState,
  useRef,
  useEffect,
  FormEvent,
  KeyboardEvent,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Briefcase,
  Gamepad2,
  Trash2,
  Info,
  Maximize2,
  Minimize2,
  Check,
  AlertTriangle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * ChatWidget component providing an AI-powered chat interface with analysis tracking and persistence.
 */
export default function ChatWidget() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [analysisReason, setAnalysisReason] = useState<string | null>(null);
  const [mode, setMode] = useState<'default' | 'cv'>('cv');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Recover last active mode on mount ONLY
  useEffect(() => {
    const savedMode = localStorage.getItem('chat_mode') as
      | 'default'
      | 'cv'
      | null;
    if (savedMode && (savedMode === 'default' || savedMode === 'cv')) {
      setMode(savedMode);
    }
  }, []);

  // Listen for 'open-chat' custom event (e.g. from Hero CTA button)
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  // Update welcome message when language or mode changes, if it's the only message
  useEffect(() => {
    const storageKey = `chat_history_${mode}`;
    const savedMessages = localStorage.getItem(storageKey);

    if (savedMessages) {
      // logic to handle existing messages - we don't automatically translate user history
      // but we could theoretically update the welcome message if it's the first one.
      // For simplicity and safety, let's just respect the saved history.
    } else {
      // No saved history? Set the localized welcome message.
      setMessages([
        {
          role: 'assistant',
          content:
            mode === 'default'
              ? t('chat.welcome.chat')
              : t('chat.welcome.professional'),
        },
      ]);
    }
  }, [language, mode, t]); // Re-run when language changes

  // 2. Load mode-specific history when mode changes
  useEffect(() => {
    // Load mode-specific history
    const storageKey = `chat_history_${mode}`;
    const savedMessages = localStorage.getItem(storageKey);

    const savedAnalysis = localStorage.getItem(`chat_analysis_${mode}`);
    const savedReason = localStorage.getItem(`chat_analysis_reason_${mode}`);

    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error('Failed to parse chat history', e);
      }
    } else {
      // Default welcome messages if no history exists for this mode
      setMessages([
        {
          role: 'assistant',
          content:
            mode === 'default'
              ? t('chat.welcome.chat')
              : t('chat.welcome.professional'),
        },
      ]);
    }

    if (savedAnalysis) setAnalysis(savedAnalysis);
    else setAnalysis(null);

    if (savedReason) setAnalysisReason(savedReason);
    else setAnalysisReason(null);
  }, [mode, t]); // Added t to dependencies just in case, though mostly controlled by above effect now

  // Persist messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`chat_history_${mode}`, JSON.stringify(messages));
    }
  }, [messages, mode]);

  // Persist active mode
  useEffect(() => {
    localStorage.setItem('chat_mode', mode);
  }, [mode]);

  // Persist analysis state
  useEffect(() => {
    if (analysis) localStorage.setItem(`chat_analysis_${mode}`, analysis);
    else localStorage.removeItem(`chat_analysis_${mode}`);

    if (analysisReason)
      localStorage.setItem(`chat_analysis_reason_${mode}`, analysisReason);
    else localStorage.removeItem(`chat_analysis_reason_${mode}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [analysis, analysisReason]);

  // Handle mode switch
  const toggleMode = () => {
    const newMode = mode === 'default' ? 'cv' : 'default';
    setMode(newMode);
    // State updates will flow through useEffects above
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      scrollRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isExpanded, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to prevent layout jumps on mobile
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleClearHistory = () => {
    setMessages([
      {
        role: 'assistant',
        content:
          mode === 'default'
            ? t('chat.welcome.chat')
            : t('chat.welcome.professional'),
      },
    ]);
    setAnalysis(null);
    setAnalysisReason(null);

    // Clear mode-specific storage
    localStorage.removeItem(`chat_history_${mode}`);
    localStorage.removeItem(`chat_analysis_${mode}`);
    localStorage.removeItem(`chat_analysis_reason_${mode}`);

    setShowClearConfirm(false);
  };

  /**
   * Handles sending user messages and processing AI responses with side-channel analysis.
   */
  const handleSend = async (e?: FormEvent) => {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: 'user', content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages, mode }),
      });

      if (!res.ok) throw new Error('API Error');

      const data = await res.json();
      const rawResponse = data.response;
      let cleanResponse = rawResponse;

      // Extract hidden JSON analysis block from response
      const jsonRegex = /\{[\s\S]*"analiz_sonucu"[\s\S]*\}/;
      const match = rawResponse.match(jsonRegex);

      if (match) {
        try {
          const jsonStr = match[0];
          const analysisData = JSON.parse(jsonStr);

          if (analysisData.analiz_sonucu)
            setAnalysis(analysisData.analiz_sonucu);
          if (analysisData.sebep) setAnalysisReason(analysisData.sebep);

          cleanResponse = rawResponse.replace(jsonRegex, '').trim();
        } catch (e) {
          console.error('Analysis block parsing failed', e);
        }
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: cleanResponse },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: t('chat.error'),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simplified variants for entry/exit animation only
  const containerVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && !isExpanded && (
          <motion.div
            key="fab"
            className="fixed bottom-6 right-6 z-50 origin-[center_bottom] transition-all"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Chat"
              className="chat-uiverse-btn"
            >
              <div className="hover bt-1"></div>
              <div className="hover bt-2"></div>
              <div className="hover bt-3"></div>
              <div className="hover bt-4"></div>
              <div className="hover bt-5"></div>
              <div className="hover bt-6"></div>
              <div className="core-btn"></div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for Expanded Mode */}
      <AnimatePresence>
        {isOpen && isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Chat Window Container */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout
            key="chat-window"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={containerVariants}
            transition={{
              layout: {
                duration: 0.4,
                type: 'spring',
                stiffness: 300,
                damping: 30,
              },
              opacity: { duration: 0.2 },
            }}
            className={`fixed z-[60] flex flex-col overflow-hidden border border-border bg-background shadow-2xl transition-all
              ${isExpanded
                ? 'inset-0 m-auto w-[100vw] h-[100dvh] md:w-[95vw] md:h-[92vh] max-w-[1200px] rounded-none md:rounded-[24px]'
                : 'bottom-[5.5rem] right-[4vw] w-[92vw] h-[75vh] max-h-[700px] md:bottom-24 md:right-6 md:w-[400px] lg:w-[450px] md:h-[650px] rounded-[24px]'
              }`}
          >
            {/* Header with Presence & Analysis */}
            <div
              className={`relative flex flex-col border-b border-border bg-muted/30 ${isExpanded ? 'py-2 sm:py-3' : 'py-1 sm:py-2'}`}
            >
              {/* Top Bar: Bot Info & Actions */}
              <div
                className={`flex items-center justify-between px-4 sm:px-5 ${isExpanded ? 'py-2' : 'py-1'}`}
              >
                <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                  <div
                    className={`flex-shrink-0 flex items-center justify-center rounded-lg border border-border bg-card shadow-sm transition-all duration-500 ${isExpanded ? 'h-12 w-12 sm:h-14 sm:w-14' : 'h-10 w-10 sm:h-11 sm:w-11'}`}
                  >
                    {mode === 'cv' ? (
                      <Briefcase
                        className={`${isExpanded ? 'h-6 w-6 sm:h-7 sm:w-7' : 'h-5 w-5'} text-primary`}
                      />
                    ) : (
                      <Bot
                        className={`${isExpanded ? 'h-6 w-6 sm:h-8 sm:w-8' : 'h-5 w-5 sm:h-6 sm:w-6'} text-primary`}
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-0.5 overflow-hidden">
                    <h3
                      className={`font-bold tracking-tighter text-foreground ${isExpanded ? 'text-lg sm:text-xl' : 'text-[15px] sm:text-base'}`}
                    >
                      {mode === 'cv'
                        ? t('chat.professional_title')
                        : t('chat.persona_title')}
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className={`relative flex h-2 w-2`}>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-20"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                        {mode === 'cv'
                          ? t('chat.cv_mode_badge')
                          : t('chat.chat_mode_badge')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex items-center bg-muted/50 rounded-lg p-1 border border-border">
                    {!isMobile && (
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-background hover:text-primary transition-all"
                        title={
                          isExpanded ? t('chat.minimize') : t('chat.maximize')
                        }
                      >
                        {isExpanded ? (
                          <Minimize2 className="h-4 w-4" />
                        ) : (
                          <Maximize2 className="h-4 w-4" />
                        )}
                      </button>
                    )}

                    <div className="relative">
                      <button
                        onClick={() => setShowClearConfirm(!showClearConfirm)}
                        className={`flex items-center justify-center rounded-lg text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-all ${isMobile ? 'h-9 w-9' : 'h-8 w-8'}`}
                        title={t('chat.clear')}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                      {/* Custom Confirmation Popup */}
                      <AnimatePresence>
                        {showClearConfirm && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 5 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 5 }}
                            className="absolute right-0 top-12 w-56 z-[70] rounded-xl border border-border bg-background p-5 shadow-2xl"
                          >
                            <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest text-foreground">
                              <AlertTriangle className="h-4 w-4 text-amber-500" />
                              {t('chat.clear_confirm')}
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={handleClearHistory}
                                className="flex-1 rounded-lg bg-red-500 text-white py-2 text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-red-600"
                              >
                                {t('chat.yes')}
                              </button>
                              <button
                                onClick={() => setShowClearConfirm(false)}
                                className="flex-1 rounded-lg bg-muted py-2 text-[10px] font-bold uppercase tracking-widest text-foreground transition-all hover:bg-muted/80"
                              >
                                {t('chat.no')}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      onClick={() => {
                        setIsOpen(false);
                        setIsExpanded(false);
                      }}
                      className={`flex items-center justify-center rounded-lg text-muted-foreground hover:bg-background hover:text-foreground transition-all ${isMobile ? 'h-9 w-9' : 'h-8 w-8'}`}
                      title={t('chat.close')}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mode Switcher Tabs */}
              <div className="px-4 sm:px-5 pb-2 sm:pb-3">
                <div className="flex p-1 bg-muted rounded-xl border border-border">
                  <button
                    onClick={() => mode !== 'cv' && toggleMode()}
                    className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2.5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold tracking-wide rounded-lg transition-all duration-300 ${mode === 'cv' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {t('chat.professional_mode')}
                  </button>
                  <button
                    onClick={() => mode !== 'default' && toggleMode()}
                    className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2.5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold tracking-wide rounded-lg transition-all duration-300 ${mode === 'default' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Gamepad2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {t('chat.chat_mode')}
                  </button>
                </div>
              </div>
            </div>

            {/* Message Loop */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6 scrollbar-thin"
            >
              <div className="flex flex-col gap-4 sm:gap-6 max-w-5xl mx-auto w-full">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`relative max-w-[88%] sm:max-w-[85%] px-4 py-3 sm:px-5 sm:py-3.5 shadow-sm ${isExpanded
                        ? 'text-[15px] sm:text-lg leading-relaxed'
                        : 'text-[13.5px] sm:text-sm leading-relaxed'
                        } ${msg.role === 'user'
                          ? 'rounded-2xl rounded-tr-none bg-primary text-primary-foreground'
                          : 'rounded-2xl rounded-tl-none bg-muted border border-border text-foreground'
                        }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start w-full"
                  >
                    <div className="rounded-2xl rounded-tl-none bg-muted border border-border px-4 py-3.5 sm:px-5 sm:py-4">
                      <div className="flex gap-2">
                        <motion.div
                          className="h-2 w-2 rounded-full bg-primary"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: 'easeInOut',
                            delay: 0,
                          }}
                        />
                        <motion.div
                          className="h-2 w-2 rounded-full bg-primary"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: 'easeInOut',
                            delay: 0.2,
                          }}
                        />
                        <motion.div
                          className="h-2 w-2 rounded-full bg-primary"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: 'easeInOut',
                            delay: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                {/* Invisible element to scroll to */}
                <div ref={messagesEndRef} className="h-1" />
              </div>
            </div>

            {/* Input & Controls */}
            <div
              className={`border-t border-border bg-background px-4 sm:px-6 ${isExpanded ? 'py-4 sm:py-6' : 'py-3 sm:py-4'}`}
            >
              <div className="max-w-5xl mx-auto w-full">
                <form
                  onSubmit={handleSend}
                  className={`flex items-center gap-2 sm:gap-3 rounded-full border border-border bg-muted/30 p-1.5 pl-4 sm:p-2 sm:pl-6 transition-all focus-within:border-primary focus-within:bg-background shadow-sm`}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t('chat.placeholder')}
                    disabled={isLoading}
                    className={`flex-1 bg-transparent py-2 text-foreground placeholder-muted-foreground/60 focus:outline-none disabled:opacity-50 ${isExpanded ? 'text-base sm:text-lg' : 'text-[13.5px] sm:text-sm'}`}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    title={t('chat.send')}
                    className={`flex items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground ${isExpanded ? 'h-10 w-10 sm:h-12 sm:w-12' : 'h-9 w-9 sm:h-10 sm:w-10'}`}
                  >
                    <Send className="h-4 w-4 ml-0.5 sm:ml-1" />
                  </button>
                </form>
                <div className="mt-2.5 sm:mt-3.5 flex justify-center">
                  <span className="text-[10px] sm:text-xs font-medium tracking-wide text-muted-foreground/30">
                    {t('chat.footer')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
