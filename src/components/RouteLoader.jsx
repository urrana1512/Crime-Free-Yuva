import { useEffect, useState } from 'react';

/**
 * RouteLoader — Cinematic circular spinner for page navigation transitions.
 * Shows on every route change for ~600ms then fades out.
 * Props:
 *   isLoading: boolean
 */
export default function RouteLoader({ isLoading }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let exitTimer = null;
    let hideTimer = null;

    if (isLoading) {
      setIsExiting(false);
      setIsVisible(true);
    } else if (!isLoading && isVisible) {
      // Start exit animation
      setIsExiting(true);
      // After 400ms exit animation, remove from DOM
      hideTimer = setTimeout(() => {
        setIsVisible(false);
        setIsExiting(false);
      }, 400);
    }

    return () => {
      if (exitTimer) clearTimeout(exitTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [isLoading, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-label="Navigating..."
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99997,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(8, 9, 13, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        transition: isExiting ? 'opacity 0.4s ease-out, backdrop-filter 0.4s ease-out' : 'opacity 0.2s ease-in',
        opacity: isExiting ? 0 : 1,
        pointerEvents: isExiting ? 'none' : 'all',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@300;400&display=swap');

        /* Outer ring spinning */
        @keyframes spinOuter {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        /* Inner ring reverse spin */
        @keyframes spinInner {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        /* Center shield pulse */
        @keyframes centerPulse {
          0%, 100% { transform: scale(0.9); opacity: 0.7; }
          50%       { transform: scale(1.1); opacity: 1; }
        }
        /* Dot orbit */
        @keyframes orbitDot {
          from { transform: rotate(0deg) translateX(32px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(32px) rotate(-360deg); }
        }
        /* Red trailing orbit dot */
        @keyframes orbitDotRed {
          from { transform: rotate(180deg) translateX(32px) rotate(-180deg); }
          to   { transform: rotate(540deg) translateX(32px) rotate(-540deg); }
        }
        /* Loading text pulse */
        @keyframes textPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.9; }
        }
        /* Shimmer for ring */
        @keyframes ringShimmer {
          0%, 100% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 20; }
        }
        /* Reduce motion fallback */
        @media (prefers-reduced-motion: reduce) {
          .route-loader-spinner-outer,
          .route-loader-spinner-inner,
          .route-loader-orbit-dot,
          .route-loader-orbit-dot-red,
          .route-loader-center,
          .route-loader-text { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      {/* Main spinner container */}
      <div style={{ position: 'relative', width: '90px', height: '90px' }}>
        
        {/* Outer dashed ring — clockwise */}
        <svg
          className="route-loader-spinner-outer"
          width="90" height="90"
          viewBox="0 0 90 90"
          style={{
            position: 'absolute',
            inset: 0,
            animation: 'spinOuter 1.2s linear infinite',
          }}
        >
          <circle
            cx="45" cy="45" r="40"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="60 195"
          />
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e02020" />
              <stop offset="100%" stopColor="#f0a500" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner dashed ring — counter-clockwise */}
        <svg
          className="route-loader-spinner-inner"
          width="66" height="66"
          viewBox="0 0 66 66"
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            animation: 'spinInner 1.8s linear infinite',
          }}
        >
          <circle
            cx="33" cy="33" r="28"
            fill="none"
            stroke="rgba(240,165,0,0.35)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="6 10"
          />
        </svg>

        {/* Orbiting gold dot */}
        <div
          className="route-loader-orbit-dot"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#f0a500',
            boxShadow: '0 0 8px rgba(240,165,0,0.8)',
            marginTop: '-3.5px',
            marginLeft: '-3.5px',
            animation: 'orbitDot 1.2s linear infinite',
            transformOrigin: '3.5px 3.5px',
          }}
        />

        {/* Orbiting red dot (180 degrees offset) */}
        <div
          className="route-loader-orbit-dot-red"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: '#e02020',
            boxShadow: '0 0 6px rgba(224,32,32,0.9)',
            marginTop: '-2.5px',
            marginLeft: '-2.5px',
            animation: 'orbitDotRed 1.2s linear infinite',
            transformOrigin: '2.5px 2.5px',
          }}
        />

        {/* Center logo mark — shield shape SVG */}
        <div
          className="route-loader-center"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'centerPulse 2s ease-in-out infinite',
          }}
        >
          <svg width="26" height="30" viewBox="0 0 26 30" fill="none">
            <path
              d="M 13,2 L 24,7 L 24,18 C 24,25 13,29 13,29 C 13,29 2,25 2,18 L 2,7 Z"
              stroke="#e02020"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="rgba(224,32,32,0.08)"
            />
            <path
              d="M 13,14 C 14.2,14 15.2,15 14.9,16.4 C 14.6,18.1 12.4,20 11.4,20.8 C 12,19.8 13.2,18.4 12.9,17.4 C 12.7,16.7 12,17 11.7,17.7 C 11.3,18.5 11.3,19.5 12,20.5 C 10.5,19.5 10.8,16.7 12,15.2 C 12.3,14.5 12.9,14 13,14 Z"
              fill="#f0a500"
            />
          </svg>
        </div>
      </div>

      {/* "Loading..." text label */}
      <p
        className="route-loader-text"
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 600,
          fontSize: '0.65rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.45)',
          marginTop: '20px',
          animation: 'textPulse 1.5s ease-in-out infinite',
        }}
      >
        Loading...
      </p>
    </div>
  );
}
