import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const formElements = formRef.current?.querySelectorAll(".form-element");
    const infoElements = infoRef.current?.querySelectorAll(".info-card");

    if (!section) return;

    if (formElements) {
      gsap.fromTo(
        formElements,
        { opacity: 0, x: -60, filter: "blur(8px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 70%" },
        }
      );
    }

    if (infoElements) {
      gsap.fromTo(
        infoElements,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: section, start: "top 60%" },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-36 relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-glow-cyan/20 via-glow-purple/10 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-glow-blue/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-glow-purple/10 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm tracking-widest uppercase font-medium">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold glow-cyan">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-lg">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div ref={infoRef} className="lg:col-span-2 space-y-4">
            <div className="info-card glass-card rounded-2xl p-6 hover:glow-cyan-box transition-all duration-500 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-glow-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Me</h3>
                  <p className="text-muted-foreground text-sm">58himanshusharma@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="info-card glass-card rounded-2xl p-6 hover:glow-cyan-box transition-all duration-500 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-glow-purple/20 to-glow-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-glow-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Me</h3>
                  <p className="text-muted-foreground text-sm">+91 9140324761</p>
                </div>
              </div>
            </div>

            <div className="info-card glass-card rounded-2xl p-6 hover:glow-cyan-box transition-all duration-500 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-glow-blue/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-glow-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">Ghaziabad, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="info-card glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => window.open("https://github.com/HimanshuSharma8281", "_blank")}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">GitHub</span>
                </button>
                <button
                  onClick={() => window.open("https://www.linkedin.com/in/himanshu-sharma-328751295", "_blank")}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">LinkedIn</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Form glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-glow-purple/20 rounded-full blur-3xl" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="form-element">
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary focus:ring-primary text-foreground h-12 rounded-xl"
                    required
                  />
                </div>

                <div className="form-element">
                  <label className="block text-sm font-medium text-foreground mb-2">Your Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary focus:ring-primary text-foreground h-12 rounded-xl"
                    required
                  />
                </div>

                <div className="form-element">
                  <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary focus:ring-primary text-foreground resize-none rounded-xl"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="form-element w-full bg-gradient-to-r from-primary via-glow-cyan to-glow-blue hover:opacity-90 text-primary-foreground font-semibold h-14 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
