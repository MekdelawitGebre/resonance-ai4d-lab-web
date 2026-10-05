"use client";

import { useEffect, useRef, useState } from "react";
import { 
  GraduationCap, 
  Users, 
  Laptop, 
  UserCheck, 
  Coins, 
  Microscope, 
  BookOpen, 
  Calendar, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Globe2, 
  Building2, 
  FileText, 
  Handshake, 
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const studentBenefits = [
  {
    icon: Laptop,
    title: "Access to Lab Infrastructure",
    description: "High-performance GPU computing resources, software suites, IoT hardware kits, and curated datasets.",
  },
  {
    icon: UserCheck,
    title: "Supervision & Mentorship",
    description: "Personalized guidance from domain experts across health, agriculture, governance, and energy sectors.",
  },
  {
    icon: Coins,
    title: "Monthly Research Stipend",
    description: "Competitive monthly stipend provided to students so they can focus full-time on their research.",
  },
  {
    icon: Microscope,
    title: "Funding for Fieldwork & Data",
    description: "Direct financial support for data collection, rural fieldwork, or prototype manufacturing.",
  },
  {
    icon: BookOpen,
    title: "Publication & Conferences",
    description: "Opportunities to co-author papers in top peer-reviewed journals and present at international conferences.",
  },
  {
    icon: Calendar,
    title: "Priority Access to Events",
    description: "Priority entry to lab-hosted workshops, hackathons, and regional African AI4D exchange programs.",
  },
  {
    icon: Award,
    title: "Official Affiliation Status",
    description: "Official RESONANCE AI4D Lab affiliated researcher status, enhancing academic credentials.",
  },
];

const collaborationAreas = [
  {
    title: "Joint Research Projects",
    description: "Co-creation of ethical, scalable AI solutions targeting Ethiopian and African development needs.",
  },
  {
    title: "Regional Exchange Programs",
    description: "Faculty and student exchanges with partner AI4D labs in Kenya, Tanzania, Rwanda, and Ghana.",
  },
  {
    title: "Resource & Capacity Building",
    description: "Shared computing resources, dataset pooling, and joint technical training bootcamps.",
  },
  {
    title: "AI Policy & Governance Advocacy",
    description: "Co-developing evidence-based policy guidelines for ethical AI integration with government bodies.",
  },
  {
    title: "Commercialization & Incubator",
    description: "Transitioning research prototypes into scalable startups and commercial development tools.",
  },
  {
    title: "Community & Stakeholder Outreach",
    description: "Direct field engagement with smallholder farmers, healthcare workers, and regional communities.",
  },
];

export function GetInvolvedSection() {
  const [activePathway, setActivePathway] = useState<"students" | "partners">("students");
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
    <section id="get-involved" ref={sectionRef} className="py-24 lg:py-36 relative border-t border-foreground/10 bg-background overflow-hidden">
      {/* Anchor mapping for #cta as well */}
      <div id="cta" className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-7xl font-display tracking-tight leading-[0.95] mb-8">
            Get Involved with RESONANCE
          </h2>
          
          <div className="space-y-4 text-lg lg:text-xl text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground text-xl lg:text-2xl">
              The RESONANCE AI4D Lab thrives on collaboration and active participation from students, researchers, industry partners, and community stakeholders. We offer various pathways for you to contribute to our mission of harnessing AI for sustainable and inclusive development in Ethiopia.
            </p>
            <p className="text-base lg:text-lg">
              Whether you are a prospective student, an experienced researcher, or an organization looking to partner, we invite you to explore the opportunities below.
            </p>
          </div>
        </div>

        {/* Pathway Switcher Tabs */}
        <div className="flex items-center gap-4 mb-16 border-b border-foreground/10 pb-6">
          <button
            onClick={() => setActivePathway("students")}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-display text-xl lg:text-2xl transition-all ${
              activePathway === "students"
                ? "bg-brand text-white shadow-lg"
                : "border border-foreground/15 bg-background text-foreground/70 hover:text-foreground"
            }`}
          >
            <GraduationCap className="w-6 h-6" />
            <span>Opportunities for Students</span>
          </button>

          <button
            onClick={() => setActivePathway("partners")}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-display text-xl lg:text-2xl transition-all ${
              activePathway === "partners"
                ? "bg-brand text-white shadow-lg"
                : "border border-foreground/15 bg-background text-foreground/70 hover:text-foreground"
            }`}
          >
            <Globe2 className="w-6 h-6" />
            <span>Collaborate & Partner with Us</span>
          </button>
        </div>

        {/* PATHWAY A: STUDENTS */}
        {activePathway === "students" && (
          <div className="space-y-20 animate-fade-in">
            
            {/* Student Intro & Sub-pathways */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              
              {/* 1. Masters & PhD Positions */}
              <div className="lg:col-span-6 p-8 lg:p-12 rounded-3xl border border-foreground/15 bg-foreground/[0.015] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1 rounded-full bg-brand text-white text-xs font-mono font-bold uppercase">
                      New Positions
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">ADDIS ABABA UNIVERSITY</span>
                  </div>

                  <h3 className="font-display text-3xl mb-4">
                    Masters & PhD Research Positions
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-8">
                    Join our fully funded research cohorts. We are building a robust and inclusive AI talent pipeline for Ethiopia.
                  </p>

                  <div className="space-y-4 font-sans text-sm mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-1" />
                      <div>
                        <strong className="text-foreground">Academic Qualification:</strong> MSc or equivalent degree in a relevant field (minimum CGPA applies).
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-1" />
                      <div>
                        <strong className="text-foreground">Technical Prerequisites:</strong> Proficiency in programming, machine learning, statistics, or domain expertise.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-1" />
                      <div>
                        <strong className="text-foreground">Application Requirements:</strong> Motivation Letter, Recommendation Letters, optional Written Assessment, Interview.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-foreground/15 bg-background text-xs text-foreground/90 font-mono">
                      <strong>Inclusion Priority:</strong> Strong encouragement for women and candidates from underrepresented communities.
                    </div>
                  </div>
                </div>

                <a href="#news" className="inline-flex items-center justify-between w-full p-4 rounded-xl border border-foreground/20 bg-background hover:bg-brand hover:text-white transition-colors text-xs font-mono font-semibold">
                  <span>Check News & Events for Application Deadlines</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* 2. Currently Enrolled AAU Student Alignment */}
              <div className="lg:col-span-6 p-8 lg:p-12 rounded-3xl border border-foreground/15 bg-background flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1 rounded-full border border-foreground/20 bg-foreground/5 text-xs font-mono font-semibold uppercase">
                      Current AAU Students
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">RESEARCH ALIGNMENT</span>
                  </div>

                  <h3 className="font-display text-3xl mb-4">
                    Research Participation for Enrolled Students
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-8">
                    Currently enrolled Masters and PhD students at Addis Ababa University can align their ongoing thesis with our lab&apos;s thematic areas.
                  </p>

                  <div className="space-y-4 font-sans text-sm mb-8">
                    <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/[0.02] space-y-1">
                      <div className="font-bold text-foreground font-mono text-xs">MASTERS ELIGIBILITY</div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Current AAU Masters student who has successfully completed their first year of study and is in good academic standing.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/[0.02] space-y-1">
                      <div className="font-bold text-foreground font-mono text-xs">PHD ELIGIBILITY</div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Current AAU PhD student who completed 1st year OR incoming PhD student who has taken and passed the Graduate Admission Test (GAT).
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-1" />
                      <div>
                        <strong className="text-foreground">Application Package:</strong> 2-page concept note, letter of endorsement from supervisor, 1-page motivation statement.
                      </div>
                    </div>
                  </div>
                </div>

                <a href="#about" className="inline-flex items-center justify-between w-full p-4 rounded-xl border border-foreground/20 bg-foreground/[0.03] hover:bg-brand hover:text-white transition-colors text-xs font-mono font-semibold">
                  <span>Submit Research Concept Note</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Benefits of Participation Grid */}
            <div>
              <div className="mb-12">
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-3">
                  Student Support Package
                </span>
                <h3 className="font-display text-3xl lg:text-5xl">Benefits of Participation</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studentBenefits.map((b) => {
                  const BIcon = b.icon;
                  return (
                    <div
                      key={b.title}
                      className="group p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.01] hover:border-brand-border transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-foreground/10 text-foreground flex items-center justify-center mb-6 group-hover:bg-brand-muted group-hover:text-brand transition-colors">
                          <BIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-display text-2xl mb-2">{b.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {b.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* PATHWAY B: COLLABORATE & PARTNER */}
        {activePathway === "partners" && (
          <div className="space-y-16 animate-fade-in">
            
            <div className="p-8 lg:p-12 rounded-3xl border border-foreground/15 bg-foreground/[0.015]">
              <h3 className="font-display text-3xl lg:text-4xl mb-4">
                Strategic Partnerships & Institutional Synergies
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
                We actively seek strategic collaborations with academic institutions, government entities, industry partners, and community organizations to enhance our impact and ensure the relevance, scalability, and sustainability of our initiatives.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {collaborationAreas.map((area, idx) => (
                  <div key={area.title} className="p-6 rounded-2xl border border-foreground/10 bg-background">
                    <span className="font-mono text-xs text-muted-foreground block mb-2">0{idx + 1}</span>
                    <h4 className="font-display text-xl mb-2">{area.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-2xl border border-foreground/20 bg-background flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-display text-2xl mb-1">Partner with RESONANCE AI4D Lab</h4>
                  <p className="text-sm text-muted-foreground">
                    If your organization is interested in partnering, please reach out to discuss potential synergies.
                  </p>
                </div>

                <a href="mailto:partner@resonance-lab.org">
                  <Button size="lg" className="bg-brand hover:bg-brand-light text-white px-8 h-14 rounded-full font-mono text-sm transition-colors">
                    Contact Partnership Office
                  </Button>
                </a>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
