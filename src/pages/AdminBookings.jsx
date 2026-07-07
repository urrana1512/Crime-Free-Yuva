import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';

const AdminBookings = ({ records, onExportExcel }) => {
  useEffect(() => {
    document.title = "Admin Booking Submissions | Crime Free Yuva";
  }, []);

  return (
    <PageTransition>
      <div className="py-32 bg-bg-base w-full min-h-screen text-left">
        <div className="max-w-7xl mx-auto px-6">
          <span className="font-ui text-[10px] font-bold text-accent-gold uppercase tracking-widest mb-1.5 inline-block">Admin Console</span>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-text-head uppercase">Booking Submissions</h2>
              <p className="font-body text-xs text-text-muted mt-1">Review the list of booking submissions stored locally in this browser.</p>
            </div>

            {records.length > 0 && (
              <button
                onClick={onExportExcel}
                className="border border-accent-gold hover:bg-accent-gold/10 text-accent-gold text-xs font-ui font-semibold py-2 px-5 rounded-lg transition-colors inline-flex items-center gap-2 hoverable"
              >
                📥 Export to Excel
              </button>
            )}
          </div>

          {records.length === 0 ? (
            <div className="bg-bg-card border border-border-custom rounded-2xl p-12 text-center flex flex-col items-center justify-center">
              <span className="text-4xl mb-4">📋</span>
              <p className="font-ui text-sm font-bold text-text-head uppercase">No submissions yet.</p>
              <p className="font-body text-xs text-text-muted max-w-sm mt-1 text-center">
                Booking requests submitted via the /booking page form will appear here after the first registration.
              </p>
            </div>
          ) : (
            <div className="bg-bg-card border border-border-custom rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="bg-bg-surface border-b border-border-custom font-ui text-[10px] text-text-head font-bold uppercase tracking-wider">
                      <th className="px-4 py-3">#</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">WhatsApp</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Organisation</th>
                      <th className="px-4 py-3">Audience Type</th>
                      <th className="px-4 py-3">Preferred Date</th>
                      <th className="px-4 py-3 text-right">Submitted At</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-custom font-body text-xs text-text-body">
                    {records.map((rec, i) => (
                      <tr key={i} className="hover:bg-bg-card-h/40 transition-colors">
                        <td className="px-4 py-3 font-semibold text-text-head">{i + 1}</td>
                        <td className="px-4 py-3 font-medium text-text-head">{rec.name}</td>
                        <td className="px-4 py-3">{rec.whatsapp}</td>
                        <td className="px-4 py-3">{rec.email}</td>
                        <td className="px-4 py-3">{rec.organisation || 'N/A'}</td>
                        <td className="px-4 py-3">
                          <span className="bg-bg-surface border border-border-custom px-2 py-0.5 rounded text-[10px] text-text-head font-semibold uppercase">
                            {rec.audienceType}
                          </span>
                        </td>
                        <td className="px-4 py-3">{rec.preferredDate || 'N/A'}</td>
                        <td className="px-4 py-3 text-right text-text-muted">{rec.submittedAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default AdminBookings;
