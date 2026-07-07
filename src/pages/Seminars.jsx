import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const Seminars = () => {
  useEffect(() => {
    document.title = "Crime & Prison Seminars | Crime Free Yuva";
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      id: 0,
      icon: "🔍",
      title: "What Is Crime?",
      sub: "Legal vs Moral boundaries",
      desc: "Where does a mistake end and a crime begin? We demystify the basic structure of Bharatiya Nyaya Sanhita (BNS) and help students understand the exact line that, once crossed, carries irrevocable legal consequences.",
      points: [
        "Difference between standard mistakes and crimes",
        "Understanding legal boundaries vs moral codes",
        "Common cyber offenses involving minor actions"
      ]
    },
    {
      id: 1,
      icon: "👤",
      title: "Who Is A Criminal?",
      sub: "The Psychology of offending",
      desc: "Anyone can commit a crime in a moment of anger, greed, or peer pressure. We dissect the warning behaviors, the progression of bad habits, and reveal how standard citizens end up with permanent criminal records.",
      points: [
        "The trigger points of young minds",
        "Peer pressure and group conformity traps",
        "Understanding impulsivity as a legal hazard"
      ]
    },
    {
      id: 2,
      icon: "🚔",
      title: "Role of Police & Lawyer",
      sub: "Demystifying enforcement structures",
      desc: "What actually happens when law enforcement steps in? Learn how police procedures operate, when warrants are needed, standard rights of citizens under detention, and how legal defense counsel works in real life.",
      points: [
        "Interactions with police officers",
        "Rights during arrests and questioning",
        "The timeline of police custody and bail"
      ]
    },
    {
      id: 3,
      icon: "⚖️",
      title: "How Court & Law Works?",
      sub: "Flowchart from FIR to Verdict",
      desc: "A complete walkthrough of the judicial timeline. From the initial filing of an FIR, arrest procedures, charge sheets, bail arguments, examinations of witnesses, final arguments, to the ultimate verdict.",
      points: [
        "Step-by-step case flowchart",
        "Understanding trials, evidence, and cross-examination",
        "Why court cases drag on for years in India"
      ]
    },
    {
      id: 4,
      icon: "🔒",
      title: "Life In Prison",
      sub: "Reality check behind iron bars",
      desc: "No glorification. No Bollywood dramas. Just the raw reality of jail life. We detail the cell conditions, food, scheduling, loss of absolute freedom, and the psychological impact of confinement.",
      points: [
        "Ahmedabad Central Prison case studies",
        "Daily cell schedules, roll calls, and restrictions",
        "The permanent stain of criminal records on careers"
      ]
    },
    {
      id: 5,
      icon: "🧠",
      title: "Psychology & Habits",
      sub: "Breaking the gateway loops",
      desc: "Analyzing the psychological triggers like social media validation, gaming addictions, substance use, and digital bullying that frequently act as gateway behaviors leading to serious crimes.",
      points: [
        "Identifying early toxic habits",
        "Soporous triggers in digital media consumption",
        "Anger management and self-awareness tactics"
      ]
    },
    {
      id: 6,
      icon: "👨‍👩‍👧",
      title: "How Families Are Affected",
      sub: "The collateral social damages",
      desc: "When an individual gets arrested, the entire family suffers. We analyze the severe financial strain of legal battles, the heavy social isolation, and the deep emotional traumas parents experience.",
      points: [
        "The economic cost of hiring defense lawyers",
        "Social stigma, isolation, and relocation issues",
        "The mental trauma of parents and siblings"
      ]
    },
    {
      id: 7,
      icon: "❓",
      title: "Curiosity Q&A",
      sub: "No judgment, absolute truth",
      desc: "An open, transparent session where youth can ask their most curious questions about prison rules, criminal laws, police procedures, and Chirag's lived experiences inside Ahmedabad Central Prison.",
      points: [
        "Uncensored question & answer period",
        "Answers straight from 17 years of prison observations",
        "Clear guidance on legal doubts"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="py-32 bg-bg-surface w-full min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Seminar Details" title="Crime & Prison Seminar" />

          {/* Time Badge Info */}
          <div className="text-center mb-16">
            <span className="inline-block bg-accent-gold/15 border border-accent-gold/30 text-accent-gold text-xs font-ui px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 animate-pulse-dot">
              ⏱ 3 Hours · Interactive · Lived Experience · Q&A
            </span>
            <p className="font-body text-base text-text-body leading-relaxed max-w-2xl mx-auto">
              "In today's social life, knowingly or unknowingly, with planning or by mistake, we make mistakes. According to law, it is a crime — and for that, we and our loved ones suffer enormously. Most mistakes happen between the age of 20 to 25 years. If anyone has proper knowledge, it can stop crime."
              <span className="block font-ui font-semibold text-text-head mt-3">— Chirag Rana</span>
            </p>
          </div>

          {/* Tab Selector Modules Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Tabs List */}
            <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
              {modules.map((mod, idx) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-4 text-left p-4 rounded-xl border transition-all duration-300 w-64 lg:w-full shrink-0 hoverable ${
                    activeTab === idx
                      ? 'bg-bg-card border-accent-red shadow-lg shadow-accent-red-glow/5 translate-x-1'
                      : 'bg-bg-card/40 border-border-custom hover:bg-bg-card hover:border-border-custom/80'
                  }`}
                >
                  <span className="text-2xl">{mod.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-ui text-sm font-bold text-text-head leading-none mb-1">{mod.title}</h4>
                    <p className="font-body text-[10px] text-text-muted uppercase tracking-wider">{mod.sub}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Tab panel detailed content */}
            <div className="lg:col-span-8 bg-bg-card border border-border-custom rounded-2xl p-8 text-left shadow-xl relative min-h-[380px] flex flex-col justify-between">
              <div className="animate-fade-in" key={activeTab}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl bg-bg-surface w-14 h-14 rounded-xl flex items-center justify-center border border-border-custom">
                    {modules[activeTab].icon}
                  </span>
                  <div>
                    <span className="font-ui text-[10px] font-bold text-accent-gold uppercase tracking-widest">MODULE 0{activeTab + 1}</span>
                    <h3 className="font-ui text-xl md:text-2xl font-bold text-text-head leading-tight">{modules[activeTab].title}</h3>
                  </div>
                </div>

                <p className="font-body text-base text-text-body mb-6 leading-relaxed">
                  {modules[activeTab].desc}
                </p>

                <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider mb-3">Key Focus Areas:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {modules[activeTab].points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-body font-body">
                      <span className="text-accent-red mt-0.5">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special flowchart diagram for module 4 */}
              {activeTab === 3 && (
                <div className="bg-bg-surface border border-border-custom rounded-xl p-4 mt-4 text-center">
                  <p className="font-ui text-[10px] text-accent-gold uppercase tracking-widest font-bold mb-3">Simulated Case Progression</p>
                  <div className="grid grid-cols-5 gap-2 items-center">
                    {["FIR", "Arrest", "Chargesheet", "Trial", "Verdict"].map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between col-span-1">
                        <div className="bg-bg-card border border-border-custom px-2 py-1.5 rounded-lg w-full">
                          <p className="font-ui text-[10px] font-bold text-text-head">{step}</p>
                        </div>
                        {sIdx < 4 && <span className="text-text-muted text-xs mx-1">→</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Delivery methods summary strip */}
          <div className="mt-16 bg-bg-card border border-border-custom rounded-2xl py-6 px-8 flex flex-wrap justify-center items-center gap-8 text-center">
            <span className="font-ui text-xs font-bold text-accent-gold uppercase tracking-wider">Our Delivery Methods:</span>
            {[
              "📖 Immersive Storytelling",
              "📊 Empirical Case Studies",
              "🎭 Real-Life Convict Examples",
              "📈 Interactive Legal Data",
              "💡 Emotion-Led Motivations"
            ].map((style, i) => (
              <span key={i} className="font-ui text-xs text-text-head font-bold tracking-wider">
                {style}
              </span>
            ))}
          </div>

          {/* CTA Booking panel */}
          <div className="mt-16 bg-gradient-to-r from-bg-card to-bg-card-h border border-border-custom rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <h3 className="font-ui text-2xl md:text-3xl text-text-head font-bold uppercase mb-3">Ready to bring this curriculum to your school?</h3>
            <p className="font-body text-sm text-text-body max-w-xl mx-auto mb-6">
              Educate your students before they cross a legal boundary. Book Chirag Rana for an interactive 3-hour session today.
            </p>
            <Link
              to="/booking"
              className="inline-flex bg-accent-red hover:bg-accent-red-light text-white font-ui font-semibold py-3 px-8 rounded-xl shadow-md shadow-accent-red-glow transition-all hover:scale-[1.02] hoverable"
            >
              Book This Seminar
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Seminars;
