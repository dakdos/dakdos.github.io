import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import { useNavigation, useReveal } from './hooks/useNavigation';

export default function App() {
  const { scrolled, activeSection } = useNavigation();
  useReveal();

  return (
    <div className="dark bg-zinc-950 text-zinc-100 antialiased min-h-screen">
      <Header scrolled={scrolled} activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
