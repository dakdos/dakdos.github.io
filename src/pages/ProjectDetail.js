import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { info } from '../info/Info';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = info.portfolio.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Jika project.images belum ada di Info.js, kita buat array buatan (mengulang gambar) agar fungsi carousel bisa dites.
  const images = project.images || [project.image, project.image, project.image];

  useEffect(() => {
    window.scrollTo(0, 0);
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

  // Pisahkan deskripsi menjadi array kalimat untuk pura-pura dijadikan bullet point fitur jika data features tidak ada
  const dummyFeatures = project.description.split('. ').filter(s => s.length > 5).map(s => s + (s.endsWith('.') ? '' : '.'));

  return (
    <main className="min-h-screen bg-[#0a0a0c] relative text-zinc-300 font-sans pb-24">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 pt-24 relative z-10">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/#work" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm font-medium hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Kembali ke Beranda
          </Link>
        </div>

        {/* Hero Section Carousel */}
        <div className={`relative w-full ${project.type === 'mobile' ? 'aspect-square md:aspect-[4/3] lg:aspect-[4/3]' : 'aspect-video md:aspect-[21/9]'} rounded-[2rem] overflow-hidden bg-zinc-900/40 border border-zinc-800/50 mb-8 flex items-center justify-center group shadow-2xl shadow-black/50`}>
          {/* Background image remains the cover image */}
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-700 blur-sm scale-105" />
          {/* Foreground carousel image */}
          <img src={images[currentImageIndex]} alt={`${project.title} - ${currentImageIndex + 1}`} className="relative z-10 w-[85%] h-[85%] object-contain rounded-xl shadow-2xl drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-500" />
          
          {/* Navigation Arrows */}
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 text-white border border-white/10 hover:bg-black/80 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 shadow-lg">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 text-white border border-white/10 hover:bg-black/80 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 shadow-lg">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 inset-x-0 z-20 flex justify-center">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
              {images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'w-6 bg-accent' : 'w-2 bg-zinc-400 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Title Container (Terpisah dari Gambar) */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full border border-zinc-700/50 bg-zinc-800/30 text-[10px] uppercase tracking-widest text-zinc-400 mb-4 font-semibold">
            Detailed Case Study
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            {project.title}
          </h1>
          {project.techStack && (
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 text-sm font-medium text-accent bg-accent/10 border border-accent/20 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column (Overview & Features) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Card */}
            <section className="bg-[#121214] border border-zinc-800/60 rounded-3xl p-8 md:p-10 shadow-xl">
              <h2 className="text-xs font-bold tracking-widest text-orange-400/80 uppercase mb-6 pb-4 border-b border-zinc-800">
                Overview
              </h2>
              <div className="prose prose-invert prose-zinc max-w-none text-zinc-400 leading-loose text-[15px]">
                <p>{project.description}</p>
              </div>
            </section>

            {/* Features Card */}
            <section className="bg-[#121214] border border-zinc-800/60 rounded-3xl p-8 md:p-10 shadow-xl">
              <h2 className="text-xs font-bold tracking-widest text-orange-400/80 uppercase mb-6 pb-4 border-b border-zinc-800">
                Features & Tech
              </h2>
              <ul className="space-y-5">
                {dummyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[15px] text-zinc-400 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500/50 shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Right Column (Project Info & Buttons) */}
          <div className="space-y-6">
            
            {/* Project Info Card */}
            <div className="bg-[#121214] border border-zinc-800/60 rounded-3xl p-8 shadow-xl sticky top-24">
              <h3 className="text-white font-bold mb-6">Project Info</h3>
              
              <div className="space-y-5">
                <div>
                  <p className="text-xs text-accent/70 font-medium mb-1">Date</p>
                  <p className="text-sm text-zinc-300 font-medium">2024</p>
                </div>
                <div>
                  <p className="text-xs text-accent/70 font-medium mb-1">Role</p>
                  <p className="text-sm text-zinc-300 font-medium">Lead Developer</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 space-y-3">
                <a 
                  href={project.source} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-sm font-medium text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all group"
                >
                  <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  Lihat Kode Sumber
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-accent/10 border border-accent/20 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Buka Demo Langsung
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
