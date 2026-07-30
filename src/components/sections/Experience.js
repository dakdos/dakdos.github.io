import React from 'react';
import { info } from '../../data/info';

export default function Experience() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal text-lg font-mono font-medium text-accent tracking-widest uppercase mb-4">PENGALAMAN</p>
          <h2 className="reveal d1 text-2xl md:text-4xl font-sans font-semibold leading-tight text-white max-w-5xl mx-auto">
            Berpengalaman mengembangkan solusi digital berbasis web dan mobile untuk berbagai kebutuhan bisnis dan industri.
          </h2>
        </div>

        <div className="space-y-4">
          {info.experience.map((exp, index) => (
            <div key={index} className={`reveal d${index + 1} p-8 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-2xl transition-colors hover:bg-[#111]`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-4xl font-sans font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-lg text-accent font-sans font-medium">{exp.company}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-lg font-sans font-normal text-zinc-400">{exp.period}</p>
                  <p className="text-base font-sans font-normal text-zinc-500 mt-1">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 font-sans font-normal text-lg leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></span>
                    <span className="flex-1">{point}</span>
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
