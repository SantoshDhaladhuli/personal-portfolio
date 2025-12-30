import { Github } from 'lucide-react';
import { useState, useEffect, useMemo, useRef } from 'react';

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const projects = [
  {
    title: "Enterprise Demand Forecasting & Planning System",
    description: "Built a production-grade demand forecasting platform for retail and supply-chain planning, delivering probabilistic forecasts, scenario simulations, and optimization-driven inventory recommendations with measurable reductions in stockouts and overstock.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Time Series Analysis",
      "Statistical Modeling",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS"
    ],
    github: "https://github.com/SantoshDhaladhuli/Enterprise-Demand-Forecasting-Planning-System"
  },

  {
    title: "AutoML Experimentation & Model Governance Platform",
    description: "Developed an AutoML and experimentation platform enabling automated preprocessing, hyperparameter optimization, model evaluation, and lineage tracking, significantly accelerating model development cycles.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Optuna",
      "Data Analysis",
      "Model Evaluation",
      "FastAPI",
      "SQL",
      "Docker",
      "CI/CD"
    ],
    github: "https://github.com/SantoshDhaladhuli/AutoML-Experimentation-Model-Governance-Platform"
  },

  {
    title: "Anomaly Detection & Root Cause Analysis Engine",
    description: "Implemented an enterprise-scale anomaly detection system capable of identifying multivariate anomalies and performing graph-based root cause analysis across operational and financial datasets.",
    technologies: [
      "Python",
      "Unsupervised Learning",
      "Isolation Forest",
      "Autoencoders",
      "Graph Algorithms",
      "Neo4j",
      "FastAPI",
      "Kubernetes"
    ],
    github: "https://github.com/SantoshDhaladhuli/Anomaly-Detection-Root-Cause-Analysis-Engine"
  },

  {
    title: "Personalized Recommendation & Ranking System",
    description: "Built a hybrid recommendation engine combining collaborative filtering, content-based models, and real-time re-ranking, designed to handle cold-start problems and high-throughput inference workloads.",
    technologies: [
      "Python",
      "Matrix Factorization",
      "FAISS",
      "Data Structures & Algorithms",
      "Redis",
      "FastAPI",
      "Kubernetes"
    ],
    github: "https://github.com/SantoshDhaladhuli/Personalized-Recommendation-Ranking-System"
  },

  {
    title: "AI-Powered Visual Quality Inspection System",
    description: "Developed a computer vision system for automated defect detection and visual inspection, supporting real-time inference, model drift detection, and GPU-accelerated deployments.",
    technologies: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "YOLO",
      "CNNs",
      "Docker",
      "GPU Inference",
      "AWS",
      "GCP"
    ],
    github: "https://github.com/SantoshDhaladhuli/AI-Powered-Visual-Quality-Inspection-System"
  },

  {
    title: "Transformer-Based Document Intelligence Platform",
    description: "Built a document intelligence platform that extracts structured insights from unstructured documents using transformer models, enabling semantic search, entity extraction, and scalable document processing pipelines.",
    technologies: [
      "Python",
      "Transformers",
      "BERT",
      "OCR",
      "Vector Databases",
      "FastAPI",
      "Kubernetes"
    ],
    github: "https://github.com/SantoshDhaladhuli/Transformer-Based-Document-Intelligence-Platform"
  },

  {
    title: "Domain-Specific Small Language Model (SLM)",
    description: "Designed and fine-tuned a domain-specific small language model optimized for cost-efficient inference, incorporating custom tokenization, LoRA-based fine-tuning, and rigorous evaluation benchmarks.",
    technologies: [
      "Python",
      "Hugging Face Transformers",
      "LLMs & SLMs",
      "LoRA / QLoRA",
      "Model Optimization",
      "GPU Training"
    ],
    github: "https://github.com/SantoshDhaladhuli/Domain-Specific-Small-Language-Model-SLM"
  },

  {
    title: "Enterprise Retrieval-Augmented Generation (RAG) Assistant",
    description: "Implemented a production-ready RAG system enabling grounded, hallucination-resistant question answering over enterprise knowledge bases using hybrid retrieval and scalable ingestion pipelines.",
    technologies: [
      "Python",
      "RAG",
      "LLMs",
      "Vector Databases",
      "SQL",
      "FastAPI",
      "Information Retrieval"
    ],
    github: "https://github.com/SantoshDhaladhuli/Enterprise-Retrieval-Augmented-Generation-RAG-Assistant"
  },

  {
    title: "Agentic AI Workflow Automation Platform",
    description: "Built an agent-based AI platform capable of autonomously executing multi-step business workflows using tool invocation, planning, memory, and human-in-the-loop oversight.",
    technologies: [
      "Python",
      "Agentic AI",
      "LLMs",
      "State Machines",
      "Tool Calling",
      "FastAPI",
      "Observability"
    ],
    github: "https://github.com/SantoshDhaladhuli/Agentic-AI-Workflow-Automation-Platform"
  },

  {
    title: "Multimodal AI Assistant (Vision + Language)",
    description: "Developed a multimodal AI assistant capable of reasoning over text and images, supporting image-based question answering, document understanding, and real-time streaming responses.",
    technologies: [
      "Python",
      "Vision-Language Models",
      "Transformers",
      "Computer Vision",
      "FastAPI",
      "WebSockets",
      "GPU Inference"
    ],
    github: "https://github.com/SantoshDhaladhuli/Multimodal-AI-Assistant"
  },

  {
    title: "Cloud-Native ML Deployment & Serving Platform",
    description: "Designed a cloud-native ML platform for model deployment, autoscaling inference, canary releases, and observability, enabling teams to reliably ship ML models to production.",
    technologies: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Terraform",
      "AWS/GCP",
      "Prometheus",
      "Grafana"
    ],
    github: "https://github.com/SantoshDhaladhuli/Cloud-Native-ML-Deployment-Serving-Platform"
  },

  {
    title: "AI-Driven Decision Optimization & Planning Engine",
    description: "Built a decision optimization system combining mathematical optimization, graph modeling, and reinforcement learning to recommend optimal actions under complex constraints.",
    technologies: [
      "Python",
      "Optimization Algorithms",
      "Graph Theory",
      "Reinforcement Learning",
      "Simulation",
      "FastAPI",
      "Scalable Inference"
    ],
    github: "https://github.com/SantoshDhaladhuli/AI-Driven-Decision-Optimization-Planning-Engine"
  }
];

  const projectsPerSlide = 4;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);
  
  const currentProjects = useMemo(() => {
    const start = currentSlide * projectsPerSlide;
    return projects.slice(start, start + projectsPerSlide);
  }, [currentSlide]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    if (!isHovering) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalSlides, isHovering]);

  const handleSlideChange = (idx: number) => {
    setCurrentSlide(idx);
    resetTimer();
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary"></div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSlideChange(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30 w-2'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <div 
          className="min-h-[600px] overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {currentProjects.map((project, index) => (
              <div 
                key={`${currentSlide}-${index}`}
                className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="group-hover:text-primary transition-colors duration-200">{project.title}</h3>
                    <div className="flex gap-2 opacity-75 group-hover:opacity-100 transition-opacity duration-200">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
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
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
