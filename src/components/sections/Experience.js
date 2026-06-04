import React from 'react';
import { info } from '../../data/info';

export default function Experience() {
  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="reveal inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-accent uppercase border border-accent/30 rounded-full bg-accent/5">
            Pengalaman
          </span>
          <h2 className="reveal d1 text-3xl md:text-5xl font-bold leading-tight text-zinc-900 dark:text-white max-w-5xl mx-auto">
            Berpengalaman mengembangkan solusi digital berbasis web dan mobile untuk berbagai kebutuhan bisnis dan industri.
          </h2>
        </div>

        <div className="space-y-6">
          {info.experience.map((exp, index) => (
            <div key={index} className={`reveal d${index + 1} p-8 md:p-10 bg-white dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-3xl transition-all duration-300 hover:border-accent/30`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">{exp.title}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{exp.period}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
