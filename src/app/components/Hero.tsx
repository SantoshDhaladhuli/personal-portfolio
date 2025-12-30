import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Mail, ExternalLink, Twitter } from 'lucide-react';

export function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/20 px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeInUp">
          <div className="space-y-2">
            <p className="text-muted-foreground animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>Santosh Dhaladhuli</h1>
            <h2 className="text-3xl md:text-4xl text-primary/80 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>AI/ML Engineer</h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Senior Associate Data Science at Publicis Sapient, building and deploying machine-learning solutions on AWS. 
            IIT Hyderabad graduate with expertise in ML, Python, and cloud-based AI systems.
          </p>
          
          <div className="flex gap-4 pt-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg inline-flex items-center gap-2"
            >
              Get in Touch
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              View Work
            </a>
          </div>
          
          <div className="flex gap-4 pt-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <a href="https://github.com/SantoshDhaladhuli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-125">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/santosh-dhaladhuli/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-125">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://x.com/SaiNagaSantoshD" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-125">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="mailto:santoshsai666@gmail.com" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-125">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
        
        <div className="relative animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/10 shadow-2xl group hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all duration-500 hover:border-primary/30 backdrop-blur-sm">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1717501219184-c3fc77f501c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMCB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NjY5OTkyODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Technology"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 animate-float"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/50 rounded-full blur-3xl group-hover:bg-accent/70 transition-colors"></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}