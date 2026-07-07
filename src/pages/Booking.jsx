import { useEffect, useState } from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import PageLoader from '../components/PageLoader';

const Booking = ({ onSubmit, googleFormUrl, whatsappNumber, emailPrimary, address }) => {
  useEffect(() => {
    document.title = "Book a Session | Crime Free Yuva";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    organisation: '',
    audienceType: 'School Students',
    audienceSize: '',
    preferredDate: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.whatsapp.trim()) errors.whatsapp = "WhatsApp number is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) errors.email = "Invalid email format";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleFormClickSubmit = async () => {
    if (!validateForm()) return;
    setSubmitting(true);
    setSubmitStatus(null);

    // Run submit + enforce a minimum 3-second loader display for form submission
    const [isSuccess] = await Promise.all([
      onSubmit(formData),
      new Promise(r => setTimeout(r, 3000)), // minimum 3s so loader is fully visible
    ]);

    setSubmitting(false);
    if (isSuccess) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        whatsapp: '',
        email: '',
        organisation: '',
        audienceType: 'School Students',
        audienceSize: '',
        preferredDate: '',
        message: ''
      });
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <PageTransition>
      <div className="py-32 bg-bg-surface w-full min-h-screen text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Context Details */}
          <div className="lg:col-span-5 flex flex-col justify-between reveal">
            <div>
              <span className="font-ui text-xs font-bold text-accent-red uppercase tracking-widest mb-2 inline-block">Session Requests</span>
              <h2 className="font-display text-4xl md:text-6xl text-text-head mb-6 uppercase tracking-wide">
                Book Chirag Rana
              </h2>
              <p className="font-body text-base text-text-body mb-8 leading-relaxed">
                Bring India's most unique crime awareness motivator to your campus. Complete this request form to register your booking locally. After submitting, please complete the detailed Google Form questionnaire so we can prepare specialized seminar topics for your students.
              </p>

              {/* Side buttons */}
              <div className="space-y-3 mb-8">
                <a
                  href={`https://wa.me/${whatsappNumber || "918469400794"}?text=Hi%20Chirag%2C%20I%20want%20to%20book%20a%20Crime%20Free%20Yuva%20session.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-bg-card border border-border-custom rounded-xl p-4 hover:border-wa-green transition-all group hoverable"
                >
                  <div className="w-10 h-10 rounded-full bg-wa-green/20 text-wa-green flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-ui text-[10px] text-text-muted uppercase tracking-wider font-bold">Quick WhatsApp</p>
                    <p className="font-ui text-sm font-bold text-text-head group-hover:text-wa-green transition-colors">wa.me/{whatsappNumber || "918469400794"}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${emailPrimary || "chiragrana3399@gmail.com"}`}
                  className="flex items-center gap-3 bg-bg-card border border-border-custom rounded-xl p-4 hover:border-accent-red transition-all group hoverable"
                >
                  <div className="w-10 h-10 rounded-full bg-accent-red-glow text-accent-red flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-ui text-[10px] text-text-muted uppercase tracking-wider font-bold">Direct Email</p>
                    <p className="font-ui text-sm font-bold text-text-head group-hover:text-accent-red transition-colors">{emailPrimary || "chiragrana3399@gmail.com"}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 bg-bg-card border border-border-custom rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-ui text-[10px] text-text-muted uppercase tracking-wider font-bold">Address</p>
                    <p className="font-body text-xs text-text-head leading-snug">{address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="font-ui text-[9px] font-bold text-text-muted uppercase tracking-widest block mb-2">Simulated Dashboard Access:</span>
              <a href="/admin" className="font-ui text-xs font-bold text-accent-gold hover:text-accent-gold-light border-b border-dashed border-accent-gold hoverable">
                🔑 Visit Submissions Logs (Admin Console)
              </a>
            </div>
          </div>

          {/* Right Column: Premium Booking Form */}
          <div className="lg:col-span-7 reveal-right">
            <div className="bg-bg-card border border-border-custom rounded-3xl p-8 shadow-2xl relative">
              <h3 className="font-ui text-xl font-bold text-text-head uppercase mb-1">Session Booking Request</h3>
              <p className="font-body text-xs text-text-muted mb-8">Takes 2 minutes · Local database confirmation</p>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-wa-green/10 border border-wa-green/30 text-wa-green rounded-xl p-5 text-sm font-body leading-relaxed">
                  <p className="font-ui font-bold text-base mb-2">✅ Booking Registered Successfully!</p>
                  <p className="mb-4">Thank you. Please complete the detailed booking questionnaire on Google Forms to confirm your topic segments:</p>
                  <a
                    href={googleFormUrl || "https://forms.gle/YOUR_GOOGLE_FORM_LINK"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-wa-green hover:bg-wa-green/80 text-white font-ui font-bold px-5 py-2.5 rounded-xl uppercase tracking-wider transition-all hover:scale-[1.02] hoverable shadow"
                  >
                    👉 Complete Detailed Booking Form
                  </a>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 bg-accent-red-glow border border-accent-red/30 text-accent-red rounded-xl p-4 text-xs font-body leading-relaxed">
                  ❌ <strong>System Error!</strong> Booking request logged in browser databases, but live email sync failed. Please connect with Chirag via WhatsApp.
                </div>
              )}

              <div className="space-y-4">
                {/* Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">Full Name*</label>
                    <input
                      type="text"
                      placeholder="Chirag Patel"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`bg-bg-surface border ${formErrors.name ? 'border-accent-red' : 'border-border-custom'} hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head transition-all`}
                    />
                    {formErrors.name && <span className="text-[10px] text-accent-red mt-1">{formErrors.name}</span>}
                  </div>
                  <div className="flex flex-col">
                    <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">WhatsApp Number*</label>
                    <input
                      type="tel"
                      placeholder="+91-XXXXX-XXXXX"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className={`bg-bg-surface border ${formErrors.whatsapp ? 'border-accent-red' : 'border-border-custom'} hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head transition-all`}
                    />
                    {formErrors.whatsapp && <span className="text-[10px] text-accent-red mt-1">{formErrors.whatsapp}</span>}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">Email Address*</label>
                  <input
                    type="email"
                    placeholder="name@institution.org"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`bg-bg-surface border ${formErrors.email ? 'border-accent-red' : 'border-border-custom'} hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head w-full transition-all`}
                  />
                  {formErrors.email && <span className="text-[10px] text-accent-red mt-1">{formErrors.email}</span>}
                </div>

                {/* Org & Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">Organisation / Institution</label>
                    <input
                      type="text"
                      placeholder="LD College of Engineering"
                      value={formData.organisation}
                      onChange={(e) => handleInputChange('organisation', e.target.value)}
                      className="bg-bg-surface border border-border-custom hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">Audience Type</label>
                    <select
                      value={formData.audienceType}
                      onChange={(e) => handleInputChange('audienceType', e.target.value)}
                      className="bg-bg-surface border border-border-custom hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head transition-all cursor-none"
                    >
                      <option value="School Students">School Students</option>
                      <option value="College Students">College Students</option>
                      <option value="Corporate Employees">Corporate Employees</option>
                      <option value="Community / RWA">Community / RWA</option>
                      <option value="Women's Group">Women's Group</option>
                      <option value="NGO / Correction Home">NGO / Correction Home</option>
                      <option value="Government Body">Government Body</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Size & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">Expected Audience Size</label>
                    <input
                      type="number"
                      placeholder="250"
                      value={formData.audienceSize}
                      onChange={(e) => handleInputChange('audienceSize', e.target.value)}
                      className="bg-bg-surface border border-border-custom hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">Preferred Session Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      className="bg-bg-surface border border-border-custom hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head w-full transition-all cursor-none"
                    />
                  </div>
                </div>

                {/* Requirements */}
                <div className="flex flex-col">
                  <label className="font-ui text-[10px] text-text-muted uppercase tracking-wider mb-1.5 font-bold">Message / Requirements</label>
                  <textarea
                    placeholder="Tell us about the issues you would like Chirag to highlight..."
                    value={formData.message}
                    rows={4}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-bg-surface border border-border-custom hover:border-accent-red focus:border-accent-red focus:outline-none rounded-xl p-3 text-sm text-text-head transition-all resize-none min-h-[100px]"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleFormClickSubmit}
                  disabled={submitting}
                  className="w-full bg-accent-red hover:bg-accent-red-light disabled:bg-accent-red/50 text-white font-ui font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-accent-red-glow hover:scale-[1.01] active:scale-[0.99] transition-all mt-4 hoverable"
                >
                  {submitting ? 'Registering Booking...' : '📨 Send Booking Request'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full PageLoader on form submission — stays for minimum 3 seconds */}
      <PageLoader
        isLoading={submitting}
        message="Sending your booking request to Chirag Rana..."
      />
    </PageTransition>
  );
};

export default Booking;
