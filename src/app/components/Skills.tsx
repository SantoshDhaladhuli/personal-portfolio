export function Skills() {
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
          <h2 className="text-4xl md:text-5xl">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-accent text-accent-foreground rounded-lg text-sm border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
