import { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', prefix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary">
        {prefix}{count}{suffix}
      </div>
    </div>
  );
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Projects Completed', value: 12 },
    { label: 'Years Experience', value: 1, suffix: '+' },
    { label: 'Technologies Mastered', value: 30, suffix: '+' }
  ];

  return (
    <section id="stats-section" className="py-20 px-6 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl bg-card/50 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.11}s` }}
            >
              {isVisible && <Counter end={stat.value} suffix={stat.suffix} />}
              <p className="text-muted-foreground mt-4 text-sm md:text-base">{stat.label}</p>
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
