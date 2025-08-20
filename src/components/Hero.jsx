import { ArrowRight, Play, Briefcase, DollarSign, Laptop, Mail } from 'lucide-react';

const Hero = () => {
  const cards = [
    {
      icon: Briefcase,
      title: 'You will be highly requested',
      description: 'Companies need developers, even those who have not yet realized it.'
    },
    {
      icon: DollarSign,
      title: "You'll get a great salary",
      description: 'Your average salary will be high right away. And it will grow over time.'
    },
    {
      icon: Laptop,
      title: 'You will work from wherever you want',
      description: 'All you need is a computer. Your office will be wherever you want to work...'
    },
    {
      icon: Mail,
      title: 'You will receive offers every day',
      description: 'You will acquire skills that are in high demand and difficult to find.'
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">Speed</span>
              <span className="text-foreground">Stack</span>
            </h1>
            <div className="text-xl md:text-2xl font-body text-muted-foreground mb-4">
              Web Development Learning Academy & Software Solutions Hub
            </div>
          </div>

          {/* Tagline */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-8 text-foreground">
              Learn. <span className="text-primary">Build.</span>{' '}
              <span className="text-accent">Grow.</span>
            </h2>
          </div>

          {/* Description */}
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl font-body text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Master modern web development with our comprehensive courses covering Frontend,
              Backend, and Full-Stack technologies. Build real-world projects and launch your tech
              career.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            style={{ animationDelay: '0.6s' }}
          >
            <button className="btn-neon flex items-center space-x-2 group px-5 py-2.5 text-base rounded-full">
              <span>Join SpeedStack Now</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="btn-ghost-neon flex items-center space-x-2 px-5 py-2.5 text-base rounded-full">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Tech Stack Preview */}
          <div className="fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <div className="text-lg font-heading font-semibold text-foreground mb-6">
                Master These Technologies
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center hover-lift">
                  <ArrowRight className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-body text-sm text-muted-foreground">Frontend</div>
                  <div className="font-body text-xs text-muted-foreground">
                    React, HTML, CSS, JS
                  </div>
                </div>
                <div className="text-center hover-lift">
                  <ArrowRight className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="font-body text-sm text-muted-foreground">Backend</div>
                  <div className="font-body text-xs text-muted-foreground">Node.js, Python, PHP</div>
                </div>
                <div className="text-center hover-lift">
                  <ArrowRight className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="font-body text-sm text-muted-foreground">Database</div>
                  <div className="font-body text-xs text-muted-foreground">MongoDB, MySQL</div>
                </div>
                <div className="text-center hover-lift">
                  <ArrowRight className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-body text-sm text-muted-foreground">Full-Stack</div>
                  <div className="font-body text-xs text-muted-foreground">MERN-Stack</div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Benefit Cards */}
          {/* 4 Benefit Cards */}
<div
  className="fade-in-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 mb-16"
  style={{ animationDelay: '0.7s' }}
>
  {cards.map((card) => (
    <div
      key={card.title}
      className="glass-card bg-black/80 text-white p-6 rounded-2xl shadow-lg hover-lift hover-glow"
    >
      <card.icon className="w-8 h-8 text-primary mb-4" />
      <h4 className="font-heading text-lg font-semibold mb-3">
        {card.title}
      </h4>
      <p className="text-sm text-gray-300 leading-relaxed">{card.description}</p>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
