import React from 'react';
import { info } from '../info/Info';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-sm">
        <p>© {new Date().getFullYear()} {info.firstName}. All rights reserved.</p>
        <p>Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
