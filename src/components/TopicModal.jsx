import { useEffect } from 'react';

const TopicModal = ({ topic, onClose }) => {
  // Prevent background scrolling when open
  useEffect(() => {
    if (!topic) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [topic]);

  if (!topic) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop blur */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Box */}
      <div className="bg-bg-surface border border-border-custom max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl relative z-10 animate-modal-open text-left flex flex-col max-h-[85vh]">
        {/* Header bar */}
        <div className="p-6 border-b border-border-custom flex justify-between items-center bg-bg-card">
          <div className="flex items-center gap-3">
            <span className="text-3xl bg-bg-surface w-10 h-10 rounded-lg flex items-center justify-center border border-border-custom">
              {topic.icon}
            </span>
            <div>
              <span className="font-ui text-[9px] font-bold text-accent-gold uppercase tracking-widest">
                {topic.label}
              </span>
              <h3 className="font-ui text-base font-bold text-text-head uppercase tracking-wide">
                {topic.title}
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg bg-bg-surface border border-border-custom text-text-head hover:border-accent-red transition-colors hoverable cursor-none"
          >
            ✕
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6 font-body text-sm text-text-body">
          {/* Main story description */}
          <p className="leading-relaxed">
            {topic.modalDesc}
          </p>

          {/* Key warnings/details */}
          <div className="space-y-3">
            <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider">
              Critical Risk Factors
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              {topic.bulletPoints.map((pt, i) => (
                <li key={i} className="leading-relaxed">
                  <strong>{pt.title}:</strong> {pt.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Lived Lesson Advice box */}
          <div className="bg-accent-red-glow/30 border-l-4 border-accent-red p-4 rounded-r-xl">
            <p className="text-accent-red-light font-semibold font-ui uppercase text-[10px] tracking-wider mb-1">
              Chirag's Lived Lesson
            </p>
            <p className="text-xs leading-relaxed italic text-text-head">
              "{topic.livedLesson}"
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-border-custom bg-bg-card flex justify-end">
          <button 
            onClick={onClose}
            className="bg-accent-red hover:bg-accent-red-light text-white font-ui font-semibold text-xs py-2.5 px-6 rounded-lg transition-all hover:scale-[1.02] hoverable cursor-none"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicModal;
