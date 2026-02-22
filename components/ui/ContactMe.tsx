'use client';

import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { ContactData } from '@/data/Contact';
import { MagneticButton } from './MagneticButton';

const slideUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }),
};

/**
 * ContactMe component containing a localized contact form and contact information card.
 * Redesigned with Glassmorphism and flat modern animations.
 */
const ContactMe = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (name: string) => setFocusedField(name);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed');

      toast.success(t('contact.success'));
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center pb-16 md:pb-24 pt-10 px-4 lg:px-10 xl:px-16 mx-auto max-w-7xl w-full overflow-hidden relative gap-12 md:gap-16"
    >
      <SectionHeader
        title={t('contact.title')}
      />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-6xl mx-auto items-stretch">

        {/* Left Side: Contact Info Card */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideUpVariant}
          className="w-full lg:w-1/3 flex justify-center items-center"
        >
          <div className="uiverse-contact-parent relative z-10 w-full flex justify-center">
            <div className="uiverse-contact-card">
              <div className="uiverse-contact-glass"></div>
              <div className="uiverse-contact-content">
                <span className="title">
                  {language === 'tr' ? 'Hadi Tanışalım.' : "Let's Connect."}
                </span>
                <span className="text">
                  {language === 'tr'
                    ? 'Projeler hakkında merak ettikleriniz veya sadece merhaba demek için bana ulaşabilirsiniz.'
                    : 'Feel free to reach out for projects inquiries, collaborations, or just to say hi.'}
                </span>
              </div>
              <div className="uiverse-contact-bottom">
                <div className="uiverse-contact-social-buttons-container">
                  <a href={`mailto:${ContactData.email}`} className="social-button" aria-label="Email" title="Email">
                    <FiMail className="svg" />
                  </a>
                  <a href={ContactData.linkedin} target="_blank" rel="noopener noreferrer" className="social-button" aria-label="LinkedIn" title="LinkedIn">
                    <FiLinkedin className="svg" />
                  </a>
                  <a href={ContactData.github} target="_blank" rel="noopener noreferrer" className="social-button" aria-label="GitHub" title="GitHub">
                    <FiGithub className="svg" />
                  </a>
                </div>
              </div>
              <div className="uiverse-contact-logo">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5 text-foreground font-black text-xl tracking-tighter select-none">
                  MG
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Glass Form */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={slideUpVariant}
          className="w-full lg:w-2/3"
        >
          <div className="w-full p-8 md:p-10 rounded-[2rem] bg-background/50 dark:bg-card/40 backdrop-blur-xl border border-border/50 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Name Input */}
                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="name" className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-muted-foreground'}`}>
                    {language === 'tr' ? 'İsim' : 'Name'}
                  </label>
                  <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${focusedField === 'name' ? 'ring-2 ring-primary/50 border-transparent shadow-[0_0_15px_rgba(var(--primary),0.2)]' : 'border border-border/50 hover:border-border'}`}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      className="w-full bg-secondary/30 px-4 py-3.5 text-foreground focus:outline-none transition-colors"
                      placeholder={language === 'tr' ? 'Adınız' : 'John Doe'}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="email" className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-muted-foreground'}`}>
                    {language === 'tr' ? 'E-posta' : 'Email'}
                  </label>
                  <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${focusedField === 'email' ? 'ring-2 ring-primary/50 border-transparent shadow-[0_0_15px_rgba(var(--primary),0.2)]' : 'border border-border/50 hover:border-border'}`}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className="w-full bg-secondary/30 px-4 py-3.5 text-foreground focus:outline-none transition-colors"
                      placeholder="hello@world.com"
                    />
                  </div>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-2 relative group mt-2">
                <label htmlFor="message" className={`text-xs font-bold uppercase tracking-widest transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-muted-foreground'}`}>
                  {language === 'tr' ? 'Mesaj' : 'Message'}
                </label>
                <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${focusedField === 'message' ? 'ring-2 ring-primary/50 border-transparent shadow-[0_0_15px_rgba(var(--primary),0.2)]' : 'border border-border/50 hover:border-border'}`}>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    className="w-full bg-secondary/30 px-4 py-3.5 text-foreground focus:outline-none transition-colors resize-none"
                    placeholder={
                      language === 'tr'
                        ? 'Nasıl yardımcı olabilirim?'
                        : 'How can I help you?'
                    }
                  />
                </div>
              </div>

              {/* Submit Button (Magnetic) */}
              <div className="flex justify-end mt-4">
                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="py-4 px-8 bg-foreground text-background font-bold tracking-wide rounded-2xl hover:bg-primary hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">{t('contact.sending')}</span>
                  ) : (
                    <>
                      {t('contact.button')}
                      <span className="text-xl">&rarr;</span>
                    </>
                  )}
                </MagneticButton>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
