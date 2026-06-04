import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 60;
      if (atBottom) {
        setActiveSection('contact');
        return;
      }

      const ids = ['contact', 'blog', 'reviews', 'about', 'work', 'services', 'hero'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolled, activeSection };
};

export const useReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    // Gunakan timeout kecil agar DOM sempat dirender oleh React Router
    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
      
      // Jika ada hash di URL, scroll ke elemen tersebut
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (location.pathname === '/') {
        window.scrollTo(0, 0);
      }
    }, 100);
    
    return () => {
      clearTimeout(timeout);
      io.disconnect();
    };
  }, [location.pathname, location.hash]);
};
