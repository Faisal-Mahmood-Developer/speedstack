import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import speedstackLogo from '@/assets/speedstack-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={speedstackLogo} alt="SpeedStack" className="h-10 w-10" />
            <div className="text-xl font-heading font-bold text-gradient">
              SpeedStack
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="font-body text-foreground hover:text-accent transition-colors duration-300 hover:text-neon"
              >
                {item.label}
              </button>
            ))}

            <a
              href="https://wa.me/923083470930"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon px-5 py-2.5 text-base rounded-full"
            >
              Join Now
            </a>

          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 font-body text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;