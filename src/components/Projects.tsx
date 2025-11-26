import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import financeApp from "@/assets/finance-app.jpg";
import healthTracker from "@/assets/health-tracker.jpg";
import smartYoga from "@/assets/smart-yoga.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Finance Investment App",
    description: "Feature-rich investing app with real-time market APIs, live dashboards, and secure payment integration",
    image: financeApp,
    tags: ["Flutter", "Firebase", "Razorpay", "AWS"],
    link: "https://github.com/HimanshuSharma8281/dhankuber",
  },
  {
    title: "Health Tracker App",
    description: "Cross-platform health tracker with Google Fit API, accelerometer, and pedometer integration",
    image: healthTracker,
    tags: ["Flutter", "Google Fit", "Firebase", "GetX"],
    link: "https://github.com/HimanshuSharma8281/Health_tracker",
  },
  {
    title: "Smart Yoga App",
    description: "IoT-enabled Yoga Mat tracking posture, pressure points, and alignment with TensorFlow Lite pose detection",
    image: smartYoga,
    tags: ["Flutter", "Firebase", "IoT", "TensorFlow"],
    link: "https://github.com/HimanshuSharma8281/smart_yoga",
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = containerRef.current?.children;

    if (!section || !title || !cards) return;

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-2 glow-cyan">
            My Projects
          </h2>
        </div>

        <div
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:glow-cyan-box transition-all duration-500 block"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-secondary rounded-full text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Project
                </Button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
