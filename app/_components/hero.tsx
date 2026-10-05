"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NeuralNetAnimation } from "@/components/animations/neural-net";

const words = ["sustainable", "inclusive", "ethical", "scalable"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Neural network background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-60 pointer-events-none">
        <NeuralNetAnimation />
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-12 w-full flex flex-col h-full justify-center flex-grow">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground uppercase tracking-widest">
            RESONANCE AI4D LAB — ADDIS ABABA UNIVERSITY
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-12">
          <h1 
            className={`text-[clamp(2.75rem,8vw,7.5rem)] font-display leading-[0.98] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">Harnessing AI for</span>
            <span className="block">
              <span className="relative inline-block">
                <span 
                  key={wordIndex}
                  className="inline-flex"
                >
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-brand/30" />
              </span>{" "}
              development.
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p 
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Positioning Ethiopia as a leader in Responsible AI by creating ethical, scalable AI solutions across Health, Agriculture, Governance, and Energy.
          </p>
          
          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/about">
              <Button 
                size="lg" 
                className="bg-brand hover:bg-brand-light text-white px-8 h-14 text-base rounded-full group transition-colors duration-300"
              >
                Our Mission
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/research">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base rounded-full border-brand-border hover:border-brand hover:bg-brand-muted hover:text-brand transition-colors duration-300"
              >
                Key Focus Areas
              </Button>
            </Link>
          </div>
        </div>
        {/* Partner Marquee */}
        <div 
          className={`mt-12 lg:mt-16 pt-8 border-t border-foreground/10 overflow-hidden relative transition-all duration-700 delay-500 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="relative z-20 text-xs font-mono tracking-widest text-muted-foreground uppercase mb-6 pl-4">
            Our Partners
          </div>
          
          <div className="flex w-[200%] marquee">
            {/* We render the list twice to create a seamless infinite scroll effect */}
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex items-center justify-around w-1/2 shrink-0 px-4">
                
                {/* 1. AI4D Africa */}
                <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 text-brand">
                  <svg className="w-8 h-8 shrink-0 text-brand" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="6" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="14" fill="currentColor" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                      <path key={deg} d="M 50 18 L 50 28" stroke="currentColor" strokeWidth="6" strokeLinecap="round" transform={`rotate(${deg} 50 50)`} />
                    ))}
                  </svg>
                  <div className="text-left font-display">
                    <span className="block text-[11px] font-bold leading-tight tracking-tight text-foreground">ARTIFICIAL INTELLIGENCE</span>
                    <span className="block text-[9px] font-semibold tracking-wider text-muted-foreground">FOR DEVELOPMENT</span>
                  </div>
                </div>

                {/* 2. IDRC · CRDI */}
                <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 text-brand">
                  <svg className="w-8 h-8 text-brand" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" />
                    <path d="M 50 25 L 56 38 L 70 38 L 58 46 L 63 60 L 50 50 L 37 60 L 42 46 L 30 38 L 44 38 Z" fill="currentColor" />
                  </svg>
                  <div className="text-left font-sans">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-extrabold tracking-tight text-foreground">IDRC</span>
                      <span className="text-[10px] text-muted-foreground font-bold">·</span>
                      <span className="text-sm font-extrabold tracking-tight text-foreground">CRDI</span>
                    </div>
                  </div>
                </div>

                {/* 3. UK International Development */}
                <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 text-brand">
                  <svg className="w-8 h-8 shrink-0 rounded" viewBox="0 0 60 40">
                    <rect width="60" height="40" fill="currentColor" />
                    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
                    <path d="M0,0 L60,40 M60,0 L0,40" stroke="currentColor" strokeWidth="4" />
                    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
                    <path d="M30,0 V40 M0,20 H60" stroke="currentColor" strokeWidth="7" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-[11px] font-extrabold tracking-tight text-foreground leading-tight">UK International</span>
                    <span className="block text-[11px] font-bold text-foreground leading-tight">Development</span>
                  </div>
                </div>

                {/* 4. Canada (Government of Canada) */}
                <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 text-brand">
                  <div className="text-left font-serif">
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg font-bold tracking-tight text-foreground font-display">Canada</span>
                      <svg className="w-3.5 h-3.5 text-brand fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 5. Addis Ababa University (Host) */}
                <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                  <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center font-display font-bold text-[10px]">
                    AAU
                  </div>
                  <div className="text-left font-display">
                    <span className="block text-[11px] font-bold leading-tight tracking-tight text-foreground">ADDIS ABABA</span>
                    <span className="block text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">University</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
