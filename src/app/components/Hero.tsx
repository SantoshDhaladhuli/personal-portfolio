import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Mail, ExternalLink, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/20 px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl">Santosh Dhaladhuli</h1>
            <h2 className="text-3xl md:text-4xl text-primary/80">AI/ML Engineer</h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Senior Associate Data Science at Publicis Sapient, building and deploying machine-learning solutions on AWS. 
            IIT Hyderabad graduate with expertise in ML, Python, and cloud-based AI systems.
          </p>
          
          <div className="flex gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get in Touch
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              View Work
            </a>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/SantoshDhaladhuli" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/santosh-dhaladhuli/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/SaiNagaSantoshD" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:santoshsai666@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/10 shadow-2xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1717501219184-c3fc77f501c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2Njk5OTI4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Technology"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/50 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}