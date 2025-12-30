import { Brain, Code, Cpu, Sparkles } from 'lucide-react';

export function About() {
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

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl">About Me</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I am an AI Engineer and Data Scientist currently working at Publicis Sapient, where I contribute to building 
              and deploying machine-learning solutions on AWS for real-world business problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I hold a B.Tech from IIT Hyderabad and am pursuing a B.Sc in Programming &amp; Data Science from IIT Madras, 
              giving me a strong foundation in both engineering and applied AI.
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Previously, I worked as a Machine Learning Research Intern at Nanyang Technological University, focusing on fault 
              detection using machine learning and statistical analysis, under the supervision of a faculty researcher.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am particularly interested in applied AI roles where machine learning systems move from experimentation to production 
              and business impact.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
