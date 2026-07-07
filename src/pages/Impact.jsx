import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import AnimatedCounter from '../components/AnimatedCounter';
import GlassCard from '../components/GlassCard';

const Impact = () => {
  useEffect(() => {
    document.title = "Reach & Achievements Impact | Mr. Chirag Rana";
  }, []);

  const stats = [
    { target: '3,000+', label: 'Youth Educated', desc: 'Actively trained in primary legal concepts and BNS regulations.' },
    { target: '900+', label: 'Audiobooks for Blind', desc: 'Recorded academic materials under Project Dhvani for association libraries.' },
    { target: '10,000+', label: 'Inmates Mentored', desc: 'Assisted fellow prisoners in completing secondary and undergraduate degrees.' },
    { target: '40+', label: 'Certificates of Honor', desc: 'Awarded by State Governors, DGP offices, and ministry convocation panels.' }
  ];

  const awards = [
    {
      id: 1,
      tag: "🎖️ GOVERNOR'S HONOR",
      title: "40+ Certificates from 20th Governor",
      desc: "Awarded by Shri Acharya Devvrat (Governor of Gujarat) alongside DGP Dr. KLN Rao IPS for academic excellence and inmate rehabilitation efforts.",
      type: "gold"
    },
    {
      id: 2,
      tag: "🎓 NITIN GADKARI PRESENTS",
      title: "M.Sc. Degree from Union Minister",
      desc: "Received M.Sc. (Value Education & Spirituality) degree certificate from Union Minister Nitin Gadkari and Vice Chancellor of Annamalai University.",
      type: "red"
    },
    {
      id: 3,
      tag: "🏆 NATIONAL AWARD",
      title: "Tinka Tinka Award 2022",
      desc: "Acquired prestigious Tinka Tinka Award from Delhi NGO for revolutionary welfare setups inside Ahmedabad Central Prison.",
      type: "border-gold"
    },
    {
      id: 4,
      tag: "🎙️ PROJECT DHVANI",
      title: "900+ Audiobooks for Blind Pupils",
      desc: "Pioneered voice recordings in Gujarati, Hindi, and English for Ahmedabad Blind People's Association, spanning 9 years of contributions.",
      type: "standard"
    },
    {
      id: 5,
      tag: "🧠 SAMARTH REHABILITATION",
      title: "7-Year Mentorship Program",
      desc: "Lead mentorship for Dr. Reena Sharma's 'The Mind Practice' program, counselling hundreds of inmates facing psychological struggles.",
      type: "standard"
    },
    {
      id: 6,
      tag: "📺 TELEVISION FEATURES",
      title: "Featured on Navajivan & ETV",
      desc: "Chirag's story and scholastic achievements featured on regional television programs under 'Jelamaa Rahine Pan Kamal Karata Kaidi'.",
      type: "standard"
    },
    {
      id: 7,
      tag: "📜 GANDHIVICHAR RANK",
      title: "3rd Rank in Speech Competition",
      desc: "Won 3rd rank among dozens of contestants in the Gandhivichar Vaktrutva Spardha, organized by Navajivan Trust in jail.",
      type: "standard"
    },
    {
      id: 8,
      tag: "📚 SCHOLASTIC HIGHLIGHT",
      title: "5 Postgraduate Degrees from Cells",
      desc: "Among very few inmates in India to acquire 5 separate Master degrees (MBA, M.A. Gujarati, M.A. Pol Science, M.Com, M.Sc.) during custody.",
      type: "standard"
    }
  ];

  return (
    <PageTransition>
      <div className="py-32 bg-bg-base w-full min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Official Impact" title="The Reach & Results So Far" />

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 mt-12">
            {stats.map((stat, i) => (
              <GlassCard key={i} className="p-6 text-left hover:border-accent-red" tilt={true}>
                <span className="font-display text-5xl text-accent-red leading-none mb-2 block">
                  <AnimatedCounter target={stat.target} />
                </span>
                <h4 className="font-ui text-sm font-bold text-text-head mb-1 uppercase tracking-wide">{stat.label}</h4>
                <p className="font-body text-xs text-text-body leading-relaxed">{stat.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mb-16">
            <p className="font-display text-3xl md:text-5xl text-accent-gold uppercase tracking-wider">
              "Before Crime Becomes Your Story"
            </p>
          </div>

          {/* Staggered Grid of 8 Awards */}
          <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider mb-6 text-left border-l-2 border-accent-gold pl-3">Official Awards & Honors</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {awards.map((award) => {
              let cardClasses = "";
              if (award.type === 'gold') {
                cardClasses = "bg-gradient-to-tr from-accent-gold/20 to-bg-card border-2 border-accent-gold ";
              } else if (award.type === 'red') {
                cardClasses = "bg-gradient-to-tr from-accent-red/20 to-bg-card border border-accent-red ";
              } else if (award.type === 'border-gold') {
                cardClasses = "border-2 border-accent-gold/40 ";
              }

              return (
                <GlassCard
                  key={award.id}
                  className={`p-6 text-left ${cardClasses}`}
                  tilt={true}
                >
                  <span className={`text-[9px] font-ui font-extrabold tracking-widest uppercase px-2 py-0.5 rounded-full w-fit block mb-4 ${
                    award.type === 'gold' ? 'bg-accent-gold/20 text-accent-gold' : 
                    award.type === 'red' ? 'bg-accent-red/20 text-accent-red' : 'bg-bg-surface text-text-muted border border-border-custom'
                  }`}>
                    {award.tag}
                  </span>
                  <h3 className="font-ui text-base font-bold text-text-head mb-2 leading-snug group-hover:text-accent-red-light transition-colors">{award.title}</h3>
                  <p className="font-body text-xs text-text-body leading-relaxed">{award.desc}</p>
                </GlassCard>
              );
            })}
          </div>

          {/* Bottom Statement Banner */}
          <div className="mt-16 bg-accent-red rounded-2xl p-8 text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none text-[8vw] font-display text-white/5 uppercase tracking-widest leading-none z-0">
              ACCOLADES
            </div>
            <p className="font-body text-base md:text-xl font-medium max-w-3xl mx-auto leading-relaxed relative z-10 italic">
              "I am among the very few inmates in India to have achieved this level of academic accomplishment while incarcerated."
            </p>
            <p className="font-ui text-xs font-bold uppercase tracking-wider mt-4 relative z-10">
              — Chirag Rana, in his letter to NGOs & organizations (2025)
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Impact;
