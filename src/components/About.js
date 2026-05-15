import React from 'react';
import { info } from '../info/Info';

const skillIcons = {
  'React.js': { icon: 'fa-brands fa-react', color: '#61DAFB' },
  'Next.js': { icon: 'fa-solid fa-n', color: '#ffffff' },
  'Node.js': { icon: 'fa-brands fa-node-js', color: '#339933' },
  'Flutter': { icon: 'fa-solid fa-mobile-screen', color: '#02569B' },
  'Dart': { icon: 'fa-solid fa-bullseye', color: '#0175C2' },
  'Laravel': { icon: 'fa-brands fa-laravel', color: '#FF2D20' },
  'PHP': { icon: 'fa-brands fa-php', color: '#777BB4' },
  'JavaScript': { icon: 'fa-brands fa-js', color: '#F7DF1E' },
  'MySQL': { icon: 'fa-solid fa-database', color: '#4479A1' },
  'Firebase': { icon: 'fa-solid fa-fire', color: '#FFCA28' },
  'Git': { icon: 'fa-brands fa-git-alt', color: '#F05032' },
  'Docker': { icon: 'fa-brands fa-docker', color: '#2496ED' },
  'Kubernetes': { icon: 'fa-solid fa-dharmachakra', color: '#326CE5' },
  'Figma': { icon: 'fa-brands fa-figma', color: '#F24E1E' },
};

export default function About() {
  const getIcon = (name) => skillIcons[name]?.icon || 'fa-solid fa-code';
  const getColor = (name) => skillIcons[name]?.color || '#FF6B2B';

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...info.skills, ...info.skills, ...info.skills];

  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="reveal inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-accent uppercase border border-accent/30 rounded-full bg-accent/5">
          Tentang
        </span>
        
        <h2 className="reveal d1 text-3xl md:text-5xl font-bold leading-tight mb-8 text-zinc-900 dark:text-white max-w-6xl mx-auto">
          Membangun sistem web dan mobile yang <span className="text-accent">bersih, terukur, dan dapat diandalkan.</span>
        </h2>
        
        <p className="reveal d2 text-xl font-medium text-zinc-500 dark:text-zinc-400">Tech Stack</p>
      </div>

      {/* Auto-scrolling Marquee - Contained */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex overflow-x-hidden py-4 rounded-3xl group">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10"></div>
          
          <div className="animate-marquee flex gap-6 px-3">
            {duplicatedSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center w-40 h-32 bg-[#121212] border border-white/5 rounded-[2rem] transition-all duration-300 group hover:border-accent/50 hover:bg-[#181818]"
              >
                <div className="flex items-center justify-center mb-3">
                  <i 
                    className={`${getIcon(skill.proficientWith)} text-3xl transition-transform duration-500 group-hover:scale-110`} 
                    style={{ color: getColor(skill.proficientWith) }}
                  ></i>
                </div>
                <span className="text-[13px] font-medium text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-300 transition-colors">{skill.proficientWith}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal d4 mt-20 text-left bg-zinc-100 dark:bg-zinc-900/30 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
           <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
             "{info.bio}"
           </p>
        </div>
      </div>
    </section>
  );
}
