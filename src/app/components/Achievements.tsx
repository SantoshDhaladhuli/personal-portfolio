import { Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const achievements = [
    {
      title: "Best Innovation Award",
      organization: "Tech Conference 2024",
      description: "Recognized for pioneering work in scalable ML systems"
    },
    {
      title: "Published Research Paper",
      organization: "AI Research Journal",
      description: "Efficient Fine-tuning Techniques for Large Language Models"
    },
    {
      title: "Top 1% Kaggle Competitor",
      organization: "Kaggle",
      description: "Achieved Grandmaster status with multiple gold medals"
    },
    {
      title: "Patent Granted",
      organization: "USPTO",
      description: "Novel approach to real-time anomaly detection in ML systems"
    },
    {
      title: "AI Excellence Award",
      organization: "Industry Conference 2023",
      description: "Outstanding contribution to production ML infrastructure"
    },
    {
      title: "Open Source Contribution",
      organization: "Major ML Framework",
      description: "Core contributor to popular open-source ML library"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const element = document.getElementById('achievements-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements-section" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Achievements & Recognition</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="group-hover:text-primary transition-colors duration-200">{achievement.title}</h4>
                  <p className="text-sm text-primary group-hover:text-primary/80 transition-colors">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
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
