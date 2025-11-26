import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate progress bar
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out",
    })
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
      }, "-=0.3")
      .to(preloaderRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete();
        },
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div ref={textRef} className="text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold glow-cyan tracking-tight">
          HIMANSHU
        </h1>
        <p className="text-lg text-muted-foreground tracking-wider">Loading Experience...</p>
        
        <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden mx-auto">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-glow-cyan to-glow-purple w-0 glow-cyan-box"
          />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-glow-cyan rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};
