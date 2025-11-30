import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(
      footer.querySelectorAll(".footer-animate"),
      { opacity: 0, y: 40, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: footer, start: "top 90%" },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="relative py-16 overflow-hidden border-t border-border/50 bg-gradient-to-t from-background via-secondary/20 to-background"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="footer-animate grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold glow-cyan mb-3">HIMANSHU SHARMA</h3>
            <p className="text-muted-foreground mb-6 max-w-xs mx-auto md:mx-0">
              Building innovative mobile solutions with passion and precision. Let's create something amazing together.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start">
              <button
                onClick={() => window.open("https://github.com/HimanshuSharma8281", "_blank")}
                className="w-11 h-11 glass-card rounded-xl flex items-center justify-center hover:glow-cyan-box transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 group"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>
              <button
                onClick={() => window.open("https://www.linkedin.com/in/himanshu-sharma-328751295", "_blank")}
                className="w-11 h-11 glass-card rounded-xl flex items-center justify-center hover:glow-cyan-box transition-all duration-300 hover:-translate-y-1 hover:bg-primary/10 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-5">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "#about", label: "About Me" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-5">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                58himanshusharma@gmail.com
              </p>
              <p className="text-muted-foreground">
                +91 9140324761
              </p>
              <p className="text-muted-foreground">
                Ghaziabad, India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-animate h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="footer-animate flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} Himanshu Sharma. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            in India
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:glow-cyan-box transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Back to Top</span>
            <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};
