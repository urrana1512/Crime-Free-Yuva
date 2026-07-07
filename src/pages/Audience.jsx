import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';

const Audience = () => {
  useEffect(() => {
    document.title = "Who We Serve | Crime Free Yuva";
  }, []);

  const audiences = [
    {
      icon: "🏫",
      title: "Schools (Class 6–12)",
      text: "Age-specific, interactive focus on digital harassment, online fraud, peer bullying, and establishing fundamental moral boundaries.",
      benefits: [
        "Proactive cybercrime awareness",
        "Understanding legal definitions of consent and harassment",
        "Tools to counter digital addiction and cyberbullying"
      ]
    },
    {
      icon: "🎓",
      title: "Colleges & Universities",
      text: "Immersive deep-dive seminars covering cybercrimes, drug laws (NDPS), student rights, and the psychological traps of peer pressure.",
      benefits: [
        "Clarity on strict non-bailable acts (NDPS, Cyber IPC)",
        "Understanding collateral damage on job careers",
        "Peer-group pressure mitigation strategies"
      ]
    },
    {
      icon: "🏢",
      title: "Corporates & Workplaces",
      text: "Seminars on white-collar financial crimes, cybersecurity protocols, POSH compliance, and building high-trust corporate security cultures.",
      benefits: [
        "Mitigation of insider embezzlement/scams",
        "POSH and cyber security training for employee safety",
        "Developing strong compliance codes and ethics"
      ]
    },
    {
      icon: "🏘️",
      title: "Communities & RWAs",
      text: "Local neighborhood safety practices, senior citizen fraud protection checks, community anti-drug drives, and family counseling templates.",
      benefits: [
        "Protecting seniors against cyber bank thefts",
        "Anti-drug communication kits for parents",
        "Creating collaborative neighborhood support networks"
      ]
    },
    {
      icon: "👩",
      title: "Women's Organizations",
      text: "Focused safety audits, cyber-harassment legal protections, constitutional rights guidelines, and accessing immediate legal aid channels.",
      benefits: [
        "Familiarity with tracking tools against digital stalking",
        "Knowledge of fast-response legal aid portals",
        "Assertive physical and digital boundary guidelines"
      ]
    },
    {
      icon: "🌱",
      title: "NGOs & Correction Homes",
      text: "At-risk youth interventions, rehabilitation initiatives, reform motivations, and support channels to direct delinquents towards academic study.",
      benefits: [
        "Motivating inmates using Chirag's 5 Master degrees story",
        "Setting up educational programs in juvenile units",
        "Rehabilitation pathways away from recidivism loops"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="py-32 bg-bg-base w-full min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Who We Serve" title="Empowering Diverse Sectors" />

          {/* Grid of cohorts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {audiences.map((aud, i) => (
              <GlassCard key={i} className="p-8 text-left hover:bg-bg-card-h/40 transition-all flex flex-col justify-between" tilt={true}>
                <div>
                  <span className="text-3xl bg-bg-surface w-12 h-12 rounded-xl flex items-center justify-center mb-6">{aud.icon}</span>
                  <h3 className="font-ui text-lg font-bold text-text-head mb-3 uppercase tracking-wide">{aud.title}</h3>
                  <p className="font-body text-xs text-text-body leading-relaxed mb-6">{aud.text}</p>
                </div>
                
                {/* Benefits sublist */}
                <div className="border-t border-border-custom pt-4">
                  <h4 className="font-ui text-[10px] font-bold text-accent-gold uppercase tracking-wider mb-2">Key Outcomes:</h4>
                  <ul className="space-y-1.5">
                    {aud.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-[11px] font-body text-text-muted">
                        <span className="text-accent-red">▪</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Audience;
