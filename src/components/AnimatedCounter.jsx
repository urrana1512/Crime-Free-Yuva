import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ target, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const cleanTarget = target.toString().replace(/,/g, '').replace(/\+/g, '');
    const end = parseInt(cleanTarget, 10);
    if (isNaN(end)) {
      setCount(target);
      return;
    }

    const stepTime = Math.max(Math.floor(duration / 30), 15);
    const step = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  const formatNumber = (num) => {
    if (typeof num === 'string') return num;
    const formatted = num.toLocaleString();
    return target.toString().endsWith('+') ? `${formatted}+` : formatted;
  };

  return <span ref={elementRef}>{formatNumber(count)}</span>;
};

export default AnimatedCounter;
