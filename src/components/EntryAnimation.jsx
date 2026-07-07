import { useEffect, useState, useRef, useMemo } from 'react';

export default function EntryAnimation({ onComplete }) {
  // Check sessionStorage on mount (safety check)
  useEffect(() => {
    if (sessionStorage.getItem('cfy_intro_played') === 'true') {
      onComplete();
    }
  }, [onComplete]);

  // Animation States
  const [showGrid, setShowGrid] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [statsFadingOut, setStatsFadingOut] = useState(false);
  const [showLogoScan, setShowLogoScan] = useState(false);
  const [showLogoShield, setShowLogoShield] = useState(false);
  const [showLogoText, setShowLogoText] = useState(false);
  const [logoPowerActive, setLogoPowerActive] = useState(false);
  const [exitActive, setExitActive] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [progressComplete, setProgressComplete] = useState(false);

  // Timeouts tracking ref
  const timeoutsRef = useRef([]);

  const addTimeout = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timeoutsRef.current.push(id);
    return id;
  };

  // Generate 20 floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      top: `${20 + Math.random() * 70}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${6 + Math.random() * 8}s`,
      drift: `${-30 + Math.random() * 60}px`,
    }));
  }, []);

  const taglineChars = useMemo(() => "AWARENESS IS FREEDOM".split(""), []);

  // Handle skip action immediately
  const handleSkip = () => {
    // Clear all pending timeouts
    timeoutsRef.current.forEach(clearTimeout);

    setProgressComplete(true);
    setExitActive(true);

    // Call onComplete after 1s exit blur fade
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  // Staggered timeline orchestrations
  useEffect(() => {
    if (sessionStorage.getItem('cfy_intro_played') === 'true') return;

    // Phase 2: Grid & Particles Awaken (400ms)
    addTimeout(() => setShowGrid(true), 400);

    // Phase 3: Tagline characters start typing (1000ms)
    addTimeout(() => setShowTagline(true), 1000);

    // Skip Button appears (1500ms)
    addTimeout(() => setShowSkip(true), 1500);

    // Tagline underline draws (1800ms)
    addTimeout(() => setShowUnderline(true), 1800);

    // Phase 4: Stats container reveal (2000ms)
    addTimeout(() => {
      setShowStats(true);
    }, 2000);

    // Stats + Tagline fade out (3200ms)
    addTimeout(() => {
      setStatsFadingOut(true);
    }, 3200);

    // Phase 5: Red CRT scan line travels (3400ms)
    addTimeout(() => {
      setShowLogoScan(true);
    }, 3400);

    // Shield Logo springs in (3700ms)
    addTimeout(() => {
      setShowLogoShield(true);
    }, 3700);

    // "CRIME FREE" text slides up (4100ms)
    addTimeout(() => {
      setShowLogoText(true);
    }, 4100);

    // Phase 6: Logo Swell / Power Moment (5200ms)
    addTimeout(() => {
      setLogoPowerActive(true);
    }, 5200);

    // Phase 7: Exit blur starts (5600ms)
    addTimeout(() => {
      setExitActive(true);
    }, 5600);

    // Final Completion (6600ms)
    addTimeout(() => {
      onComplete();
    }, 6600);

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [onComplete]);

  // Tab visibility changes handler (Prevents loader getting stuck when user switches tabs)
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        handleSkip();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <div 
      className={`entry-wrapper ${exitActive ? 'exit-blur-active' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#08090d',
        color: '#eef0f8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        cursor: 'none',
        userSelect: 'none',
      }}
    >
      {/* Styles Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@700;800&family=DM+Sans:wght@300;400&display=swap');

        .entry-wrapper {
          transition: filter 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .entry-wrapper.exit-blur-active {
          filter: blur(18px);
          opacity: 0;
          pointer-events: none;
        }

        .cinematic-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: 
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0;
          transition: opacity 0.8s ease;
          z-index: 1;
        }
        .cinematic-grid.active {
          opacity: 1;
        }

        .cinematic-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle, transparent 20%, rgba(0,0,0,0.6) 80%);
          opacity: 0.6;
          z-index: 2;
        }

        .cinematic-scanline-texture {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 6px 100%;
          opacity: 0.04;
          z-index: 3;
          animation: scanlineTexture 0.2s infinite linear;
        }

        @keyframes scanlineTexture {
          0% { background-position: 0 0; }
          100% { background-position: 0 4px; }
        }

        /* Particle drift keyframes */
        @keyframes particleDrift {
          0% { transform: translateY(0px); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-140px); opacity: 0; }
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: #e02020;
          border-radius: 50%;
          z-index: 2;
          animation: particleDrift linear infinite;
        }

        /* Tagline animations */
        @keyframes charReveal {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tagline-char {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #e02020;
          animation: charReveal 0.4s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
        }

        @keyframes lineDrawCenter {
          from { width: 0; }
          to { width: 180px; }
        }

        .underline-line {
          height: 1.5px;
          background-color: #e02020;
          margin: 12px auto 0;
          width: 0;
        }
        .underline-line.active {
          animation: lineDrawCenter 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Stats fade transitions */
        @keyframes statsFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes statsFadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-20px); }
        }

        .stats-wrapper {
          margin-top: 32px;
          display: flex;
          align-items: center;
          gap: 24px;
          opacity: 0;
        }
        .stats-wrapper.active {
          animation: statsFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .stats-wrapper.fading-out {
          animation: statsFadeOut 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .principle-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 140px;
        }
        .principle-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 12px;
          position: relative;
          box-shadow: 0 0 15px rgba(240, 165, 0, 0.1);
        }
        .principle-icon {
          font-size: 1.4rem;
        }
        .principle-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          color: #f0a500;
          letter-spacing: 0.05em;
          margin: 0;
          line-height: 1.1;
        }
        .principle-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.2;
        }

        .tagline-container.fading-out {
          animation: statsFadeOut 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Scan line travel */
        @keyframes scanLine {
          from { top: -2px; opacity: 1; }
          to { top: 100%; opacity: 0; }
        }
        .scanline-sweep {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #e02020, transparent);
          z-index: 10;
          animation: scanLine 0.6s linear forwards;
        }

        /* Shield Reveal scale keyframes */
        @keyframes shieldReveal {
          0% { opacity: 0; transform: scale(0.3); }
          70% { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* radial glow pulse */
        @keyframes glowPulse {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.5); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.4; }
        }

        .logo-image-container {
          position: relative;
          width: clamp(14rem, 40vw, 24rem);
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          filter: drop-shadow(0 0 16px rgba(224,32,32,0.55));
        }
        .logo-image-container.active {
          opacity: 1;
          animation: shieldReveal 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .logo-actual-img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .logo-red-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224,32,32,0.3) 0%, transparent 70%);
          pointer-events: none;
          z-index: -1;
          opacity: 0;
        }
        .logo-red-glow.active {
          animation: glowPulse 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Logo Power swell holds */
        @keyframes logoPowerSwell {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }
        .logo-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s ease;
        }
        .logo-group.swell-active {
          animation: logoPowerSwell 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes nameReveal {
          from { opacity: 0; transform: translateY(12px); filter: blur(3px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .cinematic-name-reveal {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-top: 16px;
          line-height: 1;
          opacity: 0;
          
          /* Cinematic bottom gradient fade effect */
          background: linear-gradient(to bottom, #eef0f8 50%, rgba(238,240,248,0.3) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .cinematic-name-reveal.active {
          animation: nameReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        .cinematic-sub-reveal {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          margin-top: 8px;
          opacity: 0;
        }
        .cinematic-sub-reveal.active {
          animation: nameReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
        }

        /* Skip Button */
        @keyframes skipButtonFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .skip-btn {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 6px;
          padding: 0.45rem 1rem;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          opacity: 0;
          z-index: 100;
        }
        .skip-btn.active {
          animation: skipButtonFadeIn 0.5s ease forwards;
        }
        .skip-btn:hover {
          color: rgba(255,255,255,0.7);
          border-color: rgba(224,32,32,0.5);
        }

        /* Progress bottom bar */
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .progress-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: rgba(255,255,255,0.08);
          z-index: 100;
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #e02020, #f0a500);
          width: 0%;
        }
        .progress-bar-fill.active {
          animation: progressFill 6s linear forwards;
        }
        .progress-bar-fill.complete {
          width: 100% !important;
        }

        /* Mobile Responsive Media Queries */
        @media (max-width: 640px) {
          .stats-wrapper {
            flex-direction: column !important;
            gap: 16px !important;
            margin-top: 24px !important;
          }
          .stats-wrapper > div[style*="width: 1px"] {
            width: 60px !important;
            height: 1px !important;
            margin: 4px 0 !important;
          }
          .principle-card {
            width: 200px !important;
          }
          .tagline-char {
            font-size: clamp(0.72rem, 3.2vw, 1rem) !important;
            letter-spacing: 0.22em !important;
          }
          .skip-btn {
            bottom: 1.5rem !important;
            right: 50% !important;
            transform: translateX(50%) !important;
            font-size: 0.65rem !important;
            padding: 0.35rem 0.85rem !important;
          }
          .logo-image-container {
            width: clamp(10rem, 50vw, 14rem) !important;
          }
          .cinematic-name-reveal {
            font-size: clamp(1.6rem, 6vw, 2.2rem) !important;
            margin-top: 12px !important;
            letter-spacing: 0.12em !important;
          }
          .cinematic-sub-reveal {
            font-size: 0.58rem !important;
            letter-spacing: 0.15em !important;
            margin-top: 6px !important;
            text-align: center !important;
            width: 90% !important;
          }
        }
      `}</style>

      {/* Grid Overlay background */}
      <div className={`cinematic-grid ${showGrid ? 'active' : ''}`} />

      {/* Vignette Overlay */}
      <div className="cinematic-vignette" />

      {/* CRT Scanline scan */}
      {logoPowerActive && <div className="cinematic-scanline-texture" />}

      {/* Sweep Scanner bar */}
      {showLogoScan && <div className="scanline-sweep" />}

      {/* Floating red particle dots */}
      {showGrid && particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            '--drift': p.drift
          }}
        />
      ))}

      {/* ────────────────────────────────────────────────────────
          TAGLINE AND STATS COLUMN
          ──────────────────────────────────────────────────────── */}
      {!statsFadingOut && (
        <div className={`tagline-container flex flex-col items-center ${statsFadingOut ? 'fading-out' : ''}`}>
          {/* Characters tagline writing */}
          {showTagline && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {taglineChars.map((char, i) => (
                <span
                  key={i}
                  style={{
                    animationDelay: `${i * 60}ms`,
                    animationFillMode: 'both',
                    whiteSpace: char === ' ' ? 'pre' : 'normal'
                  }}
                  className="tagline-char"
                >
                  {char}
                </span>
              ))}
            </div>
          )}

          {/* Tagline Red Line */}
          <div className={`underline-line ${showUnderline ? 'active' : ''}`} />

          {/* Attractive Value Cards */}
          {showStats && (
            <div className={`stats-wrapper ${showStats ? 'active' : ''} ${statsFadingOut ? 'fading-out' : ''}`}>
              <div className="principle-card">
                <div className="principle-icon-wrapper">
                  <span className="principle-icon">⚖️</span>
                </div>
                <h4 className="principle-title">Legal Awareness</h4>
                <p className="principle-desc">BNS & Boundaries</p>
              </div>

              <div style={{ height: '48px', width: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />

              <div className="principle-card">
                <div className="principle-icon-wrapper">
                  <span className="principle-icon">🧠</span>
                </div>
                <h4 className="principle-title">Mental Reform</h4>
                <p className="principle-desc">Impulse Control</p>
              </div>

              <div style={{ height: '48px', width: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />

              <div className="principle-card">
                <div className="principle-icon-wrapper">
                  <span className="principle-icon">🛡️</span>
                </div>
                <h4 className="principle-title">Youth Safety</h4>
                <p className="principle-desc">Consequence Wise</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ────────────────────────────────────────────────────────
          HERO LOGO SWEEP REVEAL (Phase 5)
          ──────────────────────────────────────────────────────── */}
      {statsFadingOut && (
        <div className={`logo-group ${logoPowerActive ? 'swell-active' : ''}`}>
          {/* Radial red glow burst behind the logo */}
          <div className={`logo-red-glow ${showLogoShield ? 'active' : ''}`} />

          {/* Actual logo image with scale spring-in reveal */}
          <div className={`logo-image-container ${showLogoShield ? 'active' : ''}`}>
            <img 
              src="/logo_dark.png" 
              alt="Crime Free Yuva Logo" 
              className="logo-actual-img"
            />
          </div>

          {/* Cinematic bottom-faded name reveal */}
          <div className={`cinematic-name-reveal ${showLogoText ? 'active' : ''}`}>
            CHIRAG RANA
          </div>
          
          <div className={`cinematic-sub-reveal ${showLogoText ? 'active' : ''}`}>
            Crime Awareness Speaker & Motivator
          </div>
        </div>
      )}

      {/* Skip Button */}
      {showSkip && (
        <button 
          onClick={handleSkip}
          className={`skip-btn ${showSkip ? 'active' : ''}`}
        >
          Skip Intro
        </button>
      )}

      {/* Progress timeline bar at bottom */}
      <div className="progress-container">
        <div className={`progress-bar-fill ${progressComplete ? 'complete' : 'active'}`} />
      </div>
    </div>
  );
}
