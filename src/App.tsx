import React from 'react';
import Hero from './components/Hero';
import ProblemsSection from './components/ProblemsSection';
import SolutionsSection from './components/SolutionsSection';
import ImpactSection from './components/ImpactSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <ImpactSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default App;