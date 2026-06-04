import React from 'react';
import { info } from '../../data/info';
import cvFile from '../../assets/images/cv fahmi.pdf';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="reveal text-sm font-medium text-accent tracking-widest uppercase mb-4">Terbuka untuk kolaborasi</p>
            <h1 className="reveal d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-6">
              Halo, Saya <span className="text-accent">{info.firstName}</span>
            </h1>
            <p className="reveal d2 text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-md mb-10">
              {info.position} dengan fokus pada kualitas produk — dari arsitektur sistem hingga antarmuka yang intuitif.
            </p>
            <div className="reveal d3 flex flex-col sm:flex-row flex-wrap gap-4">
              <a href="#work" className="shimmer inline-flex justify-center items-center gap-2 bg-white text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-200 transition-colors text-sm w-full sm:w-auto">
                Lihat karya saya <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </a>
              <a href={cvFile} download="CV Fahmi.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 bg-zinc-800 text-white font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 transition-colors text-sm border border-zinc-700 w-full sm:w-auto">
                <i className="fa fa-download"></i> Download CV
              </a>
              <a href="#contact" className="inline-flex justify-center items-center gap-2 border border-zinc-700 text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-900 transition-colors text-sm w-full sm:w-auto">Hubungi saya</a>
            </div>
          </div>

          <div className="reveal d2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="pf w-full h-full rounded-3xl overflow-hidden border border-white/5">
                <img src={info.selfPortrait} alt={info.firstName} loading="eager" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg z-20">Open to projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
