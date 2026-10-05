"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "@/components/animations/animated-wave";

interface FooterLinkItem {
  name: string;
  href: string;
  badge?: string;
}

const footerLinks: Record<string, FooterLinkItem[]> = {
  Research: [
    { name: "Health Solutions", href: "/research" },
    { name: "Resilient Agriculture", href: "/research" },
    { name: "Inclusive Governance", href: "/research" },
    { name: "Energy & Climate", href: "/research" },
  ],
  Publications: [
    { name: "Featured Papers", href: "/publications" },
    { name: "Policy Frameworks", href: "/publications" },
    { name: "GitHub Repositories", href: "https://github.com/resonance-ai4d" },
    { name: "AAU Official Site", href: "https://sites.google.com/aait.edu.et/resonance-lab/home" },
  ],
  Lab: [
    { name: "About RESONANCE", href: "/about" },
    { name: "Lab Leadership & ERB", href: "/team" },
    { name: "News & Announcements", href: "/news" },
    { name: "Get Involved", href: "/get-involved" },
  ],
  Opportunities: [
    { name: "Masters & PhD Positions", href: "/get-involved" },
    { name: "AAU Student Alignment", href: "/get-involved" },
    { name: "Partner & Collaborate", href: "/get-involved" },
    { name: "Contact Partnership Office", href: "mailto:partner@resonance-lab.org" },
  ],
};

const socialLinks = [
  { name: "AAU Lab Portal", href: "https://sites.google.com/aait.edu.et/resonance-lab/home" },
  { name: "GitHub", href: "https://github.com/resonance-ai4d" },
  { name: "News & Events", href: "/news" },
];

export function FooterSection() {
  return (
    <footer className="relative bg-brand/[0.02] border-t border-brand/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">RESONANCE</span>
                <span className="text-xs bg-brand text-white font-mono px-1.5 py-0.5 rounded font-bold">AI4D LAB</span>
              </Link>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs text-sm">
                Responsible AI Solutions and Networks for Sustainable Development at Addis Ababa University. Harnessing AI for sustainable and inclusive development in Ethiopia.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand hover:underline transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-brand hover:underline transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-brand/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © 2026 RESONANCE AI4D Lab. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-6 text-sm font-medium text-muted-foreground">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:underline transition-colors">X (Twitter)</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:underline transition-colors">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:underline transition-colors">GitHub</a>
            </div>

            <span className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted-foreground border-l border-foreground/10 pl-6">
              <span className="w-2 h-2 rounded-full bg-brand" />
              Addis Ababa University
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
