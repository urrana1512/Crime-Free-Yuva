import { useEffect, useState, useRef } from 'react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const Journey = () => {
  useEffect(() => {
    document.title = "17-Year Journey Timeline | Mr. Chirag Rana";
  }, []);

  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = rect.top - windowHeight * 0.7;
      const containerHeight = rect.height;
      
      if (start < 0) {
        const progress = Math.min(Math.max(-start / (containerHeight - windowHeight * 0.35), 0), 1);
        setLineHeight(progress * 100);
      } else {
        setLineHeight(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineData = [
    {
      year: "2008",
      title: "The Sentence Begins",
      desc: "Chirag Rana enters Ahmedabad Central Prison. A heavy moment that would define — and ultimately redefine — his entire life.",
      icon: "🔒"
    },
    {
      year: "2009",
      title: "The Ultimate Decision",
      desc: "Rather than giving in to cell despair, Chirag chooses education as his ladder. He registers for his first post-graduate course behind bars.",
      icon: "📚"
    },
    {
      year: "2016",
      title: "Project Dhvani Launch",
      desc: "On October 2nd, he starts recording academic audiobooks for the Blind People's Association, expanding access for visual-impaired pupils.",
      icon: "🎙️"
    },
    {
      year: "2016-2022",
      title: "Five Postgraduate Degrees",
      desc: "Completes MBA (HR), M.A. (Gujarati), M.A. (Political Science), M.Com (Accounts), and M.Sc. (Value Education & Spirituality) while incarcerated.",
      icon: "🎓"
    },
    {
      year: "2015-2022",
      title: "Samarth Psychology Mentor",
      desc: "Serves for 7 years as an inmate mentor for Dr. Reena Sharma's 'The Mind Practice' program, helping prisoners process mental struggles.",
      icon: "🧠"
    },
    {
      year: "2022",
      title: "Tinka Tinka Award Winner",
      desc: "Honoured with the national Tinka Tinka Award for exemplary service to inmate welfare, rehabilitation programs, and social reform inside prison.",
      icon: "🏆"
    },
    {
      year: "2023",
      title: "Honoured by Governor of Gujarat",
      desc: "Awarded 40+ certificates of excellence by Hon'ble Governor of Gujarat Shri Acharya Devvrat and DGP Dr. KLN Rao IPS inside Ahmedabad Prison.",
      icon: "🎖️"
    },
    {
      year: "2023",
      title: "M.Sc. Presentation by Union Minister",
      desc: "Union Minister Shri Nitin Gadkari alongside Annamalai University VC awards Chirag his M.Sc. degree in a special convocation program.",
      icon: "🎓"
    },
    {
      year: "July 2025",
      title: "Freedom & New Initiative",
      desc: "Released from prison after completing his full 17-year sentence. Launches the Crime Free Yuva initiative to save young lives from mistake loops.",
      icon: "🚀"
    }
  ];

  return (
    <PageTransition>
      <div className="py-32 bg-bg-base w-full min-h-screen" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Transformational Timeline" title="17 Years That Changed Everything" />

          {/* Timeline Wrapper */}
          <div className="relative mt-20">
            {/* Center dashed progress line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-border-custom z-0">
              <div 
                className="absolute top-0 left-0 w-full bg-accent-red transition-all duration-300"
                style={{ height: `${lineHeight}%` }}
              />
            </div>

            {/* Nodes */}
            <div className="space-y-12">
              {timelineData.map((node, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center z-10 w-full">
                    {/* Left Column (Desktop only, shows for even nodes) */}
                    <div className="hidden md:flex w-1/2 pr-12 justify-end">
                      {isEven && (
                        <div className="bg-bg-card border border-border-custom rounded-2xl p-6 shadow-xl text-left w-full max-w-md hover:border-accent-red transition-all">
                          <div className="flex items-center gap-3 mb-2 justify-between">
                            <span className="font-ui text-xs font-bold text-accent-gold uppercase tracking-wider">{node.year}</span>
                            <span className="text-xl">{node.icon}</span>
                          </div>
                          <h4 className="font-ui text-base font-bold text-text-head mb-2">{node.title}</h4>
                          <p className="font-body text-xs text-text-body leading-relaxed">{node.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* Center Node Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-bg-card border-2 border-accent-red flex items-center justify-center z-20 shadow-md">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-red animate-pulse-dot" />
                    </div>

                    {/* Right Column (Mobile: shows all nodes. Desktop: shows odd nodes only) */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-12 flex justify-start">
                      <div className={`bg-bg-card border border-border-custom rounded-2xl p-6 shadow-xl text-left w-full max-w-md hover:border-accent-red transition-all ${
                        isEven ? 'md:hidden block' : 'block'
                      }`}>
                        <div className="flex items-center gap-3 mb-2 justify-between">
                          <span className="font-ui text-xs font-bold text-accent-gold uppercase tracking-wider">{node.year}</span>
                          <span className="text-xl">{node.icon}</span>
                        </div>
                        <h4 className="font-ui text-base font-bold text-text-head mb-2">{node.title}</h4>
                        <p className="font-body text-xs text-text-body leading-relaxed">{node.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Journey;
