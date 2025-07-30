import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Clock, TrendingUp, Users, Star, Zap, Smartphone, Shield } from "lucide-react";

export default function Portfolio() {
  const beforeAfterProjects = [
    {
      id: 1,
      title: "Local Restaurant Chain",
      category: "Food & Beverage",
      beforeImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=outdated%20restaurant%20website%20with%20poor%20design%20cluttered%20layout%20old%20fonts%20bad%20navigation%20desktop%20screenshot&image_size=landscape_16_9",
      afterImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20restaurant%20website%20clean%20design%20beautiful%20food%20photos%20mobile%20responsive%20elegant%20typography%20React%20interface&image_size=landscape_16_9",
      improvements: {
        loadTime: "3.2s → 0.8s",
        mobileScore: "45 → 98",
        conversions: "+45%"
      },
      description: "Transformed a cluttered, slow-loading restaurant site into a modern, mobile-first experience that increased online orders by 45%."
    },
    {
      id: 2,
      title: "Professional Services Firm",
      category: "Business Services",
      beforeImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=outdated%20business%20consulting%20website%20corporate%20boring%20design%20poor%20mobile%20experience%20old%20layout&image_size=landscape_16_9",
      afterImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20professional%20consulting%20website%20clean%20corporate%20design%20excellent%20mobile%20responsive%20React%20interface%20blue%20orange%20colors&image_size=landscape_16_9",
      improvements: {
        loadTime: "4.1s → 1.2s",
        mobileScore: "38 → 95",
        conversions: "+32%"
      },
      description: "Redesigned a traditional consulting firm's website with modern React architecture, improving lead generation by 32%."
    },
    {
      id: 3,
      title: "E-commerce Boutique",
      category: "Retail",
      beforeImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=outdated%20ecommerce%20website%20poor%20product%20display%20bad%20checkout%20process%20slow%20loading%20old%20design&image_size=landscape_16_9",
      afterImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20ecommerce%20boutique%20website%20beautiful%20product%20gallery%20smooth%20checkout%20mobile%20optimized%20React%20shopping%20experience&image_size=landscape_16_9",
      improvements: {
        loadTime: "5.3s → 1.1s",
        mobileScore: "42 → 96",
        conversions: "+58%"
      },
      description: "Revamped an e-commerce boutique with React, creating a seamless shopping experience that boosted sales by 58%."
    }
  ];

  const demoFeatures = [
    {
      title: "Interactive Service Showcases",
      description: "Engaging product/service displays with smooth animations and user interactions.",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=interactive%20service%20showcase%20website%20modern%20cards%20hover%20effects%20smooth%20animations%20React%20components&image_size=landscape_4_3",
      features: ["Hover animations", "Interactive cards", "Smooth transitions", "Mobile gestures"]
    },
    {
      title: "One-Click Mobile Navigation",
      description: "Intuitive mobile menus that make navigation effortless on any device.",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20navigation%20menu%20hamburger%20smooth%20slide%20animation%20modern%20mobile%20interface%20React%20responsive&image_size=landscape_4_3",
      features: ["Hamburger menus", "Slide animations", "Touch-friendly", "Accessible design"]
    },
    {
      title: "SEO-Friendly Blog & Resources",
      description: "Optimized content pages that rank well and provide value to your audience.",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=SEO%20optimized%20blog%20page%20clean%20typography%20readable%20content%20modern%20layout%20React%20blog%20design&image_size=landscape_4_3",
      features: ["SEO optimization", "Fast loading", "Social sharing", "Content management"]
    }
  ];

  const caseStudies = [
    {
      title: "Restaurant Chain Digital Transformation",
      client: "Bella Vista Restaurants",
      industry: "Food & Beverage",
      challenge: "Outdated website with poor mobile experience and slow online ordering system.",
      solution: "Complete React redesign with integrated ordering system, mobile-first approach, and performance optimization.",
      results: [
        "45% increase in online orders",
        "3.2s to 0.8s page load improvement",
        "98/100 mobile performance score",
        "25% reduction in bounce rate"
      ],
      testimonial: "The new website transformed our business. Online orders increased dramatically, and customers love the smooth mobile experience.",
      clientName: "Maria Rodriguez, Owner",
      duration: "3 weeks",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=restaurant%20owner%20happy%20with%20new%20website%20modern%20restaurant%20interior%20professional%20portrait&image_size=square"
    },
    {
      title: "Professional Services Lead Generation",
      client: "Summit Consulting Group",
      industry: "Business Consulting",
      challenge: "Low lead generation and poor search engine visibility with an outdated corporate website.",
      solution: "Modern React website with optimized lead capture forms, SEO improvements, and professional design.",
      results: [
        "32% increase in qualified leads",
        "4.1s to 1.2s page load improvement",
        "150% increase in organic traffic",
        "40% improvement in contact form submissions"
      ],
      testimonial: "Our new website positions us as industry leaders. The lead quality and quantity have improved significantly.",
      clientName: "David Chen, Managing Partner",
      duration: "4 weeks",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20consultant%20in%20modern%20office%20confident%20portrait%20business%20attire&image_size=square"
    }
  ];

  const technologies = [
    {
      icon: Zap,
      name: "React Performance",
      description: "Lightning-fast rendering and optimal user experience",
      benefits: ["Virtual DOM efficiency", "Code splitting", "Lazy loading", "Bundle optimization"]
    },
    {
      icon: Smartphone,
      name: "Mobile-First Design",
      description: "Responsive layouts that work perfectly on all devices",
      benefits: ["Touch-friendly interfaces", "Flexible grids", "Optimized images", "Progressive enhancement"]
    },
    {
      icon: Shield,
      name: "Modern Web Standards",
      description: "Built with the latest web technologies and best practices",
      benefits: ["Semantic HTML", "Accessibility compliance", "Security best practices", "Future-proof architecture"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              WAGUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how WAGUS LLC transforms businesses with cutting-edge web solutions, from traditional websites to web3-enabled platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WAGUS Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how WAGUS delivers enterprise-grade solutions with dramatic improvements in design, performance, and user experience.
            </p>
          </div>
          <div className="space-y-16">
            {beforeAfterProjects.map((project, index) => (
              <div key={project.id} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Before/After Images */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Before</h4>
                      <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={project.beforeImage} 
                          alt={`${project.title} - Before`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                          Outdated
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">After</h4>
                      <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={project.afterImage} 
                          alt={`${project.title} - After`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                          Modern React
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <div className="mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    {/* Performance Improvements */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <div className="text-sm font-medium text-gray-900">Load Time</div>
                        <div className="text-lg font-bold text-green-600">{project.improvements.loadTime}</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Smartphone className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-sm font-medium text-gray-900">Mobile Score</div>
                        <div className="text-lg font-bold text-blue-600">{project.improvements.mobileScore}</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <div className="text-sm font-medium text-gray-900">Conversions</div>
                        <div className="text-lg font-bold text-orange-600">{project.improvements.conversions}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WAGUS Ecosystem Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the modern features and web3 integrations WAGUS builds into every platform across our ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoFeatures.map((demo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                <div className="relative">
                  <img 
                    src={demo.image} 
                    alt={demo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-white bg-black bg-opacity-50 rounded p-1" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{demo.title}</h3>
                  <p className="text-gray-600 mb-4">{demo.description}</p>
                  <ul className="space-y-2">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WAGUS Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dive into how WAGUS LLC solved real business challenges with enterprise-grade solutions and measurable results.
            </p>
          </div>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Client Info */}
                  <div className="lg:col-span-1">
                    <div className="text-center">
                      <img 
                        src={study.image} 
                        alt={study.clientName}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h4 className="text-lg font-bold text-gray-900">{study.client}</h4>
                      <p className="text-gray-600 mb-2">{study.industry}</p>
                      <div className="flex items-center justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 italic mb-2">"{study.testimonial}"</p>
                      <p className="text-sm font-medium text-gray-900">{study.clientName}</p>
                      <p className="text-xs text-gray-500">Project Duration: {study.duration}</p>
                    </div>
                  </div>

                  {/* Case Study Details */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Results Achieved</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WAGUS Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The cutting-edge technologies and web3 practices that power WAGUS's high-performance platforms across our entire ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                    <p className="text-gray-600 mb-6">{tech.description}</p>
                    <ul className="space-y-2">
                      {tech.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-700">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the WAGUS Ecosystem?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let WAGUS LLC create enterprise-grade solutions that drive real business results with cutting-edge web3 capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}