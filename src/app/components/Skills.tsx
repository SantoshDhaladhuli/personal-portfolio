import { useState } from 'react';

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "ML & AI",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "LangChain", "OpenAI API"]
    },
    {
      category: "MLOps & Infrastructure",
      skills: ["Docker", "Kubernetes", "MLflow", "Kubeflow", "AWS SageMaker", "Azure ML"]
    },
    {
      category: "Programming Languages",
      skills: ["Python", "SQL", "JavaScript", "C++", "R", "Scala"]
    },
    {
      category: "Data Engineering",
      skills: ["Spark", "Airflow", "Kafka", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Google Cloud", "Azure", "Databricks", "Snowflake"]
    },
    {
      category: "Tools & Frameworks",
      skills: ["Git", "FastAPI", "Flask", "React", "Jupyter", "Weights & Biases"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-primary text-lg font-semibold group-hover:text-primary transition-colors">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-3 py-1.5 bg-accent text-accent-foreground rounded-lg text-sm border border-border hover:border-primary/50 transition-all duration-200 cursor-pointer ${
                      hoveredSkill === skill ? 'bg-primary text-primary-foreground border-primary scale-105' : 'hover:bg-accent/80'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
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
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
