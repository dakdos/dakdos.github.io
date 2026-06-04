import React from 'react';
import { Link } from 'react-router-dom';
import { info } from '../../data/info';

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Portofolio</p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Kumpulan aplikasi dan sistem digital yang telah saya kembangkan.</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {info.portfolio.map((project, index) => (
            <article key={index} className={`reveal d${index + 1} group relative rounded-2xl overflow-hidden bg-zinc-900/40 border border-white/5 hover:border-accent/30 transition-all duration-500 block`}>
              <Link to={`/project/${project.id}`} className="flex flex-col sm:flex-row h-full">
                {/* Compact Image Sidebar */}
                <div className="relative w-full sm:w-40 md:w-48 lg:w-44 shrink-0 overflow-hidden bg-zinc-950">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                {/* Compact Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-accent transition-colors line-clamp-1">{project.title}</h3>
                    
                    {project.techStack && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.techStack.slice(0, 3).map((tech, i) => (
                          <i key={i} className={`${tech.icon} text-sm text-zinc-500 hover:text-accent transition-colors`} title={tech.name}></i>
                        ))}
                      </div>
                    )}

                    <p className="text-[11px] text-zinc-500 line-clamp-2 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest group/link">
                    Details
                    <svg className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
