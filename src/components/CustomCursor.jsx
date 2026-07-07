import { useEffect, useRef } from 'react';

/**
 * CustomCursor — A high-performance custom mouse cursor component.
 * Uses requestAnimationFrame and direct DOM updates via ref to avoid React state re-renders,
 * eliminating cursor lagging, jumping, and position-transition delay issues.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isVisible = false;
    let isHoveringInput = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isVisible) {
        isVisible = true;
        if (!isHoveringInput) {
          dot.style.opacity = '1';
          ring.style.opacity = '1';
        }
      }

      // Position the dot instantly
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate3d(-50%, -50%, 0)`;
    };

    const onMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Hover styles for links/buttons
    const onMouseEnterLink = () => {
      ring.classList.add('cursor-hover-active');
    };
    
    const onMouseLeaveLink = () => {
      ring.classList.remove('cursor-hover-active');
    };

    // Hide custom cursor inside text inputs/textareas to let native text caret work
    const onMouseEnterInput = () => {
      isHoveringInput = true;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseLeaveInput = () => {
      isHoveringInput = false;
      if (isVisible) {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const addHoverListeners = () => {
      // Find normal hoverable elements
      const links = document.querySelectorAll('a, button, select, [role="button"], .hoverable');
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });

      // Find inputs and textareas
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInput);
        el.removeEventListener('mouseleave', onMouseLeaveInput);
        el.addEventListener('mouseenter', onMouseEnterInput);
        el.addEventListener('mouseleave', onMouseLeaveInput);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Smooth trailing interpolation (LERP) loop for the outer ring
    let animationFrameId;
    const tick = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      
      // Interpolate position smoothly
      ringX += dx * 0.16;
      ringY += dy * 0.16;
      
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate3d(-50%, -50%, 0)`;
      
      animationFrameId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Styled custom cursor elements */
        .cursor-dot {
          width: 8px;
          height: 8px;
          background-color: var(--red);
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.25s ease;
          will-change: transform, opacity;
        }

        .cursor-ring {
          width: 38px;
          height: 38px;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.25s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
          will-change: transform, opacity;
        }

        /* Active hover styling class injected dynamically */
        .cursor-ring.cursor-hover-active {
          width: 48px !important;
          height: 48px !important;
          background-color: var(--red-glow) !important;
          border-color: var(--red-light) !important;
        }
      `}</style>
      <div
        ref={dotRef}
        className="cursor-dot fixed pointer-events-none rounded-full z-[999999] hidden md:block"
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed pointer-events-none rounded-full z-[999998] hidden md:block border border-accent-red"
      />
    </>
  );
};

export default CustomCursor;
