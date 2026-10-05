"use client";

import { useEffect, useRef, useState } from "react";
import { 
  HeartPulse, 
  Sprout, 
  Scale, 
  Zap, 
  ArrowUpRight, 
  Stethoscope, 
  Activity, 
  ShieldAlert, 
  Wheat, 
  Droplets, 
  Plane, 
  FileText, 
  BarChart3, 
  MessageSquareText, 
  LineChart, 
  Radio, 
  CloudRain 
} from "lucide-react";

const researchThemes = [
  {
    id: "health",
    number: "01",
    title: "Innovative Health Solutions",
    subtitle: "Developing AI-powered tools to improve healthcare access and outcomes in rural and underserved areas.",
    icon: HeartPulse,
    badge: "HEALTH & WELLBEING",
    visualType: "healthVisual",
    projects: [
      {
        icon: Stethoscope,
        name: "AI Telemedicine for Rural Health",
        description: "AI-powered telemedicine platform bridging rural healthcare gaps and connecting peripheral clinics to specialists.",
        tag: "Telehealth Platform",
      },
      {
        icon: Activity,
        name: "AI Diagnostics for Early Detection",
        description: "AI diagnostic tools for early screening of non-communicable diseases, cardiovascular risks, and maternal health issues.",
        tag: "Computer Vision & ML",
      },
      {
        icon: ShieldAlert,
        name: "Predictive Outbreak Management",
        description: "Predictive analytics for real-time outbreak monitoring and vector management (e.g., malaria, antimicrobial resistance).",
        tag: "Epidemic Modeling",
      },
    ],
  },
  {
    id: "agriculture",
    number: "02",
    title: "Resilient Agriculture & Food Systems",
    subtitle: "Leveraging AI and IoT to enhance food security, boost farm productivity, and mitigate climate variability.",
    icon: Sprout,
    badge: "FOOD SECURITY & IOT",
    visualType: "agriVisual",
    projects: [
      {
        icon: Droplets,
        name: "Precision Agriculture & Resource Optimization",
        description: "AI-driven precision farming tools for optimizing water usage, soil nutrients, and fertilizer allocation.",
        tag: "Precision Farming",
      },
      {
        icon: Wheat,
        name: "AI-Driven Dairy & Cold Chain Management",
        description: "IoT-based dairy management systems monitoring herd health, milk quality telemetry, and cold chain logistics.",
        tag: "IoT & Cold Chain",
      },
      {
        icon: Plane,
        name: "AI for Wheat Disease Management",
        description: "Deep learning models analyzing UAV aerial imagery to detect and manage wheat rust and crop blights early.",
        tag: "UAV Aerial AI",
      },
    ],
  },
  {
    id: "governance",
    number: "03",
    title: "Inclusive Governance & Justice",
    subtitle: "Enhancing transparency, optimizing decision-making, and improving public service delivery through ethical AI.",
    icon: Scale,
    badge: "ETHICAL GOVERNANCE & NLP",
    visualType: "govVisual",
    projects: [
      {
        icon: FileText,
        name: "AI-Driven Judicial Case Management",
        description: "Intelligent judicial case indexing tools that streamline legal processes and reduce court backlog across jurisdictions.",
        tag: "Legal Tech & Workflow",
      },
      {
        icon: BarChart3,
        name: "NLP & Public Resource Allocation",
        description: "AI-based public resource allocation and budget analytics for transparent, equitable, and efficient governance.",
        tag: "Local NLP & Data",
      },
      {
        icon: MessageSquareText,
        name: "Sentiment Analysis for Policy Feedback",
        description: "Multilingual sentiment analysis monitoring public feedback across Ethiopian languages to inform evidence-based policy.",
        tag: "Policy Intelligence",
      },
    ],
  },
  {
    id: "energy",
    number: "04",
    title: "Sustainable Energy & Climate Resilience",
    subtitle: "Designing AI-powered models to optimize energy forecasting, promote clean grid energy, and build climate resilience.",
    icon: Zap,
    badge: "CLEAN ENERGY & CLIMATE",
    visualType: "energyVisual",
    projects: [
      {
        icon: LineChart,
        name: "Energy Demand & Supply Forecasting",
        description: "AI forecasting models predicting renewable energy supply (hydro, solar, wind) and peak regional grid demand.",
        tag: "Grid Predictive AI",
      },
      {
        icon: Radio,
        name: "AI for Off-Grid Energy Distribution",
        description: "Optimization algorithms for smart microgrid energy distribution to underserved and rural communities.",
        tag: "Microgrid Telemetry",
      },
      {
        icon: CloudRain,
        name: "Climate Risk & Early Warning System",
        description: "Integrated early warning platform combining satellite imagery, meteorological telemetry, and real-time climate risk analysis.",
        tag: "Satellite & Met Analytics",
      },
    ],
  },
];

/* Interactive SVG Animated Visuals */
function HealthVisual() {
  return (
    <svg viewBox="0 0 240 180" className="w-full h-full text-brand">
      <rect x="20" y="20" width="200" height="140" rx="12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 40 90 Q 70 90 85 50 T 115 130 T 145 70 T 175 90 H 200" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0 300;300 0" dur="3s" repeatCount="indefinite" />
      </path>
      <circle cx="115" cy="130" r="5" fill="currentColor">
        <animate attributeName="r" values="4;8;4" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AgriVisual() {
  return (
    <svg viewBox="0 0 240 180" className="w-full h-full text-brand">
      <circle cx="120" cy="90" r="50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
      <path d="M 120 40 L 120 140 M 70 90 H 170" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="120" cy="90" r="16" fill="currentColor" opacity="0.1" />
      <circle cx="120" cy="90" r="8" fill="currentColor">
        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M 85 65 L 155 115 M 85 115 L 155 65" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

function GovVisual() {
  return (
    <svg viewBox="0 0 240 180" className="w-full h-full text-brand">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${40 + i * 55}, 40)`}>
          <rect width="45" height="100" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="10" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="10" y1="35" x2="35" y2="35" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="10" y1="50" x2="28" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <circle cx="22" cy="75" r="4" fill="currentColor">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

function EnergyVisual() {
  return (
    <svg viewBox="0 0 240 180" className="w-full h-full text-brand">
      <path d="M 40 130 L 80 80 L 120 110 L 160 50 L 200 90" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 40 130 L 80 80 L 120 110 L 160 50 L 200 90 V 150 H 40 Z" fill="currentColor" opacity="0.05" />
      {[
        { cx: 80, cy: 80 },
        { cx: 160, cy: 50 },
        { cx: 200, cy: 90 },
      ].map((pt, i) => (
        <circle key={i} cx={pt.cx} cy={pt.cy} r="5" fill="currentColor">
          <animate attributeName="r" values="4;7;4" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function ThemeVisual({ type }: { type: string }) {
  switch (type) {
    case "healthVisual":
      return <HealthVisual />;
    case "agriVisual":
      return <AgriVisual />;
    case "govVisual":
      return <GovVisual />;
    case "energyVisual":
      return <EnergyVisual />;
    default:
      return <HealthVisual />;
  }
}

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const currentTheme = researchThemes[activeTab];
  const ThemeIcon = currentTheme.icon;

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-36 border-t border-foreground/10 bg-background"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <h2
            className={`text-4xl lg:text-7xl font-display tracking-tight leading-[0.95] mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Thematic Research Areas
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Developing ethical, scalable, and contextually relevant AI solutions to address Ethiopia&apos;s most pressing development challenges across four core domains.
          </p>
        </div>

        {/* Vertical Tabs & Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Vertical Sidebar Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2 sticky top-32">
            {researchThemes.map((theme, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={theme.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex flex-col items-start gap-3 py-6 px-8 rounded-r-3xl transition-all text-left w-full border-l-2 ${
                    isActive
                      ? "border-brand bg-gradient-to-r from-brand/[0.05] to-transparent text-foreground"
                      : "border-transparent bg-transparent hover:bg-foreground/[0.02] text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? "text-brand" : "text-foreground/30"}`}>
                    {theme.number}
                  </span>
                  <span className={`font-display text-2xl lg:text-3xl leading-tight transition-colors ${isActive ? "text-foreground" : ""}`}>
                    {theme.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header / Intro for active tab */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={`header-${currentTheme.id}`}>
              <h3 className="font-display text-4xl lg:text-5xl mb-4 leading-tight">
                {currentTheme.title}
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {currentTheme.subtitle}
              </p>
            </div>

            {/* Sub-Projects Grid */}
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-both" key={`projects-${currentTheme.id}`}>
              <div className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6 border-b border-foreground/10 pb-4">
                Active Projects & Sub-Initiatives
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {currentTheme.projects.map((proj, pIdx) => {
                  const ProjIcon = proj.icon;
                  return (
                    <div
                      key={proj.name}
                      className="group p-6 rounded-3xl border border-foreground/10 bg-background hover:bg-foreground/[0.02] hover:border-brand/50 transition-all duration-300 relative overflow-hidden"
                    >
                      <h4 className="font-display text-lg mb-3 group-hover:text-brand transition-colors leading-tight">
                        {proj.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {proj.description}
                      </p>
                      <span className="inline-flex text-[10px] font-mono px-3 py-1 rounded-full border border-foreground/10 bg-background text-muted-foreground uppercase">
                        {proj.tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
