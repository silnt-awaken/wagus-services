import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Code, Zap, Shield, Heart, CheckCircle, Star } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Lead React Developer",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20software%20developer%20portrait%20confident%20modern%20office%20setting%20business%20casual%20attire&image_size=square",
      expertise: ["React & TypeScript", "Performance Optimization", "Mobile-First Design"],
      experience: "8+ years"
    },
    {
      name: "Sarah Chen",
      role: "UX/UI Designer",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20UX%20designer%20woman%20creative%20workspace%20modern%20design%20studio%20confident%20portrait&image_size=square",
      expertise: ["User Experience Design", "Conversion Optimization", "Accessibility"],
      experience: "6+ years"
    },
    {
      name: "Mike Thompson",
      role: "Performance Specialist",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20web%20performance%20specialist%20technical%20expert%20modern%20office%20confident%20portrait&image_size=square",
      expertise: ["Core Web Vitals", "SEO Optimization", "Technical Audits"],
      experience: "7+ years"
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every decision we make is focused on delivering measurable business results for our clients."
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "We build long-term partnerships by truly understanding and solving our clients' unique challenges."
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "We stay at the forefront of web technology to deliver cutting-edge solutions that stand the test of time."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensure every website we deliver meets the highest standards."
    }
  ];

  const expertise = [
    {
      category: "React Development",
      skills: [
        "Modern React with Hooks",
        "TypeScript Integration",
        "Component Architecture",
        "State Management (Zustand, Redux)",
        "React Router & Navigation",
        "Performance Optimization"
      ]
    },
    {
      category: "Performance & SEO",
      skills: [
        "Core Web Vitals Optimization",
        "Lighthouse Score Improvement",
        "Technical SEO Implementation",
        "Image & Asset Optimization",
        "Code Splitting & Lazy Loading",
        "CDN & Caching Strategies"
      ]
    },
    {
      category: "Modern Web Practices",
      skills: [
        "Mobile-First Responsive Design",
        "Progressive Web Apps (PWA)",
        "Accessibility (WCAG 2.1)",
        "Modern CSS (Tailwind, Grid, Flexbox)",
        "API Integration & Management",
        "Security Best Practices"
      ]
    },
    {
      category: "Business Integration",
      skills: [
        "E-commerce Solutions",
        "CMS Integration",
        "Analytics & Tracking",
        "Lead Generation Forms",
        "Payment Gateway Integration",
        "Third-Party Service APIs"
      ]
    }
  ];

  const whyReact = [
    {
      title: "Performance That Converts",
      description: "React's virtual DOM and efficient rendering ensure your website loads fast and stays responsive, directly impacting your conversion rates.",
      stats: "Up to 3x faster load times"
    },
    {
      title: "Future-Proof Architecture",
      description: "React's component-based architecture makes your website easy to maintain, update, and scale as your business grows.",
      stats: "50% easier to maintain"
    },
    {
      title: "Superior User Experience",
      description: "Smooth interactions, instant page transitions, and responsive interfaces keep users engaged and reduce bounce rates.",
      stats: "25% lower bounce rates"
    },
    {
      title: "SEO & Accessibility Ready",
      description: "Modern React applications can be optimized for search engines and accessibility, ensuring your site reaches the widest possible audience.",
      stats: "Better search rankings"
    }
  ];

  const achievements = [
    {
      number: "50+",
      label: "Websites Transformed",
      description: "Successfully modernized"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Average project rating"
    },
    {
      number: "40%",
      label: "Average Conversion Boost",
      description: "Typical improvement"
    },
    {
      number: "2.5s",
      label: "Average Load Time",
      description: "Performance improvement"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">WAGUS LLC</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Founded in 2025, WAGUS LLC is building a comprehensive ecosystem of web3 and enterprise solutions. Our Web Services division specializes in transforming businesses with modern React applications.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 max-w-4xl mx-auto">
              <p className="text-sm text-gray-600 mb-2">Part of the WAGUS Ecosystem:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">swap.wagus.app - Crypto Trading</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">export.wagus.app - Wallet Management</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">agents.wagus.app - AI Development</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">origins.wagus.app - Web3 Gaming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                WAGUS LLC started as a social layer embedded on Solana and has evolved into a comprehensive technology company. Our Web Services division leverages our deep understanding of modern web technologies and blockchain integration to help businesses thrive in the digital age.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in transforming legacy websites into modern React applications that not only look great but deliver measurable business results. With our roots in web3 and our expansion into enterprise solutions, we bring a unique perspective to traditional web development.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Enterprise-Grade Solutions</h3>
                  <p className="text-gray-600">Bringing enterprise-level technology and web3 innovation to businesses of all sizes.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20web%20development%20team%20working%20together%20collaborative%20office%20environment%20computers%20screens%20React%20code&image_size=landscape_4_3" 
                alt="Our team working on React projects"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">React</div>
                <div className="text-sm text-gray-600">Specialists</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and ensure exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional React websites and digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.experience} experience</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive skills across the modern web development stack, with deep specialization in React.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why React Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why React & Modern Web Practices Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the technology behind better business results and why React is the right choice for your website.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyReact.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 mb-4">{reason.description}</p>
                    <div className="bg-white px-4 py-2 rounded-lg inline-block">
                      <span className="text-sm font-semibold text-blue-600">{reason.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering exceptional results for every client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-blue-100 mb-1">{achievement.label}</div>
                <div className="text-blue-200">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Modern Web Solutions?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">React Specialization</h3>
                    <p className="text-gray-600">Deep expertise in React development ensures your website uses the most efficient, modern technology available.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business-Focused Approach</h3>
                    <p className="text-gray-600">Every design and development decision is made with your business goals and ROI in mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-600">Track record of delivering measurable improvements in performance, conversions, and user experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Partnership</h3>
                    <p className="text-gray-600">We don't just build and disappear – we provide ongoing support to ensure your continued success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20React%20website%20development%20process%20multiple%20screens%20responsive%20design%20code%20editor%20professional%20workspace&image_size=landscape_4_3" 
                alt="Modern web development process"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">5-Star Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work with React Experts?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can transform your website and drive real business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}