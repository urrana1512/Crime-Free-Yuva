import { useEffect, useState } from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';

const Contact = ({ config }) => {
  useEffect(() => {
    document.title = "Contact Us | Mr. Chirag Rana";
  }, []);

  const number = config?.whatsapp_number || "918469400794";
  const phone = config?.phone || "+91-84694-00794";
  const emailPrimary = config?.email_primary || "chiragrana3399@gmail.com";
  const emailSecondary = config?.email_secondary || "ckrana3986@gmail.com";
  const address = config?.address || "39-465, Parasnagar-3, Sola Road, Naranpura, Ahmedabad – 380063, Gujarat";

  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = () => {
    const err = {};
    if (!contactData.name.trim()) err.name = "Name is required";
    if (!contactData.email.trim()) {
      err.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) {
      err.email = "Invalid email format";
    }
    if (!contactData.message.trim()) err.message = "Message is required";

    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setSending(true);
    setSuccess(false);

    // Simulate sending delay
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setContactData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="py-32 bg-bg-base w-full min-h-screen text-left">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Get In Touch" title="Contact Chirag Rana" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12 items-start">
            {/* Left Columns: Channels & Map */}
            <div className="lg:col-span-6 space-y-8 reveal">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Channel 1 */}
                <div className="bg-bg-card border border-border-custom rounded-2xl p-6 shadow-md">
                  <span className="text-2xl bg-bg-surface w-10 h-10 rounded-lg flex items-center justify-center mb-4">💬</span>
                  <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider mb-1">WhatsApp & Call</h4>
                  <p className="font-body text-sm text-text-body font-medium">{phone}</p>
                  <a 
                    href={`https://wa.me/${number}?text=Hi%20Chirag%2C%20I%20have%20an%20inquiry.`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-ui text-[10px] text-accent-gold uppercase font-bold tracking-wider hover:text-accent-gold-light mt-3 block hoverable"
                  >
                    Send Message →
                  </a>
                </div>

                {/* Channel 2 */}
                <div className="bg-bg-card border border-border-custom rounded-2xl p-6 shadow-md">
                  <span className="text-2xl bg-bg-surface w-10 h-10 rounded-lg flex items-center justify-center mb-4">✉️</span>
                  <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider mb-1">Emails</h4>
                  <p className="font-body text-xs text-text-body leading-tight font-medium mb-1">{emailPrimary}</p>
                  <p className="font-body text-xs text-text-muted leading-tight">{emailSecondary}</p>
                </div>
              </div>

              {/* Address card */}
              <div className="bg-bg-card border border-border-custom rounded-2xl p-6 shadow-md flex gap-4">
                <span className="text-2xl bg-bg-surface w-10 h-10 rounded-lg flex items-center justify-center shrink-0">📍</span>
                <div>
                  <h4 className="font-ui text-xs font-bold text-text-head uppercase tracking-wider mb-1">Office Location</h4>
                  <p className="font-body text-sm text-text-body leading-relaxed">{address}</p>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="bg-bg-card border border-border-custom rounded-3xl p-4 shadow-lg overflow-hidden relative h-64 flex flex-col justify-between">
                <div className="absolute inset-0 bg-bg-surface/50 pointer-events-none flex flex-col items-center justify-center z-10 text-center p-6">
                  <span className="text-3xl mb-2">🗺️</span>
                  <p className="font-ui text-sm font-bold text-text-head uppercase">Ahmedabad, Gujarat, India</p>
                  <p className="font-body text-xs text-text-muted mt-1 max-w-xs leading-relaxed">
                    Parasnagar-3, Sola Road, Naranpura, Ahmedabad – 380063
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 bg-bg-card border border-border-custom hover:border-accent-red text-text-head text-xs font-ui font-semibold py-2 px-4 rounded-xl transition-all hoverable"
                  >
                    Open Google Maps
                  </a>
                </div>
                {/* Visual Map Graphic */}
                <div className="w-full h-full bg-bg-surface opacity-30 select-none pointer-events-none grid grid-cols-6 grid-rows-4 border-2 border-dashed border-border-custom">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border border-border-custom/40" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Contact/Inquiry Form */}
            <div className="lg:col-span-6 reveal-right">
              <div className="bg-bg-card border border-border-custom rounded-3xl p-8 shadow-2xl relative">
                <h3 className="font-ui text-xl font-bold text-text-head uppercase mb-1">Send An Inquiry</h3>
                <p className="font-body text-xs text-text-muted mb-8">Leave your message and we'll reply shortly.</p>

                {success && (
                  <div className="mb-6 bg-wa-green/10 border border-wa-green/30 text-wa-green rounded-xl p-4 text-xs font-body leading-relaxed">
                    ✅ <strong>Success!</strong> Your message has been sent. Thank you for connecting!
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">Your Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      value={contactData.name}
                      onChange={(e) => {
                        setContactData(prev => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors(prev => ({ ...prev, name: null }));
                      }}
                      className={`bg-bg-surface border ${errors.name ? 'border-accent-red' : 'border-border-custom'} hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head transition-all`}
                    />
                    {errors.name && <span className="text-[10px] text-accent-red mt-1">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">Email Address</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={contactData.email}
                      onChange={(e) => {
                        setContactData(prev => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors(prev => ({ ...prev, email: null }));
                      }}
                      className={`bg-bg-surface border ${errors.email ? 'border-accent-red' : 'border-border-custom'} hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head transition-all`}
                    />
                    {errors.email && <span className="text-[10px] text-accent-red mt-1">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col">
                    <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">Your Message</label>
                    <textarea
                      placeholder="Leave a message..."
                      rows={5}
                      value={contactData.message}
                      onChange={(e) => {
                        setContactData(prev => ({ ...prev, message: e.target.value }));
                        if (errors.message) setErrors(prev => ({ ...prev, message: null }));
                      }}
                      className={`bg-bg-surface border ${errors.message ? 'border-accent-red' : 'border-border-custom'} hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head transition-all resize-none min-h-[120px]`}
                    />
                    {errors.message && <span className="text-[10px] text-accent-red mt-1">{errors.message}</span>}
                  </div>

                  <button
                    onClick={handleSend}
                    disabled={sending}
                    className="w-full bg-accent-red hover:bg-accent-red-light disabled:bg-accent-red/50 text-white font-ui font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-accent-red-glow hover:scale-[1.01] active:scale-[0.99] transition-all mt-4 hoverable"
                  >
                    {sending ? 'Sending Message...' : '📨 Send Inquiry'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
