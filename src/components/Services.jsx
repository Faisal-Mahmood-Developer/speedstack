import { Globe, ShoppingCart, User, Smartphone, Settings, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Business Websites',
      description: 'Professional, responsive websites that represent your brand and drive conversions.',
      features: ['Custom Design', 'SEO Optimized', 'Mobile Responsive', 'Fast Loading'],
      price: 'Quote on Request'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and analytics.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics Dashboard'],
      price: 'Quote on Request'
    },
    {
      icon: User,
      title: 'Portfolio Sites',
      description: 'Stunning portfolio websites that showcase your work and attract potential clients.',
      features: ['Gallery System', 'Contact Forms', 'Testimonials', 'Blog Integration'],
      price: 'Quote on Request'
    },
    {
      icon: Smartphone,
      title: 'Web Applications',
      description: 'Custom web applications tailored to your specific business needs and workflows.',
      features: ['Custom Functionality', 'User Authentication', 'Database Integration', 'API Development'],
      price: 'Quote on Request'
    },
    {
      icon: Settings,
      title: 'Website Maintenance',
      description: 'Keep your website secure, updated, and performing at its best with our maintenance plans.',
      features: ['Security Updates', 'Performance Optimization', 'Content Updates', '24/7 Support'],
      price: 'Quote on Request'
    },
    {
      icon: Zap,
      title: 'Custom Solutions',
      description: 'Unique web solutions designed specifically for your industry and business requirements.',
      features: ['Consultation', 'Custom Development', 'Integration Services', 'Ongoing Support'],
      price: 'Quote on Request'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              Our Services
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
              Beyond education, we offer professional web development services to bring your digital vision to life.
            </p>
          </div>


          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-8 hover-lift hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon & Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-gradient transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-body text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span className="font-body text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer (Quote / Price Section) */}
                <div className="border-t border-white/10 pt-4">
                  <div className="text-lg font-heading font-semibold text-gradient">
                    {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>



          {/* CTA Section */}
          <div className="glass-card p-12 text-center">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. Get a free consultation and project quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-ghost-neon px-6 py-3 text-base rounded-full">
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;