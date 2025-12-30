import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden animate-pageLoad">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient"></div>
      <ScrollProgress />
      <Navigation />
      <BackToTop />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Stats />
        <Contact />
      </main>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes pageLoad {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animate-pageLoad {
          animation: pageLoad 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
