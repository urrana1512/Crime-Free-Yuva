import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 left-6 w-11 h-11 rounded-full bg-bg-card border border-border-custom text-text-head flex items-center justify-center z-[9000] shadow-lg hover:border-accent-red hover:scale-110 transition-all cursor-none hoverable"
    >
      <ChevronUp className="w-5 h-5 text-accent-red" />
    </button>
  );
};

export default ScrollToTop;
