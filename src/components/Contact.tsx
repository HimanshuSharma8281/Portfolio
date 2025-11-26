import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const section = sectionRef.current;
    const inputs = formRef.current?.querySelectorAll("input, textarea, button");

    if (!section || !inputs) return;

    gsap.fromTo(
      inputs,
      {
        opacity: 0,
        x: -50,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-glow-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary text-sm tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mt-2 glow-cyan">
              Contact Me
            </h2>
          </div>

          <div ref={formRef} className="glass-card rounded-2xl p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-secondary border-border focus:border-primary focus:ring-primary text-foreground"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-secondary border-border focus:border-primary focus:ring-primary text-foreground"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-secondary border-border focus:border-primary focus:ring-primary text-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan-box transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>

            <div className="pt-6 border-t border-border space-y-4">
              <div className="text-center space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Email:</span> 58himanshusharma@gmail.com
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Phone:</span> +91 9140324761
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Location:</span> Ghaziabad, India
                </p>
              </div>
              <p className="text-center text-muted-foreground">
                Connect with me
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open("https://github.com/himanshusharma", "_blank")}
                >
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open("https://linkedin.com/in/himanshusharma", "_blank")}
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
