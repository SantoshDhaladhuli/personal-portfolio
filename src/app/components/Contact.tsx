import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities, collaborations, or just chatting about AI and ML. 
          Feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a 
            href="mailto:santoshsai666@gmail.com" 
            className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="mb-1">Email</h4>
              <p className="text-sm text-muted-foreground">santoshsai666@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/santosh-dhaladhuli/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="mb-1">LinkedIn</h4>
              <p className="text-sm text-muted-foreground">Connect with me</p>
            </div>
          </a>
          
          <a 
            href="https://github.com/SantoshDhaladhuli" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="mb-1">GitHub</h4>
              <p className="text-sm text-muted-foreground">Check out my code</p>
            </div>
          </a>
          
          <a 
            href="https://x.com/SaiNagaSantoshD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Twitter className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h4 className="mb-1">Twitter</h4>
              <p className="text-sm text-muted-foreground">Follow for updates</p>
            </div>
          </a>
        </div>
        
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Santosh Dhaladhuli. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
