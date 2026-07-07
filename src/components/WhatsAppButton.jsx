import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({ whatsappNumber }) => {
  const number = whatsappNumber || "918469400794";
  return (
    <a
      href={`https://wa.me/${number}?text=Hi%20Chirag%2C%20I%20want%20to%20book%20a%20Crime%20Free%20Yuva%20session.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Chirag Rana on WhatsApp"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-wa-green text-white flex items-center justify-center z-[9000] shadow-2xl hover:scale-110 active:scale-95 transition-all animate-pulse-wa hoverable"
      style={{
        backgroundColor: 'var(--whatsapp-green)'
      }}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
