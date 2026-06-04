import React, { useState } from 'react';
import { info } from '../../data/info';

const menuItems = [
  { id: 'services', label: 'Pengalaman' },
  { id: 'work', label: 'Portofolio' },
  { id: 'about', label: 'Tentang' },
  { id: 'contact', label: 'Kontak' },
];

export default function Header({ scrolled, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5 border-b border-white/5' : ''}`}>
      <nav className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <a href="/#hero" className="font-display font-bold text-xl tracking-tight relative z-10">
          <span className="text-white">{info.firstName.toLowerCase().slice(0, 3)}</span><span className="text-accent">{info.firstName.toLowerCase().slice(3) || 'dev'}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`/#${item.id}`} className={`nl text-zinc-400 hover:text-white transition-colors ${activeSection === item.id ? 'on !text-white' : ''}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-800" aria-label="Toggle menu">
            {!mobileMenuOpen ? (
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div className={`md:hidden bg-zinc-950 border-t border-zinc-900 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.id}><a href={`/#${item.id}`} onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-accent">{item.label}</a></li>
          ))}
        </ul>
      </div>
    </header>
  );
}
