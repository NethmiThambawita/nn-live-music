import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const INSTRUMENTS = ['Saxophone', 'Violin', 'Vocals & Guitar', 'Flute'];

export default function Contact() {
  const [selected, setSelected] = useState([]);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', venue: '', date: '', message: '' });

  const toggle = (inst) =>
    setSelected((s) => (s.includes(inst) ? s.filter((i) => i !== inst) : [...s, inst]));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 bg-[var(--stage-2)]">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--gold)] mb-4">Booking</p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--ink)]">
            Bring <span className="text-shimmer">Live Music</span> to Your Venue
          </h2>
          <p className="mt-5 text-[var(--ink-dim)] max-w-xl mx-auto">
            Hotels, resorts and event planners &mdash; tell us about your date and
            we&rsquo;ll tailor the perfect act.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4">
              <Mail className="text-[var(--gold)] mt-1" size={20} />
              <div>
                <p className="text-sm text-[var(--ink-dim)]">Email</p>
                <a
                  href="mailto:kennathl@gmail.com"
                  className="text-[var(--ink)] hover:text-[var(--gold-bright)] transition-colors"
                >
                  kennathl@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-[var(--gold)] mt-1" size={20} />
              <div>
                <p className="text-sm text-[var(--ink-dim)]">Phone / WhatsApp</p>
                <a
                  href="https://wa.me/94742303418"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--ink)] hover:text-[var(--gold-bright)] transition-colors"
                >
                  +94 74 230 3418
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-[var(--gold)] mt-1" size={20} />
              <div>
                <p className="text-sm text-[var(--ink-dim)]">Based in</p>
                <p className="text-[var(--ink)]">Southern &amp; Eastern Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 space-y-5"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-3">
                <CheckCircle2 className="text-[var(--gold-bright)]" size={40} />
                <p className="font-display text-2xl text-[var(--ink)]">Thank you!</p>
                <p className="text-[var(--ink-dim)] text-sm">
                  We&rsquo;ve received your enquiry and will be in touch shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-[var(--ink-dim)] mb-2">
                      Name
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-2.5 text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]/60"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-[var(--ink-dim)] mb-2">
                      Hotel / Venue
                    </label>
                    <input
                      value={form.venue}
                      onChange={(e) => setForm({ ...form, venue: e.target.value })}
                      className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-2.5 text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]/60"
                      placeholder="Venue name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wide text-[var(--ink-dim)] mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-2.5 text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]/60"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wide text-[var(--ink-dim)] mb-2">
                    Instruments of Interest
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INSTRUMENTS.map((inst) => (
                      <button
                        type="button"
                        key={inst}
                        onClick={() => toggle(inst)}
                        className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
                          selected.includes(inst)
                            ? 'bg-[var(--gold)] text-[#1a1206] border-[var(--gold)]'
                            : 'border-white/15 text-[var(--ink-dim)] hover:border-[var(--gold)]/50'
                        }`}
                      >
                        {inst}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wide text-[var(--ink-dim)] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-2.5 text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]/60 resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[var(--brass)] to-[var(--gold-bright)] px-8 py-3 text-sm md:text-base font-medium text-[#1a1206] hover:shadow-[0_0_30px_rgba(232,185,105,0.4)] transition-shadow"
                >
                  Send Enquiry
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
