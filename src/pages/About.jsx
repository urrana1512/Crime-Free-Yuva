import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  useEffect(() => {
    document.title = "About Chirag Rana | Crime Awareness Speaker";
  }, []);

  const certificates = [
    {
      title: "M.A. Gujarati",
      type: "Master of Arts",
      specialization: "Gujarati Literature",
      year: "2013"
    },
    {
      title: "MBA Human Resources",
      type: "Master of Business",
      specialization: "Human Resource Management",
      year: "2015"
    },
    {
      title: "M.A. Political Science",
      type: "Master of Arts",
      specialization: "Political Systems & Governance",
      year: "2017"
    },
    {
      title: "M.Com",
      type: "Master of Commerce",
      specialization: "Accounts & Statistics",
      year: "2019"
    },
    {
      title: "M.Sc Value Education",
      type: "Master of Science",
      specialization: "Values, Ethics & Spirituality",
      year: "2021"
    },
    {
      title: "PG Diploma Journalism",
      type: "Postgraduate Diploma",
      specialization: "Media, Print & Journalism",
      year: "2022"
    },
    {
      title: "B.A English",
      type: "Bachelor of Arts",
      specialization: "English Literature",
      year: "2011"
    },
    {
      title: "PG Diploma Value Ed.",
      type: "Postgraduate Diploma",
      specialization: "Value Education & Spirituality",
      year: "2023"
    }
  ];

  const highlights = [
    { icon: '🏛️', text: 'Awarded by Governor of Gujarat — Shri Acharya Devvrat (2023)' },
    { icon: '📚', text: "900+ Audiobooks — Ahmedabad Blind People's Association (Project Dhvani)" },
    { icon: '🧠', text: "Mentor — Samarth Psychology Center, Ahmedabad Central Prison (7 Years)" },
    { icon: '🎤', text: 'Seminar for Law Students — Crime Free Yuva Initiative, Ahmedabad' }
  ];

  return (
    <PageTransition>
      <div className="py-32 bg-bg-surface w-full min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="About Chirag Rana" title="The Man Behind The Mission" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-12">
            {/* Left Column: Portrait Card */}
            <div className="lg:col-span-5 flex justify-center reveal">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl border border-border-custom overflow-hidden shadow-2xl flex flex-col justify-end p-6 group">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent z-10 opacity-80 pointer-events-none" />
                <img 
                  src="/chirag_rana_about1.png" 
                  alt="Mr. Chirag Rana - Speaker Portrait" 
                  className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* 7 Degrees badge */}
                <div className="absolute top-6 right-6 w-20 h-20 flex items-center justify-center pointer-events-none z-20">
                  <div className="absolute inset-0 border border-dashed border-accent-gold rounded-full animate-spin-slow" />
                  <span className="font-display text-accent-gold text-lg tracking-wider">7 DEGREES</span>
                </div>

                {/* Date Badge */}
                <span className="absolute top-6 left-6 bg-accent-gold/20 text-accent-gold border border-accent-gold/30 text-[10px] font-ui font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-20">
                  Released: July 2025
                </span>

                {/* Profile Strip */}
                <div className="bg-bg-base/80 border border-border-custom rounded-2xl p-4 backdrop-blur-md relative z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-red text-white font-ui font-bold text-sm flex items-center justify-center">
                      CR
                    </div>
                    <div className="text-left">
                      <h4 className="font-ui text-text-head font-bold text-sm">Mr. Chirag Rana</h4>
                      <p className="font-body text-text-muted text-[11px] leading-tight">Crime Free Yuva Motivator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Biography Content */}
            <div className="lg:col-span-7 text-left reveal-right flex flex-col">
              <h3 className="font-ui text-xl md:text-2xl font-bold text-text-head mb-6 uppercase tracking-wide border-b border-border-custom pb-3">
                From Prison Walls To Lecture Halls
              </h3>

              <div className="font-body text-base text-text-body space-y-4 mb-8 leading-relaxed">
                <p>
                  Chirag Kishorbhai Rana is not your typical motivational speaker. He completed 17 years at Ahmedabad Central Prison — and emerged with five postgraduate degrees, 900+ audiobooks, and an unshakeable mission: to make India's youth crime-free.
                </p>
                <p>
                  During his sentence, Chirag didn't waste a single day. He guided more than 10,000 fellow inmates through 10th, 12th, and bachelor's degree programs. He recorded 900+ books in Gujarati, Hindi, Sanskrit, and English for the Ahmedabad Blind People's Association. He served as a 7-year mentor for Dr. Reena Sharma's 'The Mind Practice' program at Ahmedabad Central Prison.
                </p>
                <p>
                  In 2023, the Hon'ble Governor of Gujarat Shri Acharya Devvrat, alongside DGP Dr. KLN Rao IPS, honoured Chirag with 40+ certificates for his extraordinary contributions from behind bars. His M.Sc. degree was presented by Union Minister Shri Nitin Gadkari himself.
                </p>
                <p>
                  Today, Chirag channels that lived experience into a movement — <strong className="text-accent-red">Crime Free Yuva</strong>. His seminars are not lectures. They are wake-up calls. He walks into schools, colleges, and corporate halls with one goal: to show the youth exactly what one wrong decision looks like from the inside.
                </p>
              </div>

              {/* Link down to Education Section */}
              <a
                href="#education-journey"
                className="w-fit bg-bg-card hover:bg-bg-card-h border border-border-custom hover:border-accent-gold text-text-head font-ui font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hoverable text-xs mb-8 inline-block uppercase tracking-wider"
              >
                🎓 View Education Journey ↓
              </a>

              {/* Bullet highlights */}
              <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider mb-4">Key Achievements Summary</h4>
              <div className="space-y-4">
                {highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3 border-l-2 border-accent-red pl-4 py-0.5">
                    <span className="text-lg leading-none">{hl.icon}</span>
                    <span className="font-body text-sm text-text-head font-medium">{hl.text}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Timeline / Transformation Story Section */}
          <div className="mt-32 pt-20 border-t border-border-custom text-center">
            <span className="font-ui text-xs font-bold text-accent-red uppercase tracking-widest mb-2 inline-block">
              Life Stages
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-text-head mb-4 uppercase tracking-wide">
              A Journey Of Transformation
            </h2>
            <p className="font-body text-sm text-text-body max-w-xl mx-auto mb-16 leading-relaxed">
              From a single rash mistake to five master's degrees and a state-honoured mission. This is the progression of Chirag Rana.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left relative mt-12">
              {/* Optional timeline connector line between cards */}
              <div className="absolute top-1/2 left-[15%] right-[15%] h-0.5 border-t border-dashed border-border-custom pointer-events-none hidden lg:block -translate-y-1/2 z-0" />
              
              {/* 1. Before Card */}
              <div className="bg-bg-card/75 border-2 border-accent-red/20 hover:border-accent-red/60 transition-all duration-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex flex-col gap-6 relative group overflow-hidden z-10">
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-accent-red/10 group-hover:bg-accent-red/20 transition-colors duration-500 flex items-center justify-center font-display text-accent-red text-5xl opacity-40 select-none">
                  ❌
                </div>
                <div>
                  <span className="font-ui text-[10px] font-bold text-accent-red uppercase tracking-wider bg-accent-red-glow/20 px-3 py-1 rounded-full">
                    Stage 1: Before
                  </span>
                  <h3 className="font-ui text-2xl font-extrabold text-text-head uppercase mt-4 tracking-wide group-hover:text-accent-red transition-colors">
                    The Ruin (2008 – 2009)
                  </h3>
                </div>
                <div className="w-full h-px bg-border-custom group-hover:bg-accent-red/20 transition-colors" />
                <ul className="space-y-4 font-body text-sm text-text-body">
                  <li className="flex gap-3 items-start">
                    <span className="text-base leading-none">❌</span>
                    <div>
                      <strong className="text-text-head font-semibold font-ui uppercase text-xs block mb-0.5">Wrong Decisions</strong>
                      A single rash, anger-fueled choice under peer influence that crossed legal boundaries.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-base leading-none">❌</span>
                    <div>
                      <strong className="text-text-head font-semibold font-ui uppercase text-xs block mb-0.5">Lost Years</strong>
                      Sentenced to 17 years inside a prison cell. All career tracks, passport hopes, and family peace shattered in seconds.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-base leading-none">❌</span>
                    <div>
                      <strong className="text-text-head font-semibold font-ui uppercase text-xs block mb-0.5">Prison Life</strong>
                      Surrounded by despair, cold concrete cells, and high-risk inmates with little guidance.
                    </div>
                  </li>
                </ul>
              </div>

              {/* 2. Transformation Card */}
              <div className="bg-bg-card/75 border-2 border-accent-gold/20 hover:border-accent-gold/60 transition-all duration-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex flex-col gap-6 relative group overflow-hidden z-10">
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-accent-gold/10 group-hover:bg-accent-gold/20 transition-colors duration-500 flex items-center justify-center font-display text-accent-gold text-5xl opacity-40 select-none">
                  📚
                </div>
                <div>
                  <span className="font-ui text-[10px] font-bold text-accent-gold uppercase tracking-wider bg-accent-gold/15 px-3 py-1 rounded-full">
                    Stage 2: Transformation
                  </span>
                  <h3 className="font-ui text-2xl font-extrabold text-text-head uppercase mt-4 tracking-wide group-hover:text-accent-gold transition-colors">
                    The Ascent (2009 – 2025)
                  </h3>
                </div>
                <div className="w-full h-px bg-border-custom group-hover:bg-accent-gold/20 transition-colors" />
                <ul className="space-y-4 font-body text-sm text-text-body">
                  <li className="flex gap-3 items-start">
                    <span className="text-base leading-none">📚</span>
                    <div>
                      <strong className="text-text-head font-semibold font-ui uppercase text-xs block mb-0.5">Relentless Education</strong>
                      Acquired 5 separate PG Master's degrees behind prison walls through constant research and study.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-base leading-none">🎙️</span>
                    <div>
                      <strong className="text-text-head font-semibold font-ui uppercase text-xs block mb-0.5">Helping Others</strong>
                      Mentored 10,000+ inmates to pass board exams and created 900+ audiobooks for visually impaired students.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-base leading-none">🧠</span>
                    <div>
                      <strong className="text-text-head font-semibold font-ui uppercase text-xs block mb-0.5">Personal Growth</strong>
                      Reconstructed identity using value studies, psychology guidance, and mental training models.
                    </div>
                  </li>
                </ul>
              </div>

              {/* 3. After Card */}
              <div className="bg-bg-card/75 border-2 border-accent-green/20 hover:border-accent-green/60 transition-all duration-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex flex-col gap-6 relative group overflow-hidden z-10">
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-accent-green/10 group-hover:bg-accent-green/20 transition-colors duration-500 flex items-center justify-center font-display text-accent-green text-5xl opacity-40 select-none">
                  ✅
                </div>
                <div>
                  <span className="font-ui text-[10px] font-bold text-accent-green uppercase tracking-wider bg-accent-green/15 px-3 py-1 rounded-full">
                    Stage 3: After
                  </span>
                  <h3 className="font-ui text-2xl font-extrabold text-text-head uppercase mt-4 tracking-wide group-hover:text-accent-green transition-colors">
                    The Mission (2025 – Present)
                  </h3>
                </div>
                <div className="w-full h-px bg-border-custom group-hover:bg-accent-green/20 transition-colors" />
                <ul className="space-y-4 font-body text-sm text-text-body">
                  <li className="flex gap-3 items-start">
                    <span className="text-base leading-none">✅</span>
                    <div>
                      <strong className="text-text-head font-semibold font-ui uppercase text-xs block mb-0.5">Crime Awareness Speaker</strong>
                      Delivering raw, unfiltered warnings and legally-precise advice to colleges across the country.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-base leading-none">✅</span>
                    <div>
                      <strong className="text-text-head font-semibold font-ui uppercase text-xs block mb-0.5">Youth Mentor</strong>
                      Steering youngsters away from bad peer networks, road rage, and illegal online behaviors.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-base leading-none">✅</span>
                    <div>
                      <strong className="text-text-head font-semibold font-ui uppercase text-xs block mb-0.5">Social Reform Mission</strong>
                      Driving the Crime Free Yuva movement to safeguard families and protect career paths of Indian students.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mt-32 pt-20 border-t border-border-custom text-center">
            <span className="font-ui text-xs font-bold text-accent-red uppercase tracking-widest mb-2 inline-block">
              Our Core Values
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-text-head mb-4 uppercase tracking-wide">
              The <span className="text-accent-red">Principles</span> Behind The <span className="text-accent-red">Mission</span>
            </h2>
            <p className="font-body text-sm md:text-base text-text-body max-w-xl mx-auto mb-16 leading-relaxed reveal">
              A movement built on awareness, responsibility, transformation, and prevention — because the right knowledge at the right time can change a life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12 max-w-[1200px] mx-auto px-4 md:px-0">
              
              {/* Card 1: Awareness */}
              <div 
                className="bg-bg-card/70 backdrop-blur-md border border-accent-red/20 hover:border-accent-red/70 transition-all duration-500 rounded-3xl p-8 shadow-xl hover:shadow-accent-red-glow/20 hover:scale-[1.01] hover:-translate-y-2.5 flex flex-col justify-between group overflow-hidden relative reveal z-10"
                style={{ transitionDelay: '100ms' }}
              >
                {/* Accent red top glow */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent-red opacity-30 group-hover:opacity-75 transition-opacity" />
                
                <div className="flex flex-col gap-6">
                  {/* Top Area: Icon Gradient Circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent-red to-orange-500 border border-accent-gold flex items-center justify-center shadow-lg shadow-accent-red-glow/30 animate-float-icon group-hover:rotate-[10deg] transition-all duration-500 shrink-0">
                    <span className="text-3xl select-none">🧠</span>
                  </div>
                  
                  {/* Middle Area */}
                  <div>
                    <h3 className="font-ui text-2xl font-extrabold text-text-head uppercase tracking-wide group-hover:text-accent-red transition-colors duration-300">
                      Awareness
                    </h3>
                    <p className="font-ui text-xs font-bold text-accent-gold mt-1 uppercase tracking-wider">
                      Knowledge Creates Protection
                    </p>
                  </div>

                  {/* Bottom Area */}
                  <p className="font-body text-sm text-text-body leading-relaxed">
                    Crime often begins with ignorance — not understanding the law, consequences, or impact of our actions. Through real-life experiences and awareness sessions, Crime Free Yuva empowers youth with the knowledge needed to make better decisions.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border-custom flex items-center">
                  <span className="bg-accent-red/10 border border-accent-red/20 text-accent-red-light font-ui text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    "Awareness is the first step towards a safer society."
                  </span>
                </div>
              </div>

              {/* Card 2: Responsibility */}
              <div 
                className="bg-bg-card/70 backdrop-blur-md border border-accent-red/20 hover:border-accent-red/70 transition-all duration-500 rounded-3xl p-8 shadow-xl hover:shadow-accent-red-glow/20 hover:scale-[1.01] hover:-translate-y-2.5 flex flex-col justify-between group overflow-hidden relative reveal z-10"
                style={{ transitionDelay: '200ms' }}
              >
                {/* Accent red top glow */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent-red opacity-30 group-hover:opacity-75 transition-opacity" />

                <div className="flex flex-col gap-6">
                  {/* Top Area: Icon Gradient Circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent-red to-orange-500 border border-accent-gold flex items-center justify-center shadow-lg shadow-accent-red-glow/30 animate-float-icon group-hover:rotate-[10deg] transition-all duration-500 shrink-0" style={{ animationDelay: '0.5s' }}>
                    <span className="text-3xl select-none">⚖️</span>
                  </div>
                  
                  {/* Middle Area */}
                  <div>
                    <h3 className="font-ui text-2xl font-extrabold text-text-head uppercase tracking-wide group-hover:text-accent-red transition-colors duration-300">
                      Responsibility
                    </h3>
                    <p className="font-ui text-xs font-bold text-accent-gold mt-1 uppercase tracking-wider">
                      Every Action Has A Consequence
                    </p>
                  </div>

                  {/* Bottom Area */}
                  <p className="font-body text-sm text-text-body leading-relaxed">
                    Every decision creates an impact — not only on an individual but also on family, society, and future. The mission encourages youth to understand accountability and make responsible choices.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border-custom flex items-center">
                  <span className="bg-accent-red/10 border border-accent-red/20 text-accent-red-light font-ui text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    "Freedom comes with responsibility."
                  </span>
                </div>
              </div>

              {/* Card 3: Transformation */}
              <div 
                className="bg-bg-card/70 backdrop-blur-md border border-accent-red/20 hover:border-accent-red/70 transition-all duration-500 rounded-3xl p-8 shadow-xl hover:shadow-accent-red-glow/20 hover:scale-[1.01] hover:-translate-y-2.5 flex flex-col justify-between group overflow-hidden relative reveal z-10"
                style={{ transitionDelay: '300ms' }}
              >
                {/* Accent red top glow */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent-red opacity-30 group-hover:opacity-75 transition-opacity" />

                <div className="flex flex-col gap-6">
                  {/* Top Area: Icon Gradient Circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent-red to-orange-500 border border-accent-gold flex items-center justify-center shadow-lg shadow-accent-red-glow/30 animate-float-icon group-hover:rotate-[10deg] transition-all duration-500 shrink-0" style={{ animationDelay: '1s' }}>
                    <span className="text-3xl select-none">🔥</span>
                  </div>
                  
                  {/* Middle Area */}
                  <div>
                    <h3 className="font-ui text-2xl font-extrabold text-text-head uppercase tracking-wide group-hover:text-accent-red transition-colors duration-300">
                      Transformation
                    </h3>
                    <p className="font-ui text-xs font-bold text-accent-gold mt-1 uppercase tracking-wider">
                      Mistakes Don't Define A Person
                    </p>
                  </div>

                  {/* Bottom Area */}
                  <p className="font-body text-sm text-text-body leading-relaxed">
                    A person's past does not decide their future. With the right guidance, education, and mindset, transformation is possible. Crime Free Yuva focuses on changing thinking before changing circumstances.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border-custom flex items-center">
                  <span className="bg-accent-red/10 border border-accent-red/20 text-accent-red-light font-ui text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    "A changed mindset can create a changed life."
                  </span>
                </div>
              </div>

              {/* Card 4: Prevention */}
              <div 
                className="bg-bg-card/70 backdrop-blur-md border border-accent-red/20 hover:border-accent-red/70 transition-all duration-500 rounded-3xl p-8 shadow-xl hover:shadow-accent-red-glow/20 hover:scale-[1.01] hover:-translate-y-2.5 flex flex-col justify-between group overflow-hidden relative reveal z-10"
                style={{ transitionDelay: '400ms' }}
              >
                {/* Accent red top glow */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent-red opacity-30 group-hover:opacity-75 transition-opacity" />

                <div className="flex flex-col gap-6">
                  {/* Top Area: Icon Gradient Circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent-red to-orange-500 border border-accent-gold flex items-center justify-center shadow-lg shadow-accent-red-glow/30 animate-float-icon group-hover:rotate-[10deg] transition-all duration-500 shrink-0" style={{ animationDelay: '1.5s' }}>
                    <span className="text-3xl select-none">🛡️</span>
                  </div>
                  
                  {/* Middle Area */}
                  <div>
                    <h3 className="font-ui text-2xl font-extrabold text-text-head uppercase tracking-wide group-hover:text-accent-red transition-colors duration-300">
                      Prevention
                    </h3>
                    <p className="font-ui text-xs font-bold text-accent-gold mt-1 uppercase tracking-wider">
                      Education Before Punishment
                    </p>
                  </div>

                  {/* Bottom Area */}
                  <p className="font-body text-sm text-text-body leading-relaxed">
                    The strongest way to fight crime is not only punishment — it is prevention. By educating youth about crime, law, and consequences, we create a safer generation.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border-custom flex items-center">
                  <span className="bg-accent-red/10 border border-accent-red/20 text-accent-red-light font-ui text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    "The best crime prevention is awareness."
                  </span>
                </div>
              </div>

            </div>

            {/* Center Quote Banner Section */}
            <div className="mt-20 max-w-[1200px] mx-auto px-4 md:px-0 reveal">
              <div className="relative py-12 px-8 md:py-16 md:px-12 rounded-3xl bg-bg-card/65 backdrop-blur-md border border-border-custom overflow-hidden shadow-2xl">
                {/* Soft animated background red/gold glow */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-accent-red-glow/15 to-accent-gold/5 blur-3xl pointer-events-none rounded-full" />
                
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <span className="text-4xl text-accent-gold/45 font-display select-none">"</span>
                  <h3 className="font-display text-2xl md:text-4xl text-text-head tracking-wide max-w-3xl leading-snug uppercase">
                    Our Mission Is Not To <span className="text-accent-red">Judge People</span> For Their Past, But To <span className="text-accent-red">Educate Them</span> Before Their Future Is Changed.
                  </h3>
                  <div className="w-16 h-px bg-accent-gold/40 mt-2" />
                  <div className="text-center">
                    <p className="font-ui text-sm font-extrabold text-accent-gold uppercase tracking-wider">— Chirag Rana</p>
                    <p className="font-body text-[10px] text-text-muted mt-1 uppercase tracking-widest font-semibold">Crime Free Yuva Motivator</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Education & Knowledge Journey Section */}
          <div id="education-journey" className="mt-32 pt-20 border-t border-border-custom text-center">
            <span className="font-ui text-xs font-bold text-accent-red uppercase tracking-widest mb-2 inline-block">
              Credentials & Accreditation
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-text-head mb-4 uppercase tracking-wide">
              Education & Knowledge Journey
            </h2>
            <p className="font-body text-sm text-text-body max-w-xl mx-auto mb-16 leading-relaxed">
              Studying behind bars under challenging conditions, Chirag Rana earned 5 Master's degrees and multiple diplomas to reform himself and the community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mt-12">
              {certificates.map((cert, idx) => (
                <div 
                  key={idx}
                  className="bg-bg-card/75 border-l-4 border-l-accent-gold border-r border-t border-b border-border-custom hover:border-accent-gold/50 transition-all duration-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden group reveal"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Watermark crest stamp */}
                  <div className="absolute -right-4 -bottom-4 text-accent-gold/5 text-7xl select-none pointer-events-none group-hover:scale-110 group-hover:text-accent-gold/10 transition-all duration-500 font-body">
                    📜
                  </div>
                  
                  {/* Top stamp/date */}
                  <div className="flex justify-between items-center mb-4 relative z-10">
                    <span className="text-[9px] font-ui font-extrabold uppercase bg-accent-gold/10 text-accent-gold px-2.5 py-1 rounded-full border border-accent-gold/20">
                      {cert.type}
                    </span>
                    <span className="text-[10px] font-body text-text-muted font-bold">
                      {cert.year}
                    </span>
                  </div>

                  {/* Degree name */}
                  <div className="relative z-10">
                    <h3 className="font-ui text-lg font-extrabold text-text-head leading-snug group-hover:text-accent-gold transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="font-body text-xs text-text-muted mt-1 leading-relaxed">
                      {cert.specialization}
                    </p>
                  </div>

                  {/* Issuer details */}
                  <div className="mt-8 pt-4 border-t border-border-custom relative z-10 flex items-center justify-between">
                    <span className="text-[9px] font-body text-text-muted uppercase tracking-wider font-semibold">
                      Accredited Course
                    </span>
                    <span className="text-xs text-accent-gold/80">
                      ✓ Verify
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
