"use client";

import { Linkedin, Twitter, Scale, Network } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  qualification: string;
  bio: string;
  initials: string;
}

const leadership = {
  name: "Dr. Fitsum Assamnew",
  role: "Lab Director / Principal Investigator",
  qualification: "PhD in Computer Engineering",
  bio: "Extensive experience in AI applications in health, agriculture, cybersecurity, and computer architecture research.",
  initials: "FA",
};

const erb = {
  name: "Ethical Review Board (ERB)",
  role: "Internal oversight for ethical AI principles",
  bio: "Ensures the highest ethical standards, transparency, and accountability in all lab activities.",
};

const thematicLeads: TeamMember[] = [
  {
    name: "Dr. Bisrat Derebssa",
    role: "Innovative Health Solutions Lead",
    qualification: "PhD in Computer Engineering",
    bio: "Expertise in ML-based health solutions and signal processing.",
    initials: "BD",
  },
  {
    name: "Dr. Beakal Gizachew",
    role: "Resilient Agriculture Lead",
    qualification: "PhD in Computer Science",
    bio: "Extensive experience in AI for agriculture and geospatial analytics.",
    initials: "BG",
  },
  {
    name: "Dr. Henock Mulugeta",
    role: "Inclusive Governance Lead",
    qualification: "PhD in Computer Engineering",
    bio: "Expertise in cybersecurity and AI governance.",
    initials: "HM",
  },
  {
    name: "Dr. Elefelious Getachew",
    role: "Sustainable Energy & Climate Resilience Lead",
    qualification: "PhD in Computer Science",
    bio: "Expertise in climate resilience and AI integration.",
    initials: "EG",
  },
];

const coreResearchers: TeamMember[] = [
  {
    name: "Dr. Menore Tekeba",
    role: "Innovative Health Solutions",
    qualification: "PhD in Computer Science",
    bio: "Expertise in reinforcement learning and computer vision for health applications.",
    initials: "MT",
  },
  {
    name: "Dr. Libsework Negash",
    role: "Resilient Agriculture",
    qualification: "PhD in Cyber-Physical Systems",
    bio: "Precision agriculture expert with IoT-enabled farming experience.",
    initials: "LN",
  },
  {
    name: "Prof. Alemayehu Lemma",
    role: "Resilient Agriculture",
    qualification: "Professor of Veterinary Obstetric",
    bio: "Expertise in dairy management and livestock health.",
    initials: "AL",
  },
  {
    name: "Dr. Biniam Tadesse",
    role: "Inclusive Governance",
    qualification: "PhD in Computer Engineering",
    bio: "Expertise in ethical AI and governance frameworks.",
    initials: "BT",
  },
  {
    name: "Lea Mehari",
    role: "Inclusive Governance",
    qualification: "LLM in Int. Humanitarian Law",
    bio: "Expertise in Humanitarian Law and Business Law.",
    initials: "LM",
  },
  {
    name: "Dr. Dawit Habtu",
    role: "Sustainable Energy",
    qualification: "PhD in Power Engineering",
    bio: "Expertise in energy systems and forecasting.",
    initials: "DH",
  },
];

function MemberCard({ member, large = false }: { member: TeamMember, large?: boolean }) {
  return (
    <div className="flex flex-col group h-full text-center items-center">
      <div className={`w-full max-w-[200px] aspect-square rounded-full bg-foreground/[0.03] flex items-center justify-center mb-6 overflow-hidden relative border border-foreground/5 group-hover:border-brand/30 transition-colors duration-500`}>
        <div className="w-full h-full absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className={`font-display text-foreground/20 group-hover:text-brand transition-colors duration-500 ${large ? "text-8xl" : "text-5xl"}`}>
          {member.initials}
        </span>
      </div>
      
      <h3 className={`font-display text-brand mb-1 ${large ? "text-3xl" : "text-xl"}`}>
        {member.name}
      </h3>
      <p className="text-sm font-semibold text-brand/70 mb-1">
        {member.role}
      </p>
      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
        {member.qualification}
      </p>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
        {member.bio}
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <a href="#" className="text-brand/40 hover:text-brand transition-colors">
          <Linkedin className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="#" className="text-brand/40 hover:text-brand transition-colors">
          <Twitter className="w-5 h-5" />
          <span className="sr-only">X (Twitter)</span>
        </a>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 relative border-t border-foreground/10 bg-background overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-40 -left-40 w-[600px] h-[600px] bg-brand-muted/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-7xl font-display tracking-tight leading-[0.95] mb-8">
            Our Team
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              The RESONANCE AI4D Lab is powered by a dedicated and diverse team of researchers, academics, and professionals committed to leveraging AI for sustainable development in Ethiopia. Our team comprises experts from various disciplines, fostering an interdisciplinary environment crucial for innovative solutions.
            </p>
            <p className="pl-6 border-l-2 border-brand/30 italic">
              We are committed to promoting gender parity and actively recruiting persons with disabilities and underrepresented groups, ensuring our team reflects the diversity of Ethiopian society.
            </p>
          </div>
        </div>

        {/* Leadership & ERB Row */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 mb-24">
          
          <div className="lg:col-span-1">
            <div className="flex justify-center mb-8 pb-4 border-b border-foreground/10">
              <h3 className="font-mono text-sm tracking-widest text-brand uppercase">Lab Leadership</h3>
            </div>
            <MemberCard member={leadership} large />
          </div>

          <div className="lg:col-span-2 flex flex-col justify-end">
            <div className="p-8 lg:p-12 rounded-3xl bg-brand-muted/20 border border-brand/10 h-full flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-8">
                <Scale className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-display text-3xl lg:text-5xl text-brand mb-4">
                {erb.name}
              </h3>
              <p className="text-lg font-semibold text-brand/70 mb-6">
                {erb.role}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {erb.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Thematic Leads */}
        <div className="mb-24">
          <div className="flex justify-center mb-12 pb-4 border-b border-foreground/10">
            <h3 className="font-mono text-sm tracking-widest text-brand uppercase">Thematic Leads</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {thematicLeads.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Core Researchers */}
        <div>
          <div className="flex justify-center mb-12 pb-4 border-b border-foreground/10">
            <h3 className="font-mono text-sm tracking-widest text-brand uppercase">Core Researchers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreResearchers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
