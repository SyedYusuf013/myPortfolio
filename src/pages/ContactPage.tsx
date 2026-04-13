import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Error", description: "Please fill all fields.", variant: "destructive" });
      return;
    }
    setSending(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 section-padding">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-sm font-mono text-primary mb-2">// contact</p>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground mb-12 max-w-lg">
              Have a project in mind or want to collaborate? Drop me a message and I'll get back to you soon.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Info */}
            <div className="md:col-span-2 space-y-6">
              {[
                { icon: Mail, label: "Email", value: "john@example.com" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              ].map((item, i) => (
                <AnimatedSection key={item.label} delay={i * 0.1}>
                  <div className="glass-card p-5 flex items-center gap-4 hover:glow transition-shadow duration-300">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Form */}
            <AnimatedSection delay={0.2} className="md:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                    placeholder="Your name"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                    placeholder="your@email.com"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm resize-none"
                    placeholder="Tell me about your project..."
                    maxLength={1000}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-50 transition-opacity"
                >
                  {sent ? (
                    <>
                      <CheckCircle size={18} /> Sent!
                    </>
                  ) : sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
