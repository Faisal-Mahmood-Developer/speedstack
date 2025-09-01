import { Users, Award, Target, Lightbulb } from 'lucide-react';
import Founder from './Founder';
const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience'
    },
    {
      icon: Award,
      title: 'Practical Learning',
      description: 'Build actual projects that you can showcase in your portfolio'
    },
    {
      icon: Target,
      title: 'Career Focused',
      description: 'Curriculum designed to meet current industry demands'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Stay updated with the latest web development trends and technologies'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              About ConnectStack
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
              We're a cutting-edge web development academy dedicated to transforming passionate learners into skilled developers through hands-on learning and real-world projects.
            </p>
             <Founder />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="fade-in-up">
              <h3 className="text-3xl font-heading font-semibold text-foreground mb-6">
                Your Journey to <span className="text-accent">Full-Stack Mastery</span>
              </h3>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>
                  At ConnectStack, we believe in learning by doing. Our comprehensive curriculum covers everything from Frontend fundamentals to Backend mastery, ensuring you graduate with the skills employers demand.
                </p>
                <p>
                  <strong className="text-foreground">Frontend Technologies:</strong> HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS
                </p>
                <p>
                  <strong className="text-foreground">Backend Technologies:</strong> Node.js, Express, Python, PHP, MongoDB, MySQL
                </p>
                <p>
                  <strong className="text-foreground">Specializations:</strong> MERN Stack, WordPress Development, E-commerce Solutions, API Development
                </p>
              </div>
            </div>

            {/* Right Content - Features Grid */}
            <div className="slide-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={feature.title} className="glass-card p-6 hover-lift hover-glow">
                    <feature.icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="hover-lift">
                <div className="text-3xl font-heading font-bold text-gradient mb-2">500+</div>
                <div className="font-body text-muted-foreground">Students Graduated</div>
              </div>
              <div className="hover-lift">
                <div className="text-3xl font-heading font-bold text-gradient mb-2">95%</div>
                <div className="font-body text-muted-foreground">Job Placement Rate</div>
              </div>
              <div className="hover-lift">
                <div className="text-3xl font-heading font-bold text-gradient mb-2">50+</div>
                <div className="font-body text-muted-foreground">Industry Projects</div>
              </div>
              <div className="hover-lift">
                <div className="text-3xl font-heading font-bold text-gradient mb-2">24/7</div>
                <div className="font-body text-muted-foreground">Learning Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;