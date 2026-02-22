'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Squares from '@/components/ui/Squares';

/**
 * BackgroundWrapper component implements thin, scanning lines or squares
 * to provide a subtle engineering/mechanical feel across the entire app.
 */
const TechnicalBackground = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Temaya göre grid rengini ve opacity'yi ayarla
  const isDark = resolvedTheme === 'dark';

  // Daha belirgin minimalist renkler (Eski görünümü geri getiriyoruz)
  const borderColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)';

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-background">
      <Squares
        speed={0.2}
        squareSize={40}
        direction="diagonal"
        borderColor={borderColor}
      />

      {/* Ekstra vurgular, engineering feel */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-primary/20" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-primary/20" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-primary/20" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-primary/20" />

      {/* Hafif karartmalar (Vignette) - GPU Optimized CSS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_90%)] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-80" />
    </div>
  );
};

export default TechnicalBackground;
