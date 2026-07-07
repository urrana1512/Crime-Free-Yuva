import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';

const Footer = ({ config, theme }) => {
  const number = config?.whatsapp_number || "918469400794";
  const phone = config?.phone || "+91-84694-00794";
  const emailPrimary = config?.email_primary || "chiragrana3399@gmail.com";
  const emailSecondary = config?.email_secondary || "ckrana3986@gmail.com";
  const address = config?.address || "39-465, Parasnagar-3, Sola Road, Naranpura, Ahmedabad – 380063, Gujarat";

  const logoSrc = theme === 'light' ? '/logo_light.png' : '/logo_dark.png';

  return (
    <footer className="bg-bg-surface border-t border-border-custom py-16 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Col 1: Brand details */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="Crime Free Yuva Logo" className="w-12 h-12 object-contain" />
            <span className="font-ui text-text-head font-bold text-lg leading-none uppercase tracking-wide flex items-center gap-1.5">
              <span>CRIME FREE</span>
              <span className="font-logo-yuva text-xl text-accent-red font-bold leading-none">युवा</span>
            </span>
          </div>
          <p className="font-body text-xs text-text-body leading-relaxed max-w-sm">
            A movement to make India's youth crime-free through legal awareness, emotional self-control, and the raw, lived wisdom of real experience. Delivering impactful Crime & Prison Seminars.
          </p>
          <div className="flex flex-col text-xs text-text-muted gap-1 mt-2">
            <span>📞 {phone}</span>
            <span>✉️ {emailPrimary}</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="flex flex-col text-left">
          <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider mb-4 border-l-2 border-accent-red pl-3">
            Sitemap Links
          </h4>
          <div className="grid grid-cols-2 gap-3 text-xs font-ui text-text-body">
            <Link to="/about" className="hover:text-accent-red transition-colors hoverable">About Chirag</Link>
            <Link to="/journey" className="hover:text-accent-red transition-colors hoverable">His Journey</Link>
            <Link to="/seminars" className="hover:text-accent-red transition-colors hoverable">The Seminar</Link>
            <Link to="/impact" className="hover:text-accent-red transition-colors hoverable">Reach & Impact</Link>
            <Link to="/audience" className="hover:text-accent-red transition-colors hoverable">Who We Serve</Link>
            <Link to="/booking" className="hover:text-accent-red transition-colors hoverable">Book Session</Link>
          </div>
        </div>

        {/* Col 3: Direct Address Info */}
        <div className="flex flex-col">
          <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider mb-4 border-l-2 border-accent-gold pl-3">
            Office Contacts
          </h4>
          <p className="font-body text-xs text-text-body leading-relaxed mb-4">
            📍 {address}
          </p>
          <div className="flex flex-wrap gap-3">
            <a 
              href={`https://wa.me/${number}?text=Hi%20Chirag%2C%20I%20want%20to%20book%20a%20Crime%20Free%20Yuva%20session.`}
              target="_blank"
              rel="noreferrer"
              className="bg-wa-green/20 hover:bg-wa-green/30 text-wa-green text-[10px] font-ui font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider flex items-center gap-1 transition-colors hoverable"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
            <a 
              href={`mailto:${emailSecondary}`}
              className="bg-accent-red-glow hover:bg-accent-red/20 text-accent-red text-[10px] font-ui font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider flex items-center gap-1 transition-colors hoverable"
            >
              <Mail className="w-3.5 h-3.5" /> Alt Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Rights Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-border-custom mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-[10px] text-text-muted">
          © 2025 Crime Free Yuva — Chirag Rana. All Rights Reserved.
        </p>
        <p className="font-ui text-[10px] font-semibold text-text-muted uppercase tracking-wider">
          Built for a safer, crime-free tomorrow. 🇮🇳
        </p>
      </div>
    </footer>
  );
};

export default Footer;
