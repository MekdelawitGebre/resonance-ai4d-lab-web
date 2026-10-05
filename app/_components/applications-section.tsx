import { ArrowRight, Calendar, CheckCircle2, ChevronRight, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

const timelineEvents = [
  {
    date: "July 28, 2025",
    title: "MSc Deadline",
    description: "Application Deadline for Masters Applicants",
  },
  {
    date: "August 11, 2025",
    title: "PhD Deadline",
    description: "Application Deadline for PhD Applicants",
  },
  {
    date: "August 12-18, 2025",
    title: "Shortlisting",
    description: "Shortlisting & Assessment of Candidates",
  },
  {
    date: "August 20-25, 2025",
    title: "Interviews",
    description: "Panel Interviews with Shortlisted Applicants",
  },
  {
    date: "August 29, 2025",
    title: "Offers Made",
    description: "Final Selection & Official Offers",
  },
  {
    date: "September 12, 2025",
    title: "Commencement",
    description: "Program Commencement & Onboarding",
    highlight: true,
  },
];

export function ApplicationsSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-foreground/10 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-muted/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: CTA & Context */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand bg-brand-muted text-brand text-xs font-mono font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Now Open
            </div>
            
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-6 text-foreground">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Applications for our MSc and PhD research positions are now open. Submit your application and required documents to join a pioneering initiative using AI for sustainable development in Ethiopia.
            </p>

            <div className="p-8 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-brand-border transition-colors duration-300">
              <h3 className="font-display text-2xl mb-3">Ready to Make a Difference?</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Choose adventure, and join the Resonance AI4D Lab to build ethical, scalable AI solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="https://forms.gle/aaA23pZLkq8SzsnU7" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-brand hover:bg-brand-light text-white rounded-full px-8">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 hover:bg-brand-muted hover:text-brand hover:border-brand transition-colors">
                      View Full Call Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-display text-2xl text-brand">Application Details 2025/26</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 mt-4 text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Overview</h4>
                        <p className="leading-relaxed">
                          The Resonance AI4D Lab at Addis Ababa University is actively recruiting talented and driven scholars for our upcoming MSc and PhD cohorts. We are looking for individuals who are passionate about leveraging Artificial Intelligence to solve critical challenges in Health, Agriculture, Governance, and Energy across Ethiopia.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>A relevant Bachelor&apos;s or Master&apos;s degree in Computer Science, Engineering, Data Science, or related fields.</li>
                          <li>Strong foundational knowledge in programming (Python, C++) and Machine Learning.</li>
                          <li>A compelling research proposal aligned with one of our four core thematic areas.</li>
                          <li>Commitment to ethical AI development and sustainable impact.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Benefits</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Full tuition coverage and a monthly research stipend.</li>
                          <li>Access to state-of-the-art computational resources and lab facilities.</li>
                          <li>Mentorship from leading national and international AI researchers.</li>
                          <li>Opportunities for international conference travel and publications.</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-brand-muted/20 border border-brand/20 rounded-xl mt-6">
                        <p className="text-sm font-medium text-foreground mb-3">Ready to apply?</p>
                        <Link href="https://forms.gle/aaA23pZLkq8SzsnU7" target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-brand hover:bg-brand-light text-white">
                            Proceed to Application Form
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="pt-6 border-t border-foreground/10 flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>For inquiries, please email:</span>
                <a href="mailto:resonance@aau.edu.et" className="font-medium text-foreground hover:text-brand transition-colors">
                  resonance@aau.edu.et
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative">
            <h3 className="font-mono text-sm tracking-widest text-muted-foreground uppercase mb-10 pl-6 border-l-2 border-brand">
              Application Timeline
            </h3>
            
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`relative pl-8 pb-2 border-l-2 ${
                    index === timelineEvents.length - 1 ? "border-transparent" : "border-foreground/10"
                  } group`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-[-9px] top-1 w-4 h-4 rounded-full border-4 border-background transition-colors ${
                    event.highlight ? "bg-brand scale-110" : "bg-foreground/20 group-hover:bg-brand"
                  }`} />
                  
                  <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                    event.highlight 
                      ? "bg-brand text-white border-brand shadow-lg" 
                      : "bg-background border-foreground/10 hover:border-foreground/30 hover:shadow-sm"
                  }`}>
                    <div className={`font-mono text-xs mb-2 flex items-center gap-2 ${
                      event.highlight ? "text-white/80" : "text-brand font-semibold"
                    }`}>
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </div>
                    <h4 className="font-display text-xl mb-1">{event.title}</h4>
                    <p className={`text-sm ${event.highlight ? "text-white/90" : "text-muted-foreground"}`}>
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
