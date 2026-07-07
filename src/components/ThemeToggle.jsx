import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-12 h-6 rounded-full bg-bg-surface border border-border-custom p-1 flex items-center justify-between relative hover:border-accent-red-light transition-colors hoverable"
    >
      <Sun className={`w-3.5 h-3.5 text-accent-gold transition-opacity duration-200 ${theme === 'light' ? 'opacity-100' : 'opacity-30'}`} />
      <Moon className={`w-3.5 h-3.5 text-accent-red transition-opacity duration-200 ${theme === 'dark' ? 'opacity-100' : 'opacity-30'}`} />
      <div 
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-accent-red transition-transform duration-200 ${
          theme === 'light' ? 'translate-x-6' : ''
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
