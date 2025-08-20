import { Heart, Code, Mail, Phone, MapPin } from 'lucide-react';
import speedstackLogo from '@/assets/speedstack-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const courses = [
    { name: 'Frontend Development', href: '#courses' },
    { name: 'Backend Development', href: '#courses' },
    { name: 'MERN Stack', href: '#courses' },
    { name: 'Graphic Designing', href: '#courses' },
    { name: 'Freelancing Skills', href: '#courses' }
  ];

  const services = [
    { name: 'Business Websites', href: '#services' },
    { name: 'E-commerce', href: '#services' },
    { name: 'Web Applications', href: '#services' },
    { name: 'Portfolio Sites', href: '#services' },
    { name: 'Maintenance', href: '#services' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-20 pb-8">
      {/* Main Footer */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img src={speedstackLogo} alt="SpeedStack" className="h-10 w-10" />
                <div className="text-xl font-heading font-bold text-gradient">
                  SpeedStack
                </div>
              </div>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                Web Development Learning Academy - transforming passionate learners into skilled developers through hands-on learning and real-world projects.
              </p>
              <div className="flex items-center text-gradient">
                <Heart className="w-4 h-4 mr-2" />
                <span className="font-body text-sm">Made with passion for education</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-foreground mb-6">
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block font-body text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-foreground mb-6">
                Our Courses
              </h4>
              <div className="space-y-3">
                {courses.map((course) => (
                  <button
                    key={course.name}
                    onClick={() => scrollToSection(course.href)}
                    className="block font-body text-muted-foreground hover:text-accent transition-colors"
                  >
                    {course.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-foreground mb-6">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <a 
                    href="mailto:hello@speedstack.dev" 
                    className="font-body text-muted-foreground hover:text-accent transition-colors"
                  >
                    hello@speedstack.dev
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <a 
                    href="https://wa.me/15551234567" 
                    className="font-body text-muted-foreground hover:text-accent transition-colors"
                  >
                    +92 (308) 347-0930
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-body text-muted-foreground">
                    Lahore, Pakistan
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button className="btn-neon text-sm px-6 py-3">
                  Start Learning Today
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 font-body text-muted-foreground">
                <span>&copy; 2025 SpeedStack</span>
                <span>|</span>
                <span>Web Development Learning Academy & Software Solutions Hub</span>
                <span>|</span>
                <div className="flex items-center space-x-1">
                  <span>Designed with</span>
                  <Heart className="w-4 h-4 text-accent" />
                  <span>& Passion</span>
                </div>
              </div>

              {/* Tech Badge */}
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Code className="w-4 h-4" />
                <span className="font-body text-sm">Faisal Mahmood</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;