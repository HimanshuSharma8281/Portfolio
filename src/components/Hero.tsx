import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "./ui/button";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      headlineRef.current,
      {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
      }
    )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .fromTo(
        splineRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=1"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fullscreen Spline 3D Background */}
      <div ref={splineRef} className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/orb-k0ZnGtHeA6xoXxKZNoCyBkEs/"
          frameBorder="0"
          className="w-full h-full"
          title="3D Orb Background"
        />
      </div>

      {/* Floating orbs overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-glow-cyan/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Centered content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Welcome text */}
          <div
            ref={headlineRef}
            className="text-sm md:text-base tracking-widest uppercase glow-cyan"
          >
            Welcome to my world
          </div>

          {/* Main headline */}
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="glow-cyan gradient-text">Himanshu Sharma</span>
            <br />
            <span className="text-5xl md:text-7xl lg:text-8xl">
              App Developer
            </span>
          </h1>

          {/* Description */}
          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed"
          >
            Building feature-rich cross-platform mobile applications with Flutter and modern technologies.
            Specialized in real-time APIs, Firebase integration, and creating seamless user experiences
            for fintech and health tech applications.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 glow-cyan-box transition-all duration-300 hover:scale-105"
            >
              Hire Me Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
