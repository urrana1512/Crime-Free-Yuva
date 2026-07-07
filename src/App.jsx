/**
 * ═════════════════════════════════════════════════════════════════════════
 *  CRIME FREE YUVA - Mr. Chirag Rana Web Application (Multi-Page Architecture)
 * ═════════════════════════════════════════════════════════════════════════
 * 
 *  EXTERNAL DEPENDENCY SCRIPTS (Add these to your index.html head or body):
 *  1. EmailJS:
 *     <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
 *  2. SheetJS (XLSX):
 *     <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
 */

import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

// Shared Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import EntryAnimation from './components/EntryAnimation';
import PageLoader from './components/PageLoader';
import TopicModal from './components/TopicModal';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import Seminars from './pages/Seminars';
import Impact from './pages/Impact';
import Audience from './pages/Audience';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import AdminBookings from './pages/AdminBookings';

// ═══════════════════════════════════════════════
// CONFIG BLOCK
// ═══════════════════════════════════════════════
const CONFIG = {
  // ⚠️ EmailJS config — Replace with your real credentials if desired
  emailjs_public_key:  "YOUR_EMAILJS_PUBLIC_KEY",
  emailjs_service_id:  "YOUR_EMAILJS_SERVICE_ID",
  emailjs_template_id: "YOUR_EMAILJS_TEMPLATE_ID",
  
  // ⚠️ Google Form URL for detailed bookings
  google_form_url:     "https://forms.gle/YOUR_GOOGLE_FORM_LINK",
  
  // ⚠️ WhatsApp number (no + sign, with country code)
  whatsapp_number:     "918469400794",
  
  // Pre-filled contact details (Real)
  email_primary:       "chiragrana3399@gmail.com",
  email_secondary:     "ckrana3986@gmail.com",
  phone:               "+91-84694-00794",
  address:             "39-465, Parasnagar-3, Sola Road, Naranpura, Ahmedabad – 380063, Gujarat",
};

// ═══════════════════════════════════════════════
// CSS ANIMATIONS KEYFRAMES STYLE STRING
// ═══════════════════════════════════════════════
const cssAnimations = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Khand:wght@600;700&family=Teko:wght@600;700&display=swap');

.font-logo-yuva {
  font-family: 'Khand', 'Teko', sans-serif;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeLeft {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes lineDraw {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes pulseDot {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.6); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes bounceBadge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes pulseWa {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}
@keyframes floatParticle {
  0% { transform: translateY(100vh) translateX(0); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { transform: translateY(-10vh) translateX(var(--drift, 20px)); opacity: 0; }
}
@keyframes modalOpen {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-fade-up { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-fade-left { animation: fadeLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-fade-in { animation: fadeIn 0.6s ease forwards; }
.animate-pulse-dot { animation: pulseDot 2s ease infinite; }
.animate-bounce-badge { animation: bounceBadge 2.5s ease infinite; }
.animate-spin-slow { animation: spinSlow 12s linear infinite; }
.animate-pulse-wa { animation: pulseWa 2.5s ease infinite; }
.animate-modal-open { animation: modalOpen 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

.content-hidden {
  opacity: 0;
  filter: blur(12px);
  pointer-events: none;
}
.content-visible {
  opacity: 1;
  filter: blur(0px);
  transition: opacity 1s ease-out, filter 1s ease-out;
  pointer-events: all;
}
`;

// Helper component to reset scroll on route transition
const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Immersive Story Modal
const StoryModal = ({ isOpen, onClose }) => {
  // Prevent background scrolling when open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
      <div className="bg-bg-card border border-border-custom w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative animate-modal-open max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-bg-surface border-b border-border-custom px-8 py-5 flex justify-between items-center shrink-0">
          <div className="text-left">
            <span className="font-ui text-[9px] font-bold text-accent-gold uppercase tracking-widest">Lived Wisdom</span>
            <h3 className="font-ui text-xl font-bold text-text-head uppercase">The Story of 17 Years</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close story modal"
            className="p-1.5 rounded-lg bg-bg-card border border-border-custom text-text-head hover:border-accent-red transition-colors hoverable"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-8 overflow-y-auto font-body text-sm text-text-body space-y-5 text-left">
          <div className="bg-accent-red-glow border-l-4 border-accent-red p-4 rounded-r-xl">
            <p className="text-accent-red-light font-semibold font-ui uppercase text-[10px] tracking-wider mb-1">Introduction</p>
            <p className="text-xs leading-relaxed italic text-text-head">
              "One mistake cost me 17 years. The cells are not a place for rehabilitation; they are walls of cold concrete. My mission now is to make sure your students learn where the legal boundaries are before it's too late."
            </p>
          </div>

          <p>
            In 2008, a single rash decision landed Chirag Kishorbhai Rana inside the massive cells of Ahmedabad Central Prison. Facing a heavy 17-year sentence, the shock was immense. He watched many young inmates surrender to grief, substance use, and permanent criminal behaviors.
          </p>

          <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider pt-2">Phase 1: Choosing Education Over Ruin</h4>
          <p>
            Chirag refused to let prison define his identity. In 2009, he mapped out a rigorous study regime. For the next 14 years, he studied under severe cell conditions, acquiring 5 separate Master degrees:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs">
            <li><strong>M.B.A (Human Resources)</strong> — studying organizational psychology and human behavior.</li>
            <li><strong>M.Sc. Value Education & Spirituality</strong> — resolving internal conflicts.</li>
            <li><strong>M.A. Gujarati Literature</strong> — connecting with native literature.</li>
            <li><strong>M.A. Political Science</strong> — understanding systems of governance.</li>
            <li><strong>M.Com (Accounts & State)</strong> — handling numeric audit structures.</li>
            <li>Postgraduate Diplomas in Journalism and Value Systems.</li>
          </ul>

          <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider pt-2">Phase 2: Mentoring Inmates and Helping the Blind</h4>
          <p>
            During his sentence, Chirag realized that crime is often born from ignorance. He established informal classroom tables in prison, personally mentoring over 10,000 inmates to help them pass secondary boards (10th/12th) and bachelor courses.
          </p>
          <p>
            On October 2, 2016, he launched <strong>Project Dhvani</strong>. Partnering with the Ahmedabad Blind People's Association, he recorded over 900 audiobooks across Gujarati, Hindi, and English so visually impaired students had access to university materials.
          </p>

          <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider pt-2">Phase 3: Recognition & July 2025 Release</h4>
          <p>
            By 2023, his reformative contribution was recognized. The 20th Governor of Gujarat, Shri Acharya Devvrat, and state police heads honoured Chirag with 40+ certificates of excellence. Union Minister Nitin Gadkari presented him his M.Sc. degree in person.
          </p>
          <p>
            In July 2025, after completing his full term, Chirag walked out a free man. Rather than retiring, he immediately set up <strong>Crime Free Yuva</strong> to speak directly to youngsters, delivering raw, lived wisdom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('cfy_theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  });
  const [records, setRecords] = useState([]);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [introComplete, setIntroComplete] = useState(() => {
    return sessionStorage.getItem('cfy_intro_played') === 'true';
  });
  const [routeLoading, setRouteLoading] = useState(false);
  const routeLoaderTimerRef = useRef(null);
  const location = useLocation();
  const isFirstRender = useRef(true);

  const handleIntroComplete = () => {
    sessionStorage.setItem('cfy_intro_played', 'true');
    setIntroComplete(true);
  };

  // Show RouteLoader on every page navigation (skip the very first mount)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!introComplete) return; // Don't fire during intro animation

    setRouteLoading(true);
    if (routeLoaderTimerRef.current) clearTimeout(routeLoaderTimerRef.current);
    routeLoaderTimerRef.current = setTimeout(() => {
      setRouteLoading(false);
    }, 650); // Show for 650ms on each page switch

    return () => {
      if (routeLoaderTimerRef.current) clearTimeout(routeLoaderTimerRef.current);
    };
  }, [location.pathname]);

  // Load records from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('cfy_bookings');
      if (stored) {
        setRecords(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Failed to read bookings from local storage:", err);
    }
  }, []);

  // Initialize theme
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('cfy_theme') || 'dark';
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    } catch (err) {
      console.error("Failed to read theme preference from local storage:", err);
    }
  }, []);

  // Theme switcher
  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      localStorage.setItem('cfy_theme', nextTheme);
      if (nextTheme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    } catch (err) {
      console.error("Failed to write theme preference to local storage:", err);
    }
  };

  // Booking submit action
  const handleBookingSubmit = async (formData) => {
    const now = new Date();
    const istTime = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }) + " (IST)";
    
    const newRecord = {
      name: formData.name,
      whatsapp: formData.whatsapp,
      email: formData.email,
      organisation: formData.organisation,
      audienceType: formData.audienceType,
      audienceSize: formData.audienceSize || 'N/A',
      preferredDate: formData.preferredDate || 'N/A',
      message: formData.message || 'None',
      submittedAt: istTime
    };

    const updatedRecords = [newRecord, ...records];
    setRecords(updatedRecords);
    try {
      localStorage.setItem('cfy_bookings', JSON.stringify(updatedRecords));
    } catch (err) {
      console.error("Failed to save booking to local storage:", err);
    }

    let emailJsSuccess = false;
    if (window.emailjs && CONFIG.emailjs_public_key !== "YOUR_EMAILJS_PUBLIC_KEY") {
      try {
        window.emailjs.init(CONFIG.emailjs_public_key);
        
        const templateParams = {
          to_email: formData.email,
          user_name: formData.name,
          mobile: formData.whatsapp,
          organisation: formData.organisation || 'N/A',
          audience_type: formData.audienceType,
          audience_size: formData.audienceSize || 'N/A',
          preferred_date: formData.preferredDate || 'N/A',
          user_message: formData.message || 'None',
          google_form_url: CONFIG.google_form_url,
          whatsapp_number: CONFIG.whatsapp_number,
          submitted_at: istTime
        };

        const res = await window.emailjs.send(
          CONFIG.emailjs_service_id,
          CONFIG.emailjs_template_id,
          templateParams
        );
        
        if (res.status === 200) {
          emailJsSuccess = true;
        }
      } catch (err) {
        console.error("EmailJS transmission failure:", err);
      }
    } else {
      console.warn("EmailJS credentials missing. Registering local database record only.");
      await new Promise(r => setTimeout(r, 800));
      emailJsSuccess = true; 
    }

    return emailJsSuccess;
  };

  // SheetJS Excel export action
  const handleExportExcel = () => {
    try {
      if (!window.XLSX) {
        alert("Excel downloader library (SheetJS) is not loaded.");
        return;
      }
      
      const headers = ["#", "Name", "WhatsApp", "Email", "Organisation", "Audience Type", "Audience Size", "Preferred Date", "Submitted At", "Requirements"];
      const rows = records.map((r, i) => [
        i + 1,
        r.name,
        r.whatsapp,
        r.email,
        r.organisation,
        r.audienceType,
        r.audienceSize,
        r.preferredDate,
        r.submittedAt,
        r.message
      ]);

      const worksheet = window.XLSX.utils.aoa_to_sheet([headers, ...rows]);
      const workbook = window.XLSX.utils.book_new();
      window.XLSX.utils.book_append_sheet(workbook, worksheet, "CFY_Bookings");

      const dateStr = new Date().toISOString().slice(0, 10);
      window.XLSX.writeFile(workbook, `CrimeFreeYuva_Bookings_${dateStr}.xlsx`);
    } catch (err) {
      console.error("Excel generation failed:", err);
      alert("Export failed: " + err.message);
    }
  };

  // Auto scroll reveal animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const appStyle = {
    backgroundColor: 'var(--bg-base)',
    color: 'var(--text-body)',
    minHeight: '100vh',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  return (
    <div style={appStyle} className="app-root relative">
      {!introComplete && (
        <EntryAnimation onComplete={handleIntroComplete} />
      )}

      {/* Cinematic PageLoader — shows for 650ms on every page navigation */}
      <PageLoader isLoading={introComplete && routeLoading} />
      
      {/* High-performance Custom Mouse Cursor (mounted only after intro completes and placed outside any filter wrappers) */}
      {introComplete && <CustomCursor />}
      
      {/* Viewport root modals (placed outside filter container to ensure viewport centering on any scroll offset) */}
      {storyModalOpen && (
        <StoryModal isOpen={storyModalOpen} onClose={() => setStoryModalOpen(false)} />
      )}
      {selectedTopic && (
        <TopicModal topic={selectedTopic} onClose={() => setSelectedTopic(null)} />
      )}

      {/* Sticky Navbar (placed at root viewport layer to keep it fixed on top on scroll, bypassing filter containers) */}
      {introComplete && (
        <Navbar theme={theme} toggleTheme={handleToggleTheme} />
      )}
      
      <div className={introComplete ? 'content-visible' : 'content-hidden'}>
        <ScrollToTopOnRoute />
        
        {/* Styles Injection */}
        <style>{cssAnimations}</style>

        {/* Grid Overlay background */}
        <div className="grid-bg" />

        {/* Routes Wrapper */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home onOpenStoryModal={() => setStoryModalOpen(true)} onOpenTopicModal={(topic) => setSelectedTopic(topic)} whatsappNumber={CONFIG.whatsapp_number} />} />
            <Route path="/about" element={<About />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/seminars" element={<Seminars />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/audience" element={<Audience />} />
            <Route path="/booking" element={<Booking onSubmit={handleBookingSubmit} googleFormUrl={CONFIG.google_form_url} whatsappNumber={CONFIG.whatsapp_number} emailPrimary={CONFIG.email_primary} address={CONFIG.address} />} />
            <Route path="/contact" element={<Contact config={CONFIG} />} />
            <Route path="/admin" element={<AdminBookings records={records} onExportExcel={handleExportExcel} />} />
          </Routes>
        </main>

        {/* Footer details */}
        <Footer config={CONFIG} theme={theme} />



        {/* Floaters */}
        <WhatsAppButton whatsappNumber={CONFIG.whatsapp_number} />
        <ScrollToTop />
      </div>
    </div>
  );
}
