import React from 'react';
import { Link } from 'react-router-dom';
import { info } from '../info/Info';

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Portofolio</p>
            <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Kumpulan aplikasi dan sistem digital yang telah kembangkan.</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {info.portfolio.map((project, index) => (
            <article key={index} className={`card-h reveal d${index + 1} group relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] transition-all duration-300`}>
              <div className="pf w-full aspect-video">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="p-7">
                <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-3">{project.title}</h3>
                
                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.description && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                )}
                <div className="pt-2">
                  <Link 
                    to={`/project/${project.id}`} 
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-white bg-zinc-800 hover:bg-accent hover:shadow-lg hover:shadow-accent/25 rounded-full transition-all duration-300 gap-2 group-hover:bg-accent group-hover:text-white"
                  >
                    Lihat Detail Proyek
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
