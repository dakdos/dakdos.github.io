import React from 'react';
import { info } from '../../data/info';

export default function About() {
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...info.skills, ...info.skills, ...info.skills];

  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <p className="reveal text-sm font-mono font-medium text-accent tracking-widest uppercase mb-4">TENTANG</p>
        <h2 className="reveal d1 text-3xl md:text-5xl font-sans font-semibold leading-tight mb-8 text-white max-w-6xl mx-auto">
          Membangun aplikasi web dan mobile yang <span className="text-accent">rapi, terukur, dan dapat diandalkan</span>
        </h2>
        
        <p className="reveal d2 text-xl font-sans font-medium text-zinc-400">Tech Stack</p>
      </div>

      {/* Auto-scrolling Marquee - Contained */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex overflow-x-hidden py-4 rounded-2xl group">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="animate-marquee flex gap-6 px-3">
            {duplicatedSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center w-40 h-32 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-colors group hover:bg-[#111]"
              >
                <div className="flex items-center justify-center mb-3">
                  <i 
                    className={`${skill.icon} text-3xl transition-transform duration-500 group-hover:scale-110 text-accent`} 
                  ></i>
                </div>
                <span className="text-[13px] font-mono font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
