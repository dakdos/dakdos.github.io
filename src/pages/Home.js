import React from 'react';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Work from '../components/sections/Work';
import About from '../components/sections/About';
import GitHubStats from '../components/sections/GitHubStats';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Work />
      <About />
      <GitHubStats />
      <Contact />
    </main>
  );
}
