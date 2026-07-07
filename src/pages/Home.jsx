import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, MessageCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedCounter from '../components/AnimatedCounter';
import GlassCard from '../components/GlassCard';
import Testimonials from '../components/Testimonials';

const Home = ({ onOpenStoryModal, onOpenTopicModal, whatsappNumber }) => {
  useEffect(() => {
    document.title = "Crime Free Yuva | Chirag Rana Crime Awareness Speaker";
  }, []);

  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY * 0.15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero visual particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${10 + Math.random() * 10}s`,
    size: `${2 + Math.random() * 3}px`,
    drift: `${-30 + Math.random() * 60}px`
  }));

  const awarenessMatters = [
    { 
      icon: "⚠️", 
      title: "Youth Mistakes", 
      text: "Peer pressure, anger, wrong influence.", 
      label: "Impulsivity & Anger",
      modalDesc: "Many young people act on sudden impulses. Peer pressure, school/college rivalries, and substance access can push a teenager to make a wrong choice that instantly leads to a police report.",
      bulletPoints: [
        { title: "Anger Loops", text: "A 5-second fight can turn into an assault charge under BNS laws, leading to arrest." },
        { title: "Peer Conformity", text: "Agreeing to join a group activity or assist a friend in a questionable situation makes you an accomplice." },
        { title: "Consequences on Careers", text: "A pending police charge or FIR automatically suspends passport applications and government job eligibility." }
      ],
      livedLesson: "In central prison, I saw hundreds of young boys who went to jail for a simple fight over a minor comment. They lost their degrees and futures because they acted on 5 seconds of rage."
    },
    { 
      icon: "💻", 
      title: "Digital Crime", 
      text: "Cyber crime, online traps.", 
      label: "Online Safety",
      modalDesc: "The internet offers anonymity, which lures students into believing they won't get caught. Sharing restricted files, online threats, digital fraud, and cyber harassment are heavily prosecuted crimes.",
      bulletPoints: [
        { title: "Cyber Extortion", text: "Falling for bait profiles or getting trapped in online blackmail setups." },
        { title: "Digital Footprint", text: "Everything typed, shared, or searched online is logged and can be recovered by state forensic cells." },
        { title: "Identity Scams", text: "Sharing your banking cards, OTPs, or letting a friend use your account makes you liable for financial crimes." }
      ],
      livedLesson: "Don't write things online that you wouldn't say in front of a judge. The virtual world leaves a permanent trail that the police can trace in minutes."
    },
    { 
      icon: "⚖️", 
      title: "Legal Ignorance", 
      text: "Not knowing consequences.", 
      label: "BNS Regulations",
      modalDesc: "The legal system operates on a fundamental principle: Ignorantia juris non excusat (Ignorance of the law is no excuse). Claiming you didn't know an action was illegal does not reduce your sentence.",
      bulletPoints: [
        { title: "BNS vs IPC", text: "Understanding the new Bharatiya Nyaya Sanhita updates that define student liabilities." },
        { title: "Bail Limitations", text: "Many offenses carry non-bailable clauses, meaning you must wait in custody until trial." },
        { title: "Arrest Flowcharts", text: "Knowing your legal rights during an arrest and how to contact legal representation." }
      ],
      livedLesson: "Ignorance isn't protection. Knowing where the boundary of the law starts is just as important as your math or science syllabus."
    },
    { 
      icon: "🛡️", 
      title: "Lack Of Awareness", 
      text: "Prevention before punishment.", 
      label: "Primary Focus",
      modalDesc: "Most schools teach standard academic courses but omit critical life-safety legal education. Prevention is always cheaper, safer, and less painful than going through rehabilitation and court trials.",
      bulletPoints: [
        { title: "Primary Prevention", text: "Stopping the crime from occurring by making youth aware of real-world outcomes." },
        { title: "Protecting Families", text: "A single criminal charge ruins the peace, reputation, and finances of the entire family." },
        { title: "Life Skills", text: "Building mental resilience to say 'No' to peer pressure and exit high-risk social settings." }
      ],
      livedLesson: "It is much easier to learn from my 17 years in prison than to try learning it inside a cell yourself. Prevention is your only true shield."
    }
  ];

  const featuredSeminars = [
    { icon: "🔍", title: "What Is Crime?", desc: "Legal vs moral boundaries. Where does a mistake end and a crime begin? Demystifying BNS codes." },
    { icon: "👤", title: "Who Is A Criminal?", desc: "The psychology behind criminal behaviour — and how anyone can make a life-ruining mistake." },
    { icon: "🚔", title: "Role of Police & Lawyer", desc: "What really happens when law enforcement gets involved. Rights during arrest and detention." },
    { icon: "🔒", title: "Life In Prison", desc: "The raw reality of prison cells. No Bollywood drama — the truth about daily jail routines." }
  ];

  const featuredAchievements = [
    { icon: "🏆", title: "Governor Recognition", desc: "Honoured by the 20th Governor of Gujarat, Shri Acharya Devvrat, and Nitin Gadkari for outstanding contributions to social reform.", tag: "State Honour" },
    { icon: "🎓", title: "Multiple Degrees", desc: "Acquired 5 separate Postgraduate Master's degrees in MBA, MSc, Political Science, Accounts, and Literature behind prison walls.", tag: "Academic Feat" },
    { icon: "🎙️", title: "Project Dhvani", desc: "Created 900+ educational audiobooks in Gujarati, Hindi, and English to assist visually impaired university students.", tag: "Social Work" },
    { icon: "🧠", title: "Mentorship Work", desc: "Mentored over 10,000+ prison inmates during his term, guiding them toward high school graduation and rehabilitation.", tag: "Rehabilitation" }
  ];

  return (
    <PageTransition>
      <div className="relative overflow-hidden bg-bg-base z-10 w-full min-h-screen">
        {/* Parallax watermark background */}
        <div 
          className="absolute left-0 bottom-0 pointer-events-none select-none text-[12vw] font-display text-border-custom leading-none opacity-20 hidden lg:block"
          style={{
            transform: `translateY(${scrollOffset}px) rotate(-90deg)`,
            transformOrigin: 'left bottom',
            zIndex: -1,
          }}
        >
          CRIME FREE YUVA
        </div>

        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-accent-red/40"
              style={{
                left: p.left,
                bottom: '-50px',
                width: p.size,
                height: p.size,
                animation: `floatParticle ${p.duration} linear infinite`,
                animationDelay: p.delay,
                '--drift': p.drift
              }}
            />
          ))}
        </div>

        {/* 1. Hero Section */}
        <section className="relative pt-32 pb-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          {/* Copywriting Column */}
          <div className="lg:col-span-7 flex flex-col text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 border border-border-custom bg-bg-surface px-4 py-1.5 rounded-full w-fit mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-red"></span>
              </span>
              <span className="font-ui text-xs font-bold tracking-wider text-text-head uppercase">
                🎤 Crime Free Yuva Motivator | Ahmedabad, Gujarat
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-8xl leading-[0.95] text-text-head tracking-tight mb-4 uppercase">
              AWARENESS <br />
              IS YOUR <br />
              <span className="relative inline-block text-accent-red">
                FREEDOM
                <span className="absolute bottom-2 left-0 w-full h-[6px] bg-accent-red scale-x-0 origin-left delay-[1200ms] duration-1000 ease-out animate-line-draw" style={{ animation: 'lineDraw 1.2s 0.8s ease forwards' }} />
              </span>
            </h1>

            <p className="font-ui text-lg md:text-xl font-semibold text-accent-gold mb-6 uppercase tracking-wider">
              Chirag Rana - The Crime Awareness Speaker
            </p>

            <p className="font-body text-base text-text-body mb-8 leading-relaxed max-w-xl">
              "Over 40% of crimes in India are committed by youth aged 18–30 — not because they are criminals, but because no one told them where the line is. Chirag Rana speaks from 17 years of lived experience inside prison walls — to make sure you never have to."
            </p>

            <div className="flex gap-3 mb-12 w-full max-w-md">
              <Link
                to="/booking"
                className="flex-1 text-center bg-accent-red hover:bg-accent-red-light text-white font-ui font-semibold py-3 px-3 sm:px-6 rounded-xl transition-all duration-300 shadow-lg shadow-accent-red-glow hover:scale-[1.02] hoverable text-xs sm:text-sm whitespace-nowrap"
              >
                📅 Book Session
              </Link>
              <button
                onClick={onOpenStoryModal}
                className="flex-1 text-center border border-border-custom hover:border-accent-red bg-bg-surface/50 text-text-head hover:text-white font-ui font-semibold py-3 px-3 sm:px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hoverable text-xs sm:text-sm whitespace-nowrap"
              >
                Watch Story →
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border-custom pt-8">
              {[
                { num: '3,000+', label: 'Youth Educated' },
                { num: '900+', label: 'Audiobooks for Blind' },
                { num: '10,000+', label: 'Inmates Mentored' },
                { num: '40+', label: 'Awards Received' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col text-left">
                  <span className="font-display text-4xl text-accent-red leading-none mb-1">
                    <AnimatedCounter target={stat.num} />
                  </span>
                  <span className="font-ui text-[10px] md:text-xs text-text-muted uppercase tracking-widest font-semibold leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Stack Column */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center h-[400px]">
            <div className="absolute w-72 h-44 rounded-2xl bg-gradient-to-tr from-accent-red to-accent-red-light p-6 shadow-xl transform -rotate-6 translate-y-[-40px] translate-x-[-20px] transition-transform duration-500 hover:-rotate-12 flex flex-col justify-between">
              <div className="font-display text-white text-5xl leading-none">17 YEARS</div>
              <div className="text-left">
                <p className="font-ui text-white font-bold text-xs uppercase tracking-wider">Inside Prison Walls</p>
                <p className="font-body text-white/80 text-[11px]">Emerged with 5 Postgraduate degrees</p>
              </div>
            </div>

            <div className="absolute w-72 h-44 rounded-2xl bg-bg-card border-2 border-accent-gold p-6 shadow-2xl transform rotate-3 translate-x-[20px] translate-y-[-10px] transition-transform duration-500 hover:rotate-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-3xl">🎤</span>
                <span className="bg-accent-gold/20 text-accent-gold font-ui text-[9px] font-bold px-2 py-0.5 rounded-full">3 HOURS</span>
              </div>
              <div className="text-left">
                <p className="font-ui text-text-head font-bold text-sm uppercase">Crime & Prison Seminar</p>
                <p className="font-body text-text-body text-[11px] mt-1">Transformational curriculum for young minds.</p>
              </div>
            </div>

            <div className="absolute w-72 h-44 rounded-2xl bg-bg-card/75 border border-border-custom backdrop-blur-md p-6 shadow-2xl transform -rotate-2 translate-y-[40px] translate-x-[-10px] transition-transform duration-500 hover:rotate-0 flex flex-col justify-between">
              <div className="text-left">
                <div className="font-ui text-accent-red text-xs font-bold uppercase tracking-widest mb-1">Motivator</div>
                <h3 className="font-ui text-text-head font-bold text-lg leading-tight">Mr. Chirag Rana</h3>
                <p className="font-body text-text-muted text-xs">Social Reformer & Speaker</p>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-ui font-semibold text-accent-gold uppercase tracking-wider">Released: July 2025</span>
                <span className="text-xs text-text-muted font-display tracking-widest">🔒 SAFE YUVA</span>
              </div>
            </div>

            <div className="absolute bottom-[20px] right-[20px] lg:right-[0px] bg-bg-surface border border-accent-gold text-accent-gold text-[10px] font-ui font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce-badge">
              <Shield className="w-3.5 h-3.5" /> Real Experience. Real Impact.
            </div>
          </div>
        </section>

        {/* 2. About Preview Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 relative z-10 border-t border-border-custom text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-border-custom shadow-2xl group hover:border-accent-red transition-all duration-500 reveal">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
              <img 
                src="/journey_preview.png" 
                alt="Journey from Prison Walls to Lecture Halls" 
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle top left label */}
              <div className="absolute top-4 left-4 bg-accent-red/90 text-white text-[10px] font-ui font-bold px-3 py-1 rounded-full z-20 uppercase tracking-widest">
                The Story
              </div>
            </div>

            {/* Right Column: Story + Details */}
            <div className="lg:col-span-6 flex flex-col justify-center reveal">
              <span className="font-ui text-xs font-bold text-accent-red uppercase tracking-widest mb-3 inline-block">
                About Chirag Rana
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-text-head mb-6 uppercase tracking-wide">
                From Prison Walls <br className="hidden sm:inline" />
                To Lecture Halls
              </h2>
              
              <p className="font-body text-base text-text-body mb-8 leading-relaxed">
                A single rash decision in 2008 changed Chirag Rana's life forever, leading to a 17-year sentence in Ahmedabad Central Prison. Instead of surrendering to ruin, he chose redemption—transforming a cell into a classroom and reform center.
              </p>

              {/* Story Highlights List */}
              <div className="space-y-4 mb-8">
                {[
                  { title: "17 Years Inside Prison", desc: "Served his term with reformative contribution, learning the cold reality of criminal systems." },
                  { title: "Completed Multiple Degrees", desc: "Studied relentlessly behind bars to earn 5 separate Master's degrees in political science, literature, journalism, and values." },
                  { title: "Worked for Social Reform", desc: "Mentored 10,000+ inmates and launched Project Dhvani, creating 900+ audiobooks for visually impaired students." },
                  { title: "Started Crime Free Yuva", desc: "Founded this initiative to deliver raw, lived consequences directly to schools, colleges, and young minds." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-accent-red-glow border border-accent-red/30 flex items-center justify-center shrink-0 text-accent-red font-ui font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-ui text-sm font-bold text-text-head uppercase tracking-wide leading-tight">
                        {item.title}
                      </h4>
                      <p className="font-body text-xs text-text-muted mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="w-fit bg-bg-surface hover:bg-bg-card-h border border-border-custom hover:border-accent-red text-text-head hover:text-white font-ui font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-md hover:scale-[1.02] hoverable text-sm"
              >
                Know More About Chirag →
              </Link>
            </div>
            
          </div>
        </section>

        {/* 3. Why Crime Awareness Matters Section */}
        <section className="py-24 bg-bg-surface relative z-10 border-t border-border-custom text-center">
          <div className="max-w-7xl mx-auto px-6">
            <span className="font-ui text-xs font-bold text-accent-red uppercase tracking-widest mb-2 inline-block">
              Why Crime Awareness Matters
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-text-head mb-4 uppercase tracking-wide">
              One Wrong Decision Can Change A Life
            </h2>
            <p className="font-body text-sm text-text-body max-w-xl mx-auto mb-12 leading-relaxed">
              Young people often cross legal boundaries not out of malice, but because they do not know where the line is drawn. Real awareness is the strongest shield against accidental ruin.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
              {awarenessMatters.map((item, idx) => (
                <GlassCard 
                  key={idx} 
                  onClick={() => onOpenTopicModal(item)}
                  className="p-8 text-left hover:border-accent-red transition-all duration-300 relative group overflow-hidden cursor-none hoverable" 
                  tilt={true}
                >
                  {/* Subtle red outline hover glow (pointer-events-none blocks click interception) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-red-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Card category badge */}
                  <span className="font-ui text-[9px] font-bold text-accent-gold uppercase tracking-wider mb-4 inline-block">
                    {item.label}
                  </span>

                  {/* Glowing icon wrapper */}
                  <span className="text-4xl bg-bg-surface w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-border-custom shadow-md shadow-black/40 group-hover:border-accent-red group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-ui text-lg font-bold text-text-head mb-3 uppercase tracking-wide group-hover:text-accent-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Body description */}
                  <p className="font-body text-xs text-text-body leading-relaxed mb-6">
                    {item.text}
                  </p>

                  {/* Visual Trap Detail CTA */}
                  <div className="mt-auto text-xs text-accent-red group-hover:text-accent-red-light font-ui font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-300">
                    Understand Trap →
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Seminar Preview Section */}
        <section className="py-24 bg-bg-base">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="font-ui text-xs font-bold text-accent-red uppercase tracking-widest mb-2 inline-block">Seminar Curriculum</span>
            <h2 className="font-display text-4xl md:text-6xl text-text-head mb-4 uppercase">Seminar Preview</h2>
            <p className="font-body text-sm text-text-body max-w-xl mx-auto mb-12">
              We cover legal boundaries, enforcement dynamics, court details, and prison life. Here are some featured curriculum modules:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredSeminars.map((sem, idx) => (
                <GlassCard key={idx} className="p-6 text-left" tilt={true}>
                  <span className="text-3xl bg-bg-surface w-12 h-12 rounded-xl flex items-center justify-center mb-4">{sem.icon}</span>
                  <h3 className="font-ui text-base font-bold text-text-head mb-2 uppercase leading-snug">{sem.title}</h3>
                  <p className="font-body text-xs text-text-body leading-relaxed">{sem.desc}</p>
                </GlassCard>
              ))}
            </div>

            <Link
              to="/seminars"
              className="inline-flex bg-accent-red hover:bg-accent-red-light text-white font-ui font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-accent-red-glow transition-all hover:scale-[1.03] hoverable"
            >
              View Complete Seminar
            </Link>
          </div>
        </section>

        {/* 5. Recognition & Achievements Section */}
        <section className="py-24 bg-bg-surface relative z-10 border-t border-border-custom text-center">
          <div className="max-w-7xl mx-auto px-6">
            <span className="font-ui text-xs font-bold text-accent-red uppercase tracking-widest mb-2 inline-block">
              Recognition / Achievement Preview
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-text-head mb-4 uppercase tracking-wide">
              Recognition & Achievements
            </h2>
            <p className="font-body text-sm text-text-body max-w-xl mx-auto mb-12 leading-relaxed">
              A reformative journey defined by outstanding academic pursuits, state honours, and significant community contributions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 reveal">
              {featuredAchievements.map((item, idx) => (
                <GlassCard key={idx} className="p-8 text-left hover:border-accent-gold transition-all duration-300 relative group overflow-hidden" tilt={true}>
                  {/* Subtle gold outline hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Card category badge */}
                  <span className="font-ui text-[9px] font-bold text-accent-gold uppercase tracking-wider mb-4 inline-block">
                    {item.tag}
                  </span>

                  {/* Glowing icon wrapper */}
                  <span className="text-4xl bg-bg-surface w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-border-custom shadow-md shadow-black/40 group-hover:border-accent-gold group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-ui text-lg font-bold text-text-head mb-3 uppercase tracking-wide group-hover:text-accent-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Body description */}
                  <p className="font-body text-xs text-text-body leading-relaxed">
                    {item.desc}
                  </p>
                </GlassCard>
              ))}
            </div>

            <Link
              to="/impact"
              className="inline-flex bg-bg-card border border-border-custom hover:border-accent-gold text-text-head font-ui font-bold py-3.5 px-8 rounded-xl transition-all hover:scale-[1.03] hoverable"
            >
              View All Achievements
            </Link>
          </div>
        </section>

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. Final CTA Booking Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="relative py-16 px-6 md:py-20 md:px-12 rounded-3xl bg-bg-card/75 border border-border-custom overflow-hidden max-w-4xl mx-auto shadow-2xl hover:border-accent-red/30 transition-colors duration-500 reveal">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-10 bg-accent-red-glow/10 blur-3xl pointer-events-none rounded-full" />
            
            {/* Header */}
            <h2 className="font-display text-4xl md:text-7xl text-text-head mb-6 tracking-wide uppercase leading-none">
              Bring Crime Free Yuva <br className="hidden sm:inline" />
              To Your Institution
            </h2>
            
            {/* Subtext */}
            <p className="font-body text-sm md:text-base text-text-body max-w-xl mx-auto mb-10 leading-relaxed">
              Equip your students, members, or community with critical legal knowledge. Host Mr. Chirag Rana for an authentic, impactful 3-hour session on crime prevention and youth awareness.
            </p>
            
            {/* Conversion Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/booking"
                className="w-full sm:w-auto bg-accent-red hover:bg-accent-red-light text-white font-ui font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-accent-red-glow hover:scale-[1.03] hoverable flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                📅 Book Session
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber || '918469400794'}?text=Hello%20Chirag%20ji,%20I%20want%20to%20know%20more%20about%20booking%20a%20Crime%20Free%20Yuva%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-accent-gold hover:border-accent-gold-light text-text-head font-ui font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.03] hoverable flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
