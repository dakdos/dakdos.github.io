import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Work from '../components/Work';
import About from '../components/About';
import GitHubStats from '../components/GitHubStats';
import Contact from '../components/Contact';

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
