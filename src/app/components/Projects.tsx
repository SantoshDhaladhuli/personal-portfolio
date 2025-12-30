import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Real-time Recommendation Engine",
      description: "Built a scalable recommendation system processing millions of user interactions daily, improving click-through rates by 45%.",
      technologies: ["Python", "PyTorch", "Redis", "Kafka", "Kubernetes"],
      link: "#",
      github: "#"
    },
    {
      title: "NLP-Powered Customer Support",
      description: "Developed an intelligent chatbot using transformer models that automated 70% of customer queries, reducing response time by 80%.",
      technologies: ["Transformers", "FastAPI", "Docker", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      title: "Computer Vision Quality Control",
      description: "Created an automated defect detection system using CNNs, achieving 98% accuracy and reducing manual inspection time by 90%.",
      technologies: ["TensorFlow", "OpenCV", "AWS SageMaker", "MLflow"],
      link: "#",
      github: "#"
    },
    {
      title: "Predictive Maintenance Platform",
      description: "Designed ML pipeline for equipment failure prediction, preventing costly downtime and saving $2M annually in maintenance costs.",
      technologies: ["Scikit-learn", "Spark", "Airflow", "Grafana"],
      link: "#",
      github: "#"
    },
    {
      title: "Automated ML Pipeline",
      description: "Built end-to-end MLOps platform with automated training, evaluation, and deployment, reducing model iteration time by 60%.",
      technologies: ["Kubeflow", "Docker", "Jenkins", "MinIO"],
      link: "#",
      github: "#"
    },
    {
      title: "LLM Fine-tuning Framework",
      description: "Created a framework for efficient fine-tuning of large language models on domain-specific data using parameter-efficient methods.",
      technologies: ["PyTorch", "LoRA", "Weights & Biases", "Hugging Face"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3>{project.title}</h3>
                  <div className="flex gap-2">
                    <a 
                      href={project.github} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.link} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
