import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { info } from '../data/info';
import appStoreBadge from '../assets/images/apple.png';
import playStoreBadge from '../assets/images/playstore.png';

export default function ProjectDetail() {
  const { id } = useParams();
  const currentIndex = info.portfolio.findIndex(p => p.id === id);
  const project = info.portfolio[currentIndex];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Get next project for the footer navigation
  const nextProject = info.portfolio[(currentIndex + 1) % info.portfolio.length];

  const images = project?.images || [project?.image];

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 bg-[#0a0a0c]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Proyek tidak ditemukan</h1>
          <Link to="/" className="text-accent hover:underline">Kembali ke Beranda</Link>
        </div>
      </main>
    );
  }

  const dummyFeatures = project.description.split('. ').filter(s => s.length > 5).map(s => s + (s.endsWith('.') ? '' : '.'));
  const isMobileMockup = project.type === 'mobile' && currentImageIndex !== 0;

  return (
    <main className="min-h-screen bg-[#070708] relative text-zinc-300 font-sans">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10">
        
        {/* Back Button */}
        <div className="mb-12">
          <Link to="/#work" className="inline-flex items-center gap-2 group text-zinc-500 hover:text-white transition-colors">
            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 group-hover:border-zinc-700 transition-colors">
               <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </span>
            <span className="text-sm font-medium">Kembali ke Portofolio</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
             <span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
               {project.type} Case Study
             </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white text-center mb-10 leading-[1.1] tracking-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
            {project.techStack?.map((tech, i) => (
              <span key={i} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 glass rounded-2xl hover:text-accent transition-colors">
                <i className={`${tech.icon} text-lg`}></i>
                {tech.name}
              </span>
            ))}
          </div>

          {/* Store Buttons */}
          {(project.appStore || project.playStore) && (
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              {project.appStore && (
                <a href={project.appStore} target="_blank" rel="noreferrer" className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 rounded-lg overflow-hidden">
                  <img src={appStoreBadge} alt="Download on the App Store" className="h-8 w-auto" />
                </a>
              )}
              {project.playStore && (
                <a href={project.playStore} target="_blank" rel="noreferrer" className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 rounded-lg overflow-hidden">
                  <img src={playStoreBadge} alt="Get it on Google Play" className="h-8 w-auto" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Cinematic Showcase Section */}
        <div className="relative mb-24">
          <div className={`relative w-full ${project.type === 'mobile' ? 'aspect-[4/3]' : 'aspect-video'} rounded-[2.5rem] overflow-hidden bg-zinc-900/20 border border-white/5 flex items-center justify-center group`}>
            {/* Ambient Background Blur */}
            <div className="absolute inset-0 z-0">
               <img src={project.image} alt="" className="w-full h-full object-cover blur-xl opacity-50 group-hover:opacity-40 transition-all duration-700 scale-110" />
               <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Mockup Container */}
            <div className={`relative z-10 w-full h-full flex items-center justify-center p-6 md:p-12`}>
               <div className={`relative cursor-zoom-in group/img flex items-center justify-center ${isMobileMockup ? 'max-w-full h-[95%]' : 'w-full h-full'}`} onClick={() => setIsZoomed(true)}>
                  <img 
                    src={images[currentImageIndex]} 
                    alt={project.title} 
                    className={`${isMobileMockup ? 'max-w-full h-full object-contain' : 'w-full h-full object-cover object-top'} rounded-2xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.6)] border border-white/10 transition-transform duration-500 group-hover/img:scale-[1.02]`}
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/20 transition-all opacity-0 group-hover/img:opacity-100 rounded-2xl">
                     <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest">Click to Zoom</span>
                  </div>
               </div>
            </div>

            {/* Navigation Overlays */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 inset-x-0 z-30 flex justify-center gap-2">
              {images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentImageIndex === idx ? 'w-8 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="grid md:grid-cols-5 gap-12">
             {/* Left: Overview */}
             <div className="md:col-span-3 space-y-8">
                <section>
                  <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-accent/30"></span>
                    Overview
                  </h2>
                  <div className="text-lg text-zinc-400 leading-relaxed font-light">
                    <p>{project.description}</p>
                  </div>
                </section>
             </div>

             {/* Right: Features List */}
             <div className="md:col-span-2">
                <div className="glass rounded-[2rem] p-8 space-y-6">
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Core Features</h3>
                  <ul className="space-y-4">
                    {dummyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400 group">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors shrink-0"></span>
                        <span className="leading-relaxed group-hover:text-zinc-200 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-40 pt-16 border-t border-zinc-900">
           <p className="text-center text-xs font-bold tracking-[0.3em] text-zinc-600 uppercase mb-8">Berikutnya</p>
           <Link to={`/project/${nextProject.id}`} className="group block text-center">
              <h4 className="text-3xl md:text-5xl font-display font-bold text-zinc-700 group-hover:text-white transition-all duration-500 mb-6">
                 {nextProject.title}
              </h4>
              <div className="inline-flex items-center gap-2 text-accent font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                 Lihat Proyek Ini <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </div>
           </Link>
        </div>

      </div>

      {/* Full Screen Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white p-2"
            onClick={() => setIsZoomed(false)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <img 
            src={images[currentImageIndex]} 
            alt={project.title} 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300"
          />
        </div>
      )}
    </main>
  );
}
