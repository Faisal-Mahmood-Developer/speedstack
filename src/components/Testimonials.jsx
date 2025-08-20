import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Shah',
      role: 'Frontend Developer at TechCorp',
      image: '👩‍💻',
      content: 'SpeedStack transformed my career completely. The hands-on approach and real-world projects gave me the confidence to land my dream job. The instructors are industry experts who genuinely care about student success.',
      rating: 5,
      course: 'Frontend Development'
    },
    {
      name: 'Ahsan Bodla',
      role: 'Full-Stack Developer & Freelancer',
      image: '👨‍💻',
      content: 'The MERN stack course was exactly what I needed. Within 6 months, I was building complex applications and earning as a freelancer. The business skills module helped me price my services correctly.',
      rating: 5,
      course: 'MERN Stack'
    },
    {
      name: 'Asad Ullah',
      role: 'WordPress Developer',
      image: '👩‍🎨',
      content: 'I started with zero coding experience. SpeedStack\'s WordPress course not only taught me development but also how to run a successful web design business. I now have 20+ recurring clients.',
      rating: 5,
      course: 'WordPress Development'
    },
    {
      name: 'Fahad Ullah',
      role: 'Backend Engineer at StartupXYZ',
      image: '👨‍🔬',
      content: 'The backend development course covered everything from basics to advanced concepts. Real-world projects and mentorship helped me transition from marketing to tech successfully.',
      rating: 5,
      course: 'Backend Development'
    },
    {
      name: 'Lisa Thompson',
      role: 'E-commerce Store Owner',
      image: '👩‍💼',
      content: 'SpeedStack didn\'t just teach me to code - they helped me build and launch my e-commerce platform. The business guidance was invaluable for starting my online store.',
      rating: 5,
      course: 'Custom Web App'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              Success Stories
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers and built successful businesses.
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="glass-card p-12 max-w-4xl mx-auto mb-12 relative">
            <Quote className="absolute top-8 left-8 w-8 h-8 text-primary/30" />
            
            <div className="text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-4xl mb-6 mx-auto">
                {testimonials[currentIndex].image}
              </div>

              {/* Content */}
              <p className="text-lg font-body text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              {/* Author Info */}
              <div>
                <h4 className="text-xl font-heading font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="font-body text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
                <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-sm font-body text-primary mt-2">
                  {testimonials[currentIndex].course}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center glass-card p-6 hover-lift">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">98%</div>
              <div className="font-body text-muted-foreground">Student Satisfaction</div>
            </div>
            <div className="text-center glass-card p-6 hover-lift">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">500+</div>
              <div className="font-body text-muted-foreground">Graduates</div>
            </div>
            <div className="text-center glass-card p-6 hover-lift">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">95%</div>
              <div className="font-body text-muted-foreground">Job Placement</div>
            </div>
            <div className="text-center glass-card p-6 hover-lift">
              <div className="text-3xl font-heading font-bold text-gradient mb-2">65k</div>
              <div className="font-body text-muted-foreground">Avg. Starting Salary</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;