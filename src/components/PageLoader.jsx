import { useEffect, useState, useRef, useMemo } from 'react';

const LOADING_MESSAGES = [
  "Loading Crime Free Yuva...",
  "Preparing your awareness session...",
  "Chirag Rana's mission is loading...",
  "Empowering the next generation...",
  "One session can save a life...",
  "Awareness is your best shield...",
  "Building a crime-free tomorrow...",
  "Knowledge is the only real freedom...",
];

export default function PageLoader({ isLoading, message, progress }) {
  const [isVisible, setIsVisible] = useState(isLoading);
  const [isExiting, setIsExiting] = useState(false);
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [fadeMsg, setFadeMsg] = useState(true);

  const prevIsLoading = useRef(isLoading);
  const timeoutsRef = useRef([]);
  const messageIntervalRef = useRef(null);

  const addTimeout = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timeoutsRef.current.push(id);
    return id;
  };

  // Sync state transitions on isLoading toggle
  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
      setIsExiting(false);
    } else if (!isLoading && isVisible) {
      setIsExiting(true);
      addTimeout(() => {
        setIsVisible(false);
        setIsExiting(false);
      }, 800); // 800ms Exit duration
    }
    prevIsLoading.current = isLoading;

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [isLoading, isVisible]);

  // Handle message rotation when no custom message is provided
  useEffect(() => {
    if (!message && isLoading) {
      messageIntervalRef.current = setInterval(() => {
        setFadeMsg(false);
        addTimeout(() => {
          setCurrentMsgIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
          setFadeMsg(true);
        }, 300); // Wait for fade-out transition before updating index
      }, 2200);
    } else {
      if (messageIntervalRef.current) {
        clearInterval(messageIntervalRef.current);
      }
    }

    return () => {
      if (messageIntervalRef.current) {
        clearInterval(messageIntervalRef.current);
      }
    };
  }, [message, isLoading]);

  // Generate 18 drifting particles
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      top: `${10 + Math.random() * 80}%`,
      duration: `${8 + Math.random() * 8}s`,
      delay: `${Math.random() * 4}s`,
    }));
  }, []);

  if (!isVisible) return null;

  const currentMessage = message || LOADING_MESSAGES[currentMsgIndex];

  return (
    <div 
      className={`pageloader-root ${isExiting ? 'loader-exiting' : 'loader-active'}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Crime Free Yuva"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99998,
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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@600;700&family=DM+Sans:wght@300;400&display=swap');

        /* Root classes */
        .pageloader-root.loader-active {
          opacity: 1;
          filter: blur(0px);
          transition: opacity 0.4s ease-out, filter 0.4s ease-out;
        }
        .pageloader-root.loader-exiting {
          opacity: 0;
          filter: blur(16px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        /* Background Grid Diagonal drift */
        .loader-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridDrift 20s linear infinite;
        }

        @keyframes gridDrift {
          from { background-position: 0 0; }
          to   { background-position: 60px 60px; }
        }

        /* Vignette depth */
        .loader-vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%);
          pointer-events: none;
        }

        /* Corner brackets animations */
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.8; }
        }

        .corner-bracket {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: rgba(224, 32, 32, 0.4);
          border-width: 1.5px;
          border-style: solid;
          z-index: 2;
          animation: cornerPulse 2s ease-in-out infinite;
        }

        /* Particles Drift */
        @keyframes particleDrift {
          0%   { transform: translateY(0px) translateX(0px); opacity: 0; }
          10%  { opacity: 0.6; }
          50%  { transform: translateY(-60px) translateX(10px); opacity: 0.4; }
          90%  { opacity: 0.2; }
          100% { transform: translateY(-120px) translateX(-5px); opacity: 0; }
        }

        .loader-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: #e02020;
          border-radius: 50%;
          z-index: 1;
          animation: particleDrift linear infinite;
        }

        /* Round Loader Ring animations */
        @keyframes spinCw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinCcw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }

        .progress-svg-root {
          transform: rotate(-90deg);
          transform-origin: 110px 110px;
          filter: drop-shadow(0 0 12px rgba(224, 32, 32, 0.45));
        }

        .progress-ring-fill {
          transition: stroke-dashoffset 0.35s ease-out;
        }

        .progress-ring-fill.spinning {
          animation: spinCw 1.6s linear infinite;
          transform-origin: 110px 110px;
        }

        .dashed-circle-inner {
          animation: spinCcw 12s linear infinite;
          transform-origin: 110px 110px;
        }

        .loader-circle-wrapper {
          position: relative;
          width: 220px;
          height: 220px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
        }

        .logo-inner-img {
          width: 130px;
          height: 130px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .logo-inner-img img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(224, 32, 32, 0.4));
        }

        /* Loading Dots Indicator */
        @keyframes dotPulse {
          0%, 80%, 100% {
            transform: scale(0.6);
            background: rgba(224,32,32,0.3);
          }
          40% {
            transform: scale(1.2);
            background: #e02020;
            box-shadow: 0 0 8px rgba(224,32,32,0.7);
          }
        }
        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e02020;
        }
        .dot-1 { animation: dotPulse 1.4s 0.0s ease-in-out infinite; }
        .dot-2 { animation: dotPulse 1.4s 0.2s ease-in-out infinite; }
        .dot-3 { animation: dotPulse 1.4s 0.4s ease-in-out infinite; }

        /* Message reveal transitions */
        .message-reveal-block {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .message-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .message-fade-out {
          opacity: 0;
          transform: translateY(-8px);
        }

        /* Content Group scale in */
        @keyframes loaderEnter {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .loader-center-panel {
          animation: loaderEnter 0.6s 0.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Support prefers-reduced-motion fallback */
        @media (prefers-reduced-motion: reduce) {
          .loader-grid, .corner-bracket, .loader-particle, .dashed-ring-cw, .dashed-ring-ccw,
          .shield-svg-root, .chain-top, .chain-bottom, .flame-element, .breath-text-1, .breath-text-2,
          .breath-text-by, .progress-fill-bar.indeterminate, .shimmer-overlay, .pulse-dot {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            box-shadow: none !important;
          }
          .progress-fill-bar.indeterminate {
            width: 100% !important;
            left: 0 !important;
          }
        }
      `}</style>

      {/* Grid background overlay */}
      <div className="loader-grid" />

      {/* Vignette Overlay */}
      <div className="loader-vignette" />

      {/* Brackets Corners */}
      <div className="corner-bracket" style={{ top: '2rem', left: '2rem', borderRight: 'none', borderBottom: 'none' }} />
      <div className="corner-bracket" style={{ top: '2rem', right: '2rem', borderLeft: 'none', borderBottom: 'none' }} />
      <div className="corner-bracket" style={{ bottom: '2rem', left: '2rem', borderRight: 'none', borderTop: 'none' }} />
      <div className="corner-bracket" style={{ bottom: '2rem', right: '2rem', borderLeft: 'none', borderTop: 'none' }} />

      {/* Red drifting dots */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="loader-particle"
          style={{
            left: p.left,
            top: p.top,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Center Panel contents */}
      <div className="loader-center-panel">
        
        {/* Circular Loader surrounding the Logo */}
        <div className="loader-circle-wrapper">
          <svg width="220" height="220" viewBox="0 0 220 220" className="progress-svg-root">
            <defs>
              <linearGradient id="pageLoaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e02020" />
                <stop offset="100%" stopColor="#f0a500" />
              </linearGradient>
            </defs>

            {/* Inner dashed ring */}
            <circle cx="110" cy="110" r="82" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 6" fill="none" className="dashed-circle-inner" />

            {/* Outer track ring */}
            <circle cx="110" cy="110" r="90" stroke="rgba(255,255,255,0.06)" strokeWidth="4.5" fill="none" />

            {/* Progress Fill Circle */}
            <circle 
              cx="110" 
              cy="110" 
              r="90" 
              stroke="url(#pageLoaderGradient)" 
              strokeWidth="4.5" 
              strokeLinecap="round" 
              fill="none" 
              strokeDasharray="565.48" 
              strokeDashoffset={progress === undefined ? 376.99 : 565.48 - (565.48 * Math.min(Math.max(progress, 0), 100)) / 100} 
              className={`progress-ring-fill ${progress === undefined ? "spinning" : ""}`} 
            />
          </svg>

          {/* Centered Brand Logo */}
          <div className="logo-inner-img">
            <img src="/logo_dark.png" alt="Crime Free Yuva Logo" />
          </div>
        </div>

        {/* Percentage text in determinate mode */}
        {progress !== undefined && (
          <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#f0a500', letterSpacing: '0.1em' }}>
              {Math.round(Math.min(Math.max(progress, 0), 100))}%
            </span>
          </div>
        )}

        {/* Dynamic tips rotating text */}
        <div style={{ marginTop: '1.4rem', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p 
            className={`message-reveal-block ${fadeMsg ? 'message-fade-in' : 'message-fade-out'}`}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.08em',
              textAlign: 'center',
              maxWidth: '280px',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {currentMessage}
          </p>
        </div>

        {/* Pulsing Dots Indicator */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '1.2rem', justifyContent: 'center' }}>
          <div className="pulse-dot dot-1" />
          <div className="pulse-dot dot-2" />
          <div className="pulse-dot dot-3" />
        </div>
      </div>

      {/* Bottom Tagline watermark */}
      <div 
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: 0,
          right: 0,
          fontFamily: 'Syne, sans-serif',
          fontWeight: 600,
          fontSize: '0.65rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.15)',
          textAlign: 'center',
          zIndex: 3,
        }}
      >
        AWARENESS IS FREEDOM
      </div>
    </div>
  );
}
