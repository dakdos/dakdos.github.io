import React from 'react';
import { info } from '../../data/info';

export default function Contact() {
  const handleEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nama = formData.get('nama');
    const email = formData.get('email');
    const pesan = formData.get('pesan');
    
    const subject = encodeURIComponent(`Pesan dari Portofolio - ${nama}`);
    const body = encodeURIComponent(`Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`);
    
    window.location.href = `mailto:zulfahmii2005@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Hubungi saya</p>
              <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl leading-tight mb-5">Mari bekerja<br />bersama</h2>
              <p className="reveal d2 text-zinc-400 leading-relaxed mb-8">Saya terbuka untuk proyek pengembangan web dan mobile. Mari kita diskusikan ide Anda.</p>
              <div className="reveal d3 flex flex-col gap-4">
                {info.socials.map((social, index) => (
                  <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <i className={social.icon}></i>
                    </span>
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="reveal d2">
              <form onSubmit={handleEmail} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="nama" type="text" placeholder="Nama" required className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                  <input name="email" type="email" placeholder="Email" required className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <textarea name="pesan" rows="4" placeholder="Pesan" required className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                <button type="submit" className="shimmer w-full bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors">
                  Kirim pesan →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
