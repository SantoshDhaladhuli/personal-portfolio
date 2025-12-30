import { Brain, Code, Cpu, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const expertise = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Designing and implementing advanced ML models for complex problem-solving"
    },
    {
      icon: Cpu,
      title: "Scalable Systems",
      description: "Building robust ML infrastructure that handles production workloads"
    },
    {
      icon: Code,
      title: "MLOps & Deployment",
      description: "Streamlining model deployment with CI/CD pipelines and monitoring"
    },
    {
      icon: Sparkles,
      title: "AI Applications",
      description: "Creating intelligent applications that leverage cutting-edge AI technologies"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const element = document.getElementById('about-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              I am an AI Engineer and Data Scientist currently working at Publicis Sapient, where I contribute to building 
              and deploying machine-learning solutions on AWS for real-world business problems.
            </p>
            <p className="text-muted-foreground leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              I hold a B.Tech from IIT Hyderabad and am pursuing a B.Sc in Programming &amp; Data Science from IIT Madras, 
              giving me a strong foundation in both engineering and applied AI.
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Previously, I worked as a Machine Learning Research Intern at Nanyang Technological University, focusing on fault 
              detection using machine learning and statistical analysis, under the supervision of a faculty researcher.
            </p>
            <p className="text-muted-foreground leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              I am particularly interested in applied AI roles where machine learning systems move from experimentation to production 
              and business impact.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => {
            const colors = ['text-blue-500', 'text-purple-500', 'text-pink-500', 'text-cyan-500'];
            return (
              <div 
                key={index} 
                className={`p-6 rounded-xl bg-card/50 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <item.icon className={`w-10 h-10 ${colors[index]} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
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
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
