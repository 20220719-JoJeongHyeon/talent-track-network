
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Archive from '@/components/Archive';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Career from '@/components/Career';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Archive />
      <Skills />
      <Projects />
      <Career />
      <Footer />
    </div>
  );
};

export default Index;
