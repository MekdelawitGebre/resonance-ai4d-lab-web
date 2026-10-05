"use client";

import { useEffect, useRef, useState } from "react";
import { 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  GraduationCap, 
  BookOpenCheck, 
  Users, 
  Cpu, 
  Activity, 
  Tag, 
  Megaphone, 
  Radio
} from "lucide-react";

interface NewsItem {
  id: string;
  category: "workshops" | "deadlines" | "research" | "community";
  tag: string;
  date: string;
  location?: string;
  title: string;
  description: string;
  link: string;
  icon: any;
  featured?: boolean;
}

const newsData: NewsItem[] = [
  {
    id: "1",
    category: "workshops",
    tag: "WORKSHOP & SYMPOSIUM",
    date: "NOVEMBER 14–16, 2026",
    location: "Addis Ababa University Campus",
    title: "Ethiopian Responsible AI Policy & Governance Workshop",
    description: "Bringing together regional policymakers, AI researchers, and legal scholars to shape evidence-based governance guidelines aligned with Ethiopia's 10-Year Development Plan.",
    link: "/news/workshop-2026",
    icon: Users,
    featured: true,
  },
  {
    id: "2",
    category: "deadlines",
    tag: "APPLICATION DEADLINE",
    date: "DEADLINE: NOV 30, 2026",
    location: "Online Submission Portal",
    title: "Call for Applications: 2026–2027 AI4D Graduate Research Grants",
    description: "Full financial stipends, high-performance GPU cluster compute access, and senior mentorship for Ethiopian MSc and PhD candidates in Health, Agriculture, Governance & Energy AI.",
    link: "/news/grant-applications-2026",
    icon: GraduationCap,
    featured: true,
  },
  {
    id: "3",
    category: "research",
    tag: "RESEARCH BREAKTHROUGH",
    date: "OCTOBER 28, 2026",
    location: "Open Access Release",
    title: "UAV-Based Early Detection Model for Wheat Rust Released",
    description: "Deployed lightweight deep neural models on aerial drone telemetry, achieving 96.2% early detection accuracy across Ethiopian smallholder wheat farming zones.",
    link: "/news/uav-detection-model",
    icon: Cpu,
  },
  {
    id: "4",
    category: "community",
    tag: "COMMUNITY INITIATIVE",
    date: "OCTOBER 12, 2026",
    location: "Oromia Regional Health Centers",
    title: "Rural Telemedicine AI Pilot Expands to 15 Peripheral Clinics",
    description: "Bridging healthcare access through AI-assisted diagnostic screening and remote triage for maternal health and non-communicable diseases in rural centers.",
    link: "/news/telemedicine-pilot",
    icon: Activity,
  },
  {
    id: "5",
    category: "workshops",
    tag: "CAPACITY BUILDING",
    date: "DECEMBER 05, 2026",
    location: "RESONANCE Hardware Lab",
    title: "Hands-on Student Bootcamp: IoT Sensors & Edge ML",
    description: "Practical engineering workshop for university students on assembling solar micro-compute pods and training low-power TinyML models.",
    link: "/news/iot-bootcamp",
    icon: Radio,
  },
];

export function NewsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
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

  const filteredItems = activeTab === "all"
    ? newsData
    : newsData.filter(item => item.category === activeTab);

  return (
    <section id="news" ref={sectionRef} className="py-24 lg:py-36 relative border-t border-foreground/10 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">


          <h2 className="text-4xl lg:text-7xl font-display tracking-tight leading-[0.95] mb-8">
            News & Events
          </h2>
          
          <div className="space-y-4 text-lg lg:text-xl text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground text-xl lg:text-2xl">
              Stay up-to-date with the latest happenings at the RESONANCE AI4D Lab. Here you&apos;ll find information on our upcoming workshops, application deadlines, recent research breakthroughs, and community engagement initiatives.
            </p>
            <p className="text-base lg:text-lg">
              We regularly update this section with important announcements and highlights of our work in harnessing AI for sustainable development in Ethiopia.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-8 overflow-x-auto mb-12 border-b border-foreground/10 no-scrollbar">
          {[
            { id: "all", label: "All Updates", count: newsData.length },
            { id: "workshops", label: "Workshops & Events", count: newsData.filter(i => i.category === "workshops").length },
            { id: "deadlines", label: "Application Deadlines", count: newsData.filter(i => i.category === "deadlines").length },
            { id: "research", label: "Research Breakthroughs", count: newsData.filter(i => i.category === "research").length },
            { id: "community", label: "Community Initiatives", count: newsData.filter(i => i.category === "community").length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 mb-[-1px] font-medium text-sm transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${
                activeTab === tab.id
                  ? "border-brand text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-xs font-mono ${
                activeTab === tab.id ? "text-brand" : "text-muted-foreground/60"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Unified Grid Layout without Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const ItemIcon = item.icon;
            return (
              <a
                key={item.id}
                href={item.link}
                className="group p-8 rounded-2xl border border-foreground/10 bg-background hover:border-foreground/30 transition-all duration-300 flex flex-col justify-between hover:shadow-md block"
              >
                <div>
                  <div className="flex items-center gap-3 text-muted-foreground font-mono text-xs mb-6">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 text-foreground flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground group-hover:translate-x-1 transition-transform leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed pl-14">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-foreground/10 flex items-center justify-between text-xs font-mono text-muted-foreground group-hover:text-foreground">
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
