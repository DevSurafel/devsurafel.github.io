import React, { useState } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { Phone, Mail, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 7069717408', href: 'tel:+917265991971' },
  { icon: Mail, label: 'Email', value: 'surapheldiriba@gmail.com', href: 'mailto:surafelamdiriba@gmail.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/DevSurafel', href: 'http://github.com/DevSurafel' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/Surafel-Diriba', href: 'http://linkedin.com/in/Surafel-Diriba' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="py-20">
      <h2 className="section-title animated-underline">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {contactInfo.map((item) => (
            <div key={item.label} className="contact-card">
              <item.icon className="w-6 h-6 text-primary" />
              <div>
                <p className="text-foreground font-medium">{item.label}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
          {status && (
            <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              {status.message}
            </div>
          )}
          <input 
            type="text" 
            placeholder="Name" 
            required 
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            className="w-full px-4 py-3 rounded-lg bg-muted text-foreground border border-border focus:ring-2 focus:ring-primary focus:outline-none"
            disabled={isSubmitting}
          />
          <input 
            type="email" 
            placeholder="Email" 
            required 
            value={formData.email} 
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
            className="w-full px-4 py-3 rounded-lg bg-muted text-foreground border border-border focus:ring-2 focus:ring-primary focus:outline-none"
            disabled={isSubmitting}
          />
          <textarea 
            placeholder="Message" 
            rows={5} 
            required 
            value={formData.message} 
            onChange={(e) => setFormData({...formData, message: e.target.value})} 
            className="w-full px-4 py-3 rounded-lg bg-muted text-foreground border border-border focus:ring-2 focus:ring-primary focus:outline-none resize-none"
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            className="btn-primary w-full inline-flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
