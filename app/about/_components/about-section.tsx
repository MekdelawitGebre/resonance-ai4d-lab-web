"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, HeartPulse, Sprout, Scale, Zap, Target, Users, BookOpen, ShieldCheck, Lightbulb, Leaf } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Ethical & Scalable AI Solutions",
    description: "Design and implement AI solutions to tackle Ethiopia's critical challenges in health, agriculture, governance, and energy & climate.",
  },
  {
    icon: Users,
    title: "Inclusive AI Talent Pipeline",
    description: "Ensure a sustainable and inclusive pipeline of AI talent in Ethiopia, fostering interdisciplinary research and global perspectives.",
  },
  {
    icon: BookOpen,
    title: "Regional & Global Collaboration",
    description: "Enhance Ethiopia's AI ecosystem through partnerships with local universities, government entities, private sector, and Africa AI4D labs.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based AI Policy",
    description: "Develop policy recommendations and guidelines to support ethical and effective AI integration aligned with national priorities and SDGs.",
  },
];

const sdgs = [
  {
    number: "02",
    code: "SDG 2",
    title: "Zero Hunger",
    description: "Enhanced food security through sustainable agricultural practices & AI crop monitoring.",
    badgeBg: "bg-foreground/5 text-foreground border-foreground/10",
    accentBorder: "border-foreground/10 hover:border-brand/50",
    glow: "group-hover:shadow-brand/5",
  },
  {
    number: "03",
    code: "SDG 3",
    title: "Good Health & Well-being",
    description: "Improved healthcare access, diagnostic support, and patient outcomes in resource-constrained settings.",
    badgeBg: "bg-foreground/5 text-foreground border-foreground/10",
    accentBorder: "border-foreground/10 hover:border-brand/50",
    glow: "group-hover:shadow-brand/5",
  },
  {
    number: "07",
    code: "SDG 7",
    title: "Affordable & Clean Energy",
    description: "Optimized energy resource management, microgrid stability, and climate resilience.",
    badgeBg: "bg-foreground/5 text-foreground border-foreground/10",
    accentBorder: "border-foreground/10 hover:border-brand/50",
    glow: "group-hover:shadow-brand/5",
  },
  {
    number: "16",
    code: "SDG 16",
    title: "Peace, Justice & Institutions",
    description: "More transparent, accountable, and efficient governance systems powered by ethical AI.",
    badgeBg: "bg-foreground/5 text-foreground border-foreground/10",
    accentBorder: "border-foreground/10 hover:border-brand/50",
    glow: "group-hover:shadow-brand/5",
  },
];

const focusAreas = [
  {
    icon: HeartPulse,
    title: "Innovative Health Solutions",
    description: "AI-assisted diagnostic tools, epidemic modeling, and remote health telemetry tailored for rural healthcare centers.",
  },
  {
    icon: Sprout,
    title: "Resilient Agriculture & Food Systems",
    description: "Yield forecasting, climate adaptation models, and automated crop disease detection protecting 85%+ of Ethiopia's population.",
  },
  {
    icon: Scale,
    title: "Inclusive Governance & Justice",
    description: "Natural language processing for local languages, transparent public data analytics, and evidence-based policy frameworks.",
  },
  {
    icon: Zap,
    title: "Sustainable Energy & Climate Resilience",
    description: "Grid optimization, renewable energy prediction, and micro-climate environmental sensing across the Horn of Africa.",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-36 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header & Motto Badge */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >

          <h2 className="text-4xl lg:text-7xl font-display tracking-tight leading-[0.95] mb-8">
            Harnessing AI for Sustainable
            <br />
            <span className="text-muted-foreground">& Inclusive Development.</span>
          </h2>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
            <div className="lg:col-span-7 space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground text-xl lg:text-2xl">
                The Resonance Lab <span className="text-muted-foreground font-normal">(Responsible AI Solutions and Networks for Sustainable Development)</span> at <strong className="font-semibold text-foreground">Addis Ababa University</strong> aims to position <strong className="font-semibold text-foreground">Ethiopia</strong> as a leader in <strong className="font-semibold text-foreground">Responsible AI</strong>.
              </p>
              <p>
                Ethiopia, a diverse country in the Horn of Africa, faces critical challenges in achieving <strong className="font-semibold text-foreground">sustainable development</strong>. With over <strong className="font-semibold text-foreground">85% of its population reliant on agriculture</strong>, the sector is highly vulnerable to <strong className="font-semibold text-foreground">climate variability</strong>. The country also addresses vital needs in <strong className="font-semibold text-foreground">healthcare access, energy reliability, and governance transparency</strong>.
              </p>
              <p>
                Aligned with <strong className="font-semibold text-foreground">Ethiopia&apos;s 10-Year Development Plan (2021–2030)</strong> and the <strong className="font-semibold text-foreground">UN Sustainable Development Goals</strong>, our lab bridges the gap in <strong className="font-semibold text-foreground">AI professionals, high-performance compute, and collaborative research</strong>.
              </p>
            </div>

            {/* Vision Cards Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:border-foreground/25 transition-all">
                <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center mb-4 text-foreground">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl mb-1">Innovation Hub</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Positioning Ethiopia as a regional leader in Responsible AI for development, advancing key UN SDGs.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:border-foreground/25 transition-all">
                <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center mb-4 text-foreground">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl mb-1">Sustainable Solutions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Creating ethical and scalable AI solutions tailored to Ethiopia&apos;s specific local and national needs.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:border-foreground/25 transition-all">
                <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center mb-4 text-foreground">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl mb-1">Collaborative Ecosystem</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fostering strong interdisciplinary partnerships between academia, government, industry, and local communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="mb-28">
          <div className="mb-12">
            <h3 className="font-display text-3xl lg:text-5xl">Our Objectives</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.title}
                  className="group p-8 rounded-2xl border bg-background/80 hover:bg-background border-foreground/10 hover:border-brand/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg hover:shadow-brand/5"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h4 className="font-display text-xl mb-3">{obj.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="mb-28">
          <div className="mb-12 pb-8">
            <h3 className="font-display text-5xl lg:text-7xl leading-[1.1] tracking-tight max-w-xl">
              Key Focus Areas
            </h3>
          </div>

          <div className="grid md:grid-cols-2 bg-foreground/10 gap-px border-y border-foreground/10">
            {focusAreas.map((area, index) => {
              return (
                <div
                  key={area.title}
                  className="bg-background p-8 lg:p-16 flex flex-col justify-center min-h-[320px]"
                >
                  <h4 className="font-display text-4xl lg:text-5xl text-foreground mb-4 leading-[1.1] tracking-tight">{area.title}</h4>
                  <p className="text-muted-foreground text-lg">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* SDG Alignment Section */}
        <div>
          <div className="mb-12">
            <h3 className="font-display text-3xl lg:text-5xl mb-4">
              Sustainable Development Goals (SDGs)
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Our work directly advances UN SDGs to achieve a more sustainable, equitable, and resilient future for Ethiopia and Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgs.map((sdg) => (
              <div
                key={sdg.code}
                className={`group p-8 rounded-2xl border bg-background/80 hover:bg-background ${sdg.accentBorder} transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-lg ${sdg.glow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl text-foreground font-semibold">{sdg.number}</span>
                    <span className={`font-mono text-xs px-3 py-1 rounded-full border font-bold ${sdg.badgeBg}`}>
                      {sdg.code}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl mb-3 text-foreground">{sdg.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sdg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
