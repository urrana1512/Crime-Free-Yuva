import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = theme === 'light' ? '/logo_light.png' : '/logo_dark.png';

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/journey', label: 'Journey' },
    { path: '/seminars', label: 'Seminars' },
    { path: '/impact', label: 'Impact' },
    { path: '/audience', label: 'Audience' },
    { path: '/booking', label: 'Booking' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-nav-bg border-b border-border-custom shadow-lg backdrop-blur-md py-1.5' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group hoverable">
          <img src={logoSrc} alt="Crime Free Yuva Logo" className="w-14 h-14 object-contain" />
          <div className="flex flex-col text-left">
            <span className="font-ui text-text-head font-bold text-lg leading-none uppercase tracking-wide group-hover:text-accent-red transition-colors flex items-center gap-1.5">
              <span>CRIME FREE</span>
              <span className="font-logo-yuva text-xl text-accent-red font-bold leading-none">युवा</span>
            </span>
            <span className="font-body text-text-muted text-[10px] tracking-widest uppercase">
              by Chirag Rana
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `font-ui text-xs uppercase tracking-wider transition-colors duration-200 relative py-1 hoverable ${
                isActive 
                  ? 'text-accent-red font-bold' 
                  : 'text-text-body hover:text-text-head'
              }`}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-red shadow-[0_0_8px_var(--red)] animate-fade-in" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right Nav Utilities */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <Link
            to="/booking"
            className="bg-accent-red hover:bg-accent-red-light text-white text-xs font-ui font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 shadow-md shadow-accent-red-glow hover:scale-[1.03] hoverable"
          >
            BOOK SESSION
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-1.5 rounded-lg bg-bg-surface border border-border-custom text-text-head hover:border-accent-red transition-colors hoverable"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-bg-card/95 border-b border-border-custom backdrop-blur-lg py-6 z-40 animate-fade-in shadow-2xl">
          <div className="flex flex-col items-center gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `font-ui text-sm uppercase tracking-wider transition-all duration-200 py-1 hoverable ${
                  isActive ? 'text-accent-red font-bold' : 'text-text-body hover:text-text-head'
                }`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 bg-accent-red hover:bg-accent-red-light text-white text-sm font-ui font-bold py-3 px-8 rounded-xl tracking-wider hover:scale-[1.03] hoverable"
            >
              BOOK SESSION NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
