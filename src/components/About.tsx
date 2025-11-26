import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "@/assets/himanshu-profile.jpg";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Flutter", icon: "📱" },
  { name: "Dart", icon: "🎯" },
  { name: "Firebase", icon: "🔥" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "⚡" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "🔧" },
  { name: "MongoDB", icon: "🍃" },
];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const skillItems = skillsRef.current?.children;

    if (!section || !image || !content || !skillItems) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      image,
      {
        opacity: 0,
        x: -100,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
      }
    )
      .fromTo(
        content,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .fromTo(
        skillItems,
        {
          opacity: 0,
          y: 30,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full max-w-md mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-br from-glow-cyan to-glow-purple rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <img
                src={profileImg}
                alt="Himanshu Sharma - App Developer"
                className="relative z-10 w-full rounded-full glass-card p-4 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <span className="text-primary text-sm tracking-widest uppercase">
                About Me
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mt-2 glow-cyan">
                App Developer
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Himanshu Sharma from Ghaziabad! I'm a passionate app developer specializing in 
                Flutter and cross-platform mobile development. With hands-on experience at Dhankuber Fintech 
                and Digital Guruji, I've built production-ready applications for fintech and health tech domains.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I hold certifications from JPMorgan Chase, Walmart USA, Electronic Arts, and AWS. 
                I love building scalable, secure, and user-friendly mobile applications using modern 
                technologies like Firebase, REST APIs, and real-time data synchronization.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Tech Stack
              </h3>
              <div
                ref={skillsRef}
                className="grid grid-cols-4 gap-4"
              >
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card p-4 rounded-xl text-center hover:glow-cyan-box transition-all duration-300 cursor-pointer hover:-translate-y-2"
                  >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <div className="text-sm font-medium">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
