'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const currentPath = usePathname();

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-background p-6">
      <div className="flex flex-col items-center text-center max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-8">
          404 — Error
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase mb-6">
          {currentPath === '/404' ? 'Page Not Found' : 'Lost in Transition'}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed mb-12">
          The page you are looking for at{' '}
          <code className="text-primary font-bold px-2 py-1 bg-muted rounded">
            {currentPath}
          </code>{' '}
          does not exist or has been moved to a new coordinate.
        </p>

        <Link
          href="/"
          className="group flex items-center gap-4 bg-primary text-white py-4 px-10 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:opacity-90 shadow-lg shadow-primary/20"
        >
          <span>Return Home</span>
          <span className="text-xl transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}
