import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(
      footer.children,
      {
        opacity: 0,
        y: 60,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative py-12 overflow-hidden border-t border-border"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold glow-cyan">HIMANSHU SHARMA</h3>
            <p className="text-muted-foreground mt-2">
              App Developer & Mobile Solutions Expert
            </p>
          </div>

          <nav className="flex gap-8">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex gap-4">
            <button
              className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:glow-cyan-box transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open("https://github.com/himanshusharma", "_blank")}
              aria-label="GitHub"
            >
              GH
            </button>
            <button
              className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:glow-cyan-box transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open("https://linkedin.com/in/himanshusharma", "_blank")}
              aria-label="LinkedIn"
            >
              LI
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2025 Himanshu Sharma | Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
};
