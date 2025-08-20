import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mbllzqqv");
  const [showThankYou, setShowThankYou] = useState(false);

  // Timer to hide thank you message and show form again
  useEffect(() => {
    let timer;
    if (state.succeeded) {
      setShowThankYou(true);
      timer = setTimeout(() => {
        setShowThankYou(false);
        state.reset(); // Reset form state
      }, 3000); // 5 seconds
    }
    return () => clearTimeout(timer);
  }, [state.succeeded]);

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'hello@speedstack.dev', action: 'mailto:hello@speedstack.dev' },
    { icon: Phone, title: 'WhatsApp', value: '+92 308 3470930', action: 'https://wa.me/923083470930' },
    { icon: MapPin, title: 'Location', value: 'Lahore, Pakistan', action: '#' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#', color: 'text-blue-400' },
    { name: 'Twitter', url: '#', color: 'text-blue-300' },
    { name: 'Instagram', url: '#', color: 'text-pink-400' },
    { name: 'YouTube', url: '#', color: 'text-red-400' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              Get In Touch
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
              Ready to start your web development journey or need a custom project? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Send us a Message
              </h3>

              {showThankYou ? (
                <p className="text-green-400 font-semibold text-center text-lg">
                  Thank you! Your message has been sent.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Your Name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-muted-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="your@email.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm text-muted-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Course Inquiry / Project Discussion"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-sm text-muted-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-muted/50 border border-white/10 rounded-lg font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us about your goals or project requirements..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                  </div>

                  <button
  type="submit"
  disabled={state.submitting}
  className="w-full btn-neon flex items-center justify-center space-x-2 py-3 px-6 rounded-full text-base"
>
  <Send className="w-5 h-5" />
  <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
</button>

                </form>
              )}
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-foreground">{info.title}</div>
                        <a href={info.action} className="font-body text-muted-foreground hover:text-accent transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
             <div className="glass-card p-8">
  <h4 className="text-xl font-heading font-semibold text-foreground mb-6">Quick Actions</h4>

  <div className="space-y-4">
    <a
      href="https://wa.me/923083470930"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full btn-ghost-neon flex items-center justify-center space-x-2 py-3 px-6 rounded-full text-base"
    >
      <MessageSquare className="w-5 h-5" />
      <span>WhatsApp Chat</span>
    </a>

    <button className="w-full btn-ghost-neon py-3 px-6 rounded-full text-base">
      Schedule Free Consultation
    </button>
    
    <button className="w-full btn-ghost-neon py-3 px-6 rounded-full text-base">
      Download Course Brochure
    </button>
  </div>
</div>

              {/* Social Media */}
              <div className="glass-card p-8">
                <h4 className="text-xl font-heading font-semibold text-foreground mb-6">Follow Us</h4>

                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center ${social.color} hover:scale-110 transition-transform`}
                    >
                      <span className="font-heading font-bold text-lg">{social.name[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
