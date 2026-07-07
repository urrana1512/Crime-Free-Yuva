import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Rajesh Patel",
    role: "Principal, Vidhyanagar College",
    initials: "RP",
    avatarColor: "from-accent-red to-orange-500",
    stars: 5,
    comment: "Chirag's session is an absolute eye-opener. He talks about legal boundaries that students never learn in textbooks. His personal story makes it incredibly real for them."
  },
  {
    name: "Sneha Shah",
    role: "Computer Science Student",
    initials: "SS",
    avatarColor: "from-blue-600 to-indigo-500",
    stars: 5,
    comment: "The cyber crime section in his talk was incredibly detailed. It helped me identify an online extortion attempt a week later. Truly life-saving awareness!"
  },
  {
    name: "DCP Amit Suryavanshi",
    role: "Gujarat Police Officer",
    initials: "AS",
    avatarColor: "from-accent-gold to-yellow-500",
    stars: 5,
    comment: "Mr. Rana's Crime Free Yuva initiative is doing what standard policing alone cannot: proactive prevention. His raw story has a direct impact on the audience."
  },
  {
    name: "Amit Verma",
    role: "Co-founder, Jyoti NGO",
    initials: "AV",
    avatarColor: "from-emerald-600 to-teal-500",
    stars: 5,
    comment: "His contribution of 900+ audiobooks for visually impaired students during his prison term shows his absolute commitment to society and personal rehabilitation."
  },
  {
    name: "Rohan Joshi",
    role: "B.Com Student",
    initials: "RJ",
    avatarColor: "from-purple-600 to-pink-500",
    stars: 5,
    comment: "Hearing him describe jail cell reality made me realize how a 5-second road rage can ruin my entire future. Every college must host this session."
  },
  {
    name: "Prof. Meera Deshmukh",
    role: "HOD, Nirma University",
    initials: "MD",
    avatarColor: "from-pink-600 to-rose-500",
    stars: 5,
    comment: "We've had many motivational speakers, but none as authentic as Chirag. His structured explanation of the BNS laws is exactly what our freshers needed."
  },
  {
    name: "Karan Malhotra",
    role: "Event Coordinator",
    initials: "KM",
    avatarColor: "from-violet-600 to-fuchsia-500",
    stars: 5,
    comment: "The booking process was seamless, and the crowd control during the seminar was exceptional. Over 800 students sat in pin-drop silence throughout."
  },
  {
    name: "Sunita Rao",
    role: "Parent Association Lead",
    initials: "SR",
    avatarColor: "from-cyan-600 to-blue-500",
    stars: 5,
    comment: "As a parent, I am deeply thankful to Chirag. He educates children on the legal consequences of cyberbullying and digital footprints in a way they respect."
  },
  {
    name: "Inspector Vikram Rathore",
    role: "Cyber Crime Cell, Ahmedabad",
    initials: "VR",
    avatarColor: "from-orange-600 to-amber-500",
    stars: 5,
    comment: "Digital ignorance is high among teenagers. Chirag's warnings about account sharing and online scams are spot-on and align perfectly with our security advisories."
  },
  {
    name: "Ananya Iyer",
    role: "Student Leader",
    initials: "AI",
    avatarColor: "from-teal-600 to-cyan-500",
    stars: 5,
    comment: "The session didn't feel like a lecture at all. It was intense, raw, and full of interactive legal case studies. Every student should attend this before turning 18."
  }
];

export default function Testimonials() {
  // Double the list to create a perfect seamless scroll loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-bg-base relative z-10 border-t border-border-custom text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="font-ui text-xs font-bold text-accent-red uppercase tracking-widest mb-2 inline-block">
          Impact and Reviews
        </span>
        <h2 className="font-display text-4xl md:text-6xl text-text-head mb-4 uppercase tracking-wide">
          Voices of Awareness
        </h2>
        <p className="font-body text-sm text-text-body max-w-xl mx-auto leading-relaxed">
          Read feedback from college principals, law enforcement officials, parents, and students who have attended the Crime Free Yuva seminars.
        </p>
      </div>

      {/* Infinite Scroll Wrapper with mathematically calculated width boundaries */}
      <div className="relative w-full max-w-[90vw] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[840px] mx-auto">
        
        {/* Gradient edge masks to fade the scrolling items smoothly */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg-base via-bg-base/80 to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg-base via-bg-base/80 to-transparent pointer-events-none z-20" />

        {/* Single Row Track */}
        <div className="w-full py-4 overflow-hidden">
          <div className="flex gap-6 animate-marquee w-max py-2 hover:cursor-pointer">
            {duplicatedTestimonials.map((item, idx) => (
              <div
                key={`t-${idx}`}
                // w-[70vw] on mobile, sm:w-[320px] on small screen, md:w-[380px] on medium screen, lg:w-[400px] on desktop
                // With max-w-Xpx container, this guarantees one central card and two half-visible cards on sides.
                className="bg-bg-card/60 backdrop-blur-md border border-border-custom hover:border-accent-red/40 hover:bg-bg-card-h/70 transition-all duration-500 rounded-2xl p-6 w-[70vw] sm:w-[320px] md:w-[380px] lg:w-[400px] shrink-0 flex flex-col gap-4 shadow-lg hover:shadow-2xl hover:scale-[1.02] hoverable group"
              >
                {/* Rating stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold stroke-[1.5]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="font-body text-sm text-text-body italic leading-relaxed text-left flex-1">
                  "{item.comment}"
                </p>

                {/* Card divider line */}
                <div className="w-full h-px bg-border-custom group-hover:bg-accent-red/20 transition-colors duration-500" />

                {/* User avatar/name details */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-ui font-extrabold text-white text-xs bg-gradient-to-tr ${item.avatarColor} shadow-md`}>
                    {item.initials}
                  </div>
                  <div className="text-left">
                    <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider group-hover:text-accent-red transition-colors duration-500">
                      {item.name}
                    </h4>
                    <p className="font-body text-[10px] text-text-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
