"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, FileText, Download, ExternalLink, ArrowUpRight, GraduationCap, ChevronDown, ChevronUp, Search, Filter } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  category: "health" | "agriculture" | "governance" | "energy" | "policy";
  domainTag: string;
  abstract: string;
  impactSummary: string;
  doi: string;
  pdfUrl: string;
  codeUrl?: string;
}

const publicationData: Publication[] = [
  {
    id: "pub-1",
    title: "Ethical AI Diagnostics for Early Screening of Non-Communicable Diseases in Low-Resource Clinics",
    authors: "Dr. Bisrat Derebssa, Dr. Fitsum Assamnew, Dr. Menore Tekeba",
    journal: "IEEE Transactions on Biomedical Engineering",
    year: "2026",
    category: "health",
    domainTag: "Health AI",
    abstract: "A lightweight computer vision and signal processing framework designed for edge diagnostic devices in rural Ethiopian healthcare centers. Demonstrates 94.8% sensitivity in early cardiovascular and maternal health triage under severe battery and bandwidth constraints.",
    impactSummary: "Deployed across 15 peripheral health clinics in Oromia, reducing diagnostic turnaround time from 72 hours to under 4 minutes.",
    doi: "10.1109/TBME.2026.3491021",
    pdfUrl: "#",
    codeUrl: "#",
  },
  {
    id: "pub-2",
    title: "UAV Aerial Telemetry & Deep Learning for Early Detection of Wheat Rust Blight in Ethiopia",
    authors: "Dr. Beakal Gizachew, Dr. Libsework Negash, Prof. Alemayehu Lemma",
    journal: "Computers and Electronics in Agriculture, Elsevier",
    year: "2026",
    category: "agriculture",
    domainTag: "Agri-Tech AI",
    abstract: "Proposing a lightweight spatial-convolutional model for low-altitude unmanned aerial vehicles to monitor smallholder wheat fields. Accurately identifies yellow rust spore clusters before visible canopy deterioration occurs.",
    impactSummary: "Enables early targeted fungicide application, protecting high-yield wheat crops across Ethiopian agricultural zones.",
    doi: "10.1016/j.compag.2026.108920",
    pdfUrl: "#",
    codeUrl: "#",
  },
  {
    id: "pub-3",
    title: "Responsible AI & Judicial Case Indexing: Streamlining Court Backlogs in Local Ethiopian Languages",
    authors: "Dr. Henock Mulugeta, Dr. Biniam Tadesse, Lea Mehari",
    journal: "Artificial Intelligence and Law, Springer",
    year: "2026",
    category: "governance",
    domainTag: "Governance & NLP",
    abstract: "A multilingual natural language processing pipeline trained on Amharic, Oromiffa, and Tigrinya legal corpora. Automates judicial case document retrieval and classification while strict human rights and data privacy boundaries are maintained.",
    impactSummary: "Reduces legal document indexing latency by 68%, addressing judicial backlog in Ethiopian regional courts.",
    doi: "10.1007/s10506-026-09412-x",
    pdfUrl: "#",
  },
  {
    id: "pub-4",
    title: "Predictive Energy Demand & Renewable Microgrid Distribution across the Horn of Africa",
    authors: "Dr. Elefelious Getachew, Dr. Dawit Habtu, Dr. Fitsum Assamnew",
    journal: "Applied Energy, Elsevier",
    year: "2025",
    category: "energy",
    domainTag: "Clean Energy AI",
    abstract: "An integrated deep neural network forecasting solar, wind, and hydro energy supply in tandem with peak regional grid demand. Optimizes microgrid energy distribution to off-grid rural communities.",
    impactSummary: "Improved renewable grid balancing efficiency by 27% and minimized diesel backup generator reliance during peak hours.",
    doi: "10.1016/j.apenergy.2025.124501",
    pdfUrl: "#",
    codeUrl: "#",
  },
  {
    id: "pub-5",
    title: "Framework for Responsible AI for Sustainable Development: Aligning National Priorities with UN SDGs",
    authors: "Dr. Fitsum Assamnew, Dr. Henock Mulugeta, Lea Mehari",
    journal: "Nature Machine Intelligence — Policy Review",
    year: "2025",
    category: "policy",
    domainTag: "AI Policy & SDGs",
    abstract: "Synthesizing research methodologies and field deployments from the RESONANCE AI4D Lab at Addis Ababa University to establish evidence-based governance frameworks for artificial intelligence in developing nations.",
    impactSummary: "Served as a foundational policy document for Ethiopia's 10-Year National AI Governance Taskforce.",
    doi: "10.1038/s42256-025-00982-1",
    pdfUrl: "#",
  },
];

export function PublicationsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedPub, setExpandedPub] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredPubs = publicationData.filter((pub) => {
    const matchesCategory = activeCategory === "all" || pub.category === activeCategory;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="developers" ref={sectionRef} className="py-24 lg:py-36 relative border-t border-foreground/10 bg-background overflow-hidden">
      {/* Anchor for both #developers and #publications */}
      <div id="publications" className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">

          <h2 className="text-4xl lg:text-7xl font-display tracking-tight leading-[0.95] mb-8">
            Our Publications
          </h2>
          
          <div className="space-y-4 text-lg lg:text-xl text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground text-xl lg:text-2xl">
              The RESONANCE AI4D Lab is dedicated to advancing knowledge in Responsible AI for sustainable development. Our research findings are regularly published in leading journals and presented at international conferences.
            </p>
            <p className="text-base lg:text-lg">
              Below you will find a selection of our key publications, categorized by thematic area. We aim to make our research accessible and impactful for both academic and practical applications.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 pb-6 border-b border-foreground/10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {[
              { id: "all", label: "All Publications" },
              { id: "health", label: "Health AI" },
              { id: "agriculture", label: "Agri-Tech" },
              { id: "governance", label: "Governance" },
              { id: "energy", label: "Clean Energy" },
              { id: "policy", label: "AI Policy" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-medium text-xs transition-all whitespace-nowrap ${
                  activeCategory === tab.id
                    ? "bg-brand text-white shadow-sm"
                    : "text-foreground/70 hover:text-brand hover:bg-brand/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search title, author, journal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-foreground/15 bg-background text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/60"
            />
          </div>

        </div>

        {/* Featured Publications Grid */}
        <div className="space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Featured Research Papers & Policy Publications ({filteredPubs.length})
          </div>

          {filteredPubs.map((pub, idx) => {
            const isExpanded = expandedPub === pub.id;
            return (
              <div
                key={pub.id}
                className="group p-8 rounded-3xl border border-foreground/15 bg-background hover:border-foreground/35 transition-all duration-300 relative overflow-hidden hover:shadow-lg"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
                  
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-foreground text-background font-bold uppercase tracking-wider">
                      {pub.domainTag}
                    </span>
                    <span className="px-3 py-1 rounded-full border border-foreground/15 bg-foreground/[0.03] text-foreground/80 font-medium">
                      {pub.journal} ({pub.year})
                    </span>
                  </div>

                  <span className="text-xs font-mono text-muted-foreground">
                    DOI: {pub.doi}
                  </span>
                </div>

                {/* Paper Title */}
                <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-3 leading-tight group-hover:translate-x-1 transition-transform">
                  {pub.title}
                </h3>

                {/* Author List */}
                <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
                  <GraduationCap className="w-4 h-4 shrink-0 text-foreground" />
                  <span>By: {pub.authors}</span>
                </div>

                {/* Abstract & Description */}
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {pub.abstract}
                </p>

                {/* Impact Highlight */}
                {pub.impactSummary && (
                  <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/[0.015] text-sm text-foreground/90 font-sans mb-6 flex items-start gap-3">
                    <FileText className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-0.5">
                        Real-World Impact
                      </span>
                      {pub.impactSummary}
                    </div>
                  </div>
                )}

                {/* Action Links */}
                <div className="pt-6 border-t border-foreground/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  <div className="flex items-center gap-4">
                    <a
                      href={pub.pdfUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-foreground text-background font-semibold hover:bg-brand transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                    
                    {pub.codeUrl && (
                      <a
                        href={pub.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-foreground/20 text-foreground font-semibold hover:border-brand hover:text-brand hover:bg-brand/5 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Code & Open Weights</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setExpandedPub(isExpanded ? null : pub.id)}
                    className="inline-flex items-center gap-1.5 text-foreground hover:text-brand hover:underline transition-colors"
                  >
                    <span>{isExpanded ? "Hide Full Abstract" : "View Details & Citation"}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expandable Citation / BibTeX Drawer */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-foreground/10 bg-foreground/[0.02] p-6 rounded-2xl font-mono text-xs space-y-3">
                    <div className="font-bold text-foreground">Suggested BibTeX Citation:</div>
                    <pre className="p-4 rounded-xl bg-background border border-foreground/10 text-muted-foreground overflow-x-auto text-[11px] leading-relaxed">
{`@article{resonance2026_${pub.id.replace('-', '_')},
  title={${pub.title}},
  author={${pub.authors}},
  journal={${pub.journal}},
  year={${pub.year}},
  institution={RESONANCE AI4D Lab, Addis Ababa University},
  doi={${pub.doi}}
}`}
                    </pre>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
