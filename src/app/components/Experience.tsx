import { Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      description: [
        "Led development of scalable ML pipeline serving 10M+ daily predictions",
        "Implemented real-time model monitoring and automated retraining systems",
        "Reduced model inference latency by 60% through optimization techniques",
        "Mentored junior engineers on ML best practices and system design"
      ]
    },
    {
      title: "ML Engineer",
      company: "AI Startup",
      period: "2020 - 2022",
      description: [
        "Built and deployed NLP models for sentiment analysis and text classification",
        "Designed data pipelines processing TB-scale datasets daily",
        "Collaborated with product teams to translate business needs into ML solutions",
        "Established MLOps practices including versioning and experiment tracking"
      ]
    },
    {
      title: "Data Scientist",
      company: "Analytics Firm",
      period: "2018 - 2020",
      description: [
        "Developed predictive models improving customer retention by 25%",
        "Created automated reporting systems for executive dashboards",
        "Conducted A/B testing and statistical analysis for product features",
        "Built recommendation engine increasing user engagement by 40%"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const element = document.getElementById('experience-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience-section" className="py-20 px-6 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative pl-8 pb-8 border-l-2 border-border last:pb-0 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background hover:scale-150 transition-transform duration-300"></div>
              
              <div className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 group-hover:text-primary transition-colors duration-200">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2 group-hover:text-foreground transition-colors duration-200">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
