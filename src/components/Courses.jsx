import { useState } from 'react';
import { Code, Server, Layers, Globe, Briefcase, Linkedin, ArrowRight } from 'lucide-react';

const Courses = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const courses = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Master HTML5, CSS3, JavaScript, React, and modern frontend frameworks to create stunning user interfaces.',
      skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Bootstrap & Tailwind'],
      color: 'primary'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Build robust server-side applications with Node.js, Python, PHP, and database management.',
      skills: ['Node.js & Express', 'Python & Django', 'PHP & Laravel', 'Database Design'],
      color: 'secondary'
    },
    {
      icon: Layers,
      title: 'MERN Stack',
      description: 'Become a full-stack developer with MongoDB, Express, React, and Node.js expertise.',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      color: 'accent'
    },
    {
      icon: Globe,
      title: 'Graphic Designing',
      description: 'Design creative visuals, logos, posters, and digital graphics to enhance brand identity and engagement.',
      skills: ['Logo Design', 'Brand Identity', 'Posters & Flyers', 'Digital Graphics'],
      color: 'primary'
    },
    {
      icon: Briefcase,
      title: 'Freelancing Skills',
      description: 'Learn client management, project pricing, portfolio building, and business development.',
      skills: ['Client Communication', 'Project Management', 'Pricing Strategies', 'Portfolio Building'],
      color: 'secondary'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Learning',
      description: 'Master LinkedIn to grow your professional network, build a strong profile, and attract opportunities.',
      skills: ['Profile Optimization', 'Networking', 'Content Creation', 'Personal Branding'],
      color: 'accent'
    }
  ];

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="courses" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              Learning Paths
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
              Choose your path to web development mastery. Each course is designed with hands-on projects and real-world applications.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={course.title}
                  className="glass-card p-8 hover-lift hover-glow group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Show either collapsed content or expanded detail */}
                  {!isExpanded ? (
                    <>
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${
                          course.color === 'primary'
                            ? 'from-primary/20 to-primary/40'
                            : course.color === 'secondary'
                            ? 'from-secondary/20 to-secondary/40'
                            : 'from-accent/20 to-accent/40'
                        } flex items-center justify-center mb-6`}
                      >
                        <course.icon
                          className={`w-8 h-8 ${
                            course.color === 'primary'
                              ? 'text-primary'
                              : course.color === 'secondary'
                              ? 'text-secondary'
                              : 'text-accent'
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-4 group-hover:text-gradient transition-colors">
                        {course.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-6">
                        {course.description}
                      </p>

                      {/* Skills */}
                      <div className="space-y-2 mb-6">
                        {course.skills.map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                course.color === 'primary'
                                  ? 'bg-primary'
                                  : course.color === 'secondary'
                                  ? 'bg-secondary'
                                  : 'bg-accent'
                              }`}
                            ></div>
                            <span className="font-body text-sm text-muted-foreground">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="mb-6 text-sm text-muted-foreground">
                      <h4 className="font-semibold mb-2">Detailed View</h4>
                      <p className="mb-2">{course.description}</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {course.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                      <p className="mt-2">More detailed info about the course can go here...</p>
                    </div>
                  )}

                  {/* CTA */}
                  <button
                    className="w-full btn-ghost-neon flex items-center justify-center space-x-2 px-5 py-2.5 text-base rounded-full transition-transform duration-300 hover:scale-105"
                    onClick={() => toggleDetails(index)}
                  >
                    <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform ${
                        isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
