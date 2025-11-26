import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Digital Guruji",
    role: "App Developer",
    period: "May 2025 – Aug 2025",
    description: "Built a cross-platform Health Tracker app with Google Fit API, accelerometer, and pedometer integration.",
    achievements: [
      "Used Provider/GetX, async streams, and responsive UI with Material Design",
      "Integrated Firebase Firestore & Firebase Auth for scalable backend and secure login"
    ]
  },
  {
    company: "Dhankuber Fintech",
    role: "App Developer",
    period: "Feb 2025 – Apr 2025",
    description: "Developed a feature-rich Investing App using Flutter with real-time market APIs and live stock dashboards.",
    achievements: [
      "Implemented Firebase Authentication & Firestore for secure login and encrypted transactions",
      "Used Provider/BLoC, REST APIs, lazy loading, and caching for smooth performance"
    ]
  }
];

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(".experience-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
        duration: 1,
        ease: "power3.out",
      });

      // Animate timeline line
      gsap.from(timelineRef.current, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
      });

      // Animate each experience card
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            opacity: 0,
            x: index % 2 === 0 ? -60 : 60,
            filter: "blur(10px)",
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-cyan rounded-full blur-[120px] opacity-20 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple rounded-full blur-[120px] opacity-20 animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="experience-title text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Professional journey building innovative mobile applications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-glow-cyan via-glow-purple to-glow-cyan"
            style={{ transform: "translateX(-50%)" }}
          />

          {/* Experience cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center glow-cyan-box">
                    <Briefcase className="w-6 h-6 text-glow-cyan" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-[calc(50%-4rem)] ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 group">
                    <div className="inline-block px-4 py-1 rounded-full bg-glow-cyan/10 border border-glow-cyan/20 mb-4">
                      <span className="text-glow-cyan text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 gradient-text">
                      {exp.company}
                    </h3>
                    
                    <p className="text-glow-purple text-lg font-semibold mb-4">
                      {exp.role}
                    </p>
                    
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className={`space-y-2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-foreground/60 text-sm flex items-start gap-2">
                          <span className="text-glow-cyan mt-1">▸</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-[calc(50%-4rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
