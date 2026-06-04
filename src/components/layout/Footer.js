import React from 'react';
import { info } from '../../data/info';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-sm">
        <p>© {new Date().getFullYear()} {info.firstName}. All rights reserved.</p>
        
        <div className="flex items-center gap-4">
          {info.socials.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label={social.label}
            >
              <i className={`${social.icon} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
