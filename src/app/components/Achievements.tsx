import { Award } from 'lucide-react';

export function Achievements() {
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

  return (
    <section id="achievements" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4>{achievement.title}</h4>
                  <p className="text-sm text-primary">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
