import { Link } from "react-router-dom";
import { ArrowRight, Zap, Smartphone, TrendingUp, CheckCircle, Star } from "lucide-react";

export default function Home() {
  const stats = [
    {
      icon: TrendingUp,
      number: "20%",
      label: "Conversion Increase",
      description: "Every second of load time improvement"
    },
    {
      icon: Smartphone,
      number: "70%",
      label: "Mobile Users",
      description: "Browse on mobile devices"
    },
    {
      icon: Zap,
      number: "2%",
      label: "Revenue Boost",
      description: "Per 1-second speed improvement"
    }
  ];

  const services = [
    {
      title: "Complete Website Redesigns",
      description: "Transform outdated layouts into modern, responsive designs that convert visitors into customers.",
      features: ["Modern UI/UX Design", "Mobile-First Approach", "Conversion Optimization"]
    },
    {
      title: "Performance & Accessibility Audits",
      description: "Analyze and fix speed bottlenecks while ensuring WCAG accessibility compliance.",
      features: ["Speed Optimization", "Core Web Vitals", "Accessibility Testing"]
    },
    {
      title: "Modern Features & Integrations",
      description: "Add contact forms, booking systems, and Progressive Web App capabilities.",
      features: ["Contact Forms", "Booking Systems", "PWA Features"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Local Restaurant",
      quote: "Our new React website increased online orders by 45% in just 2 months!",
      rating: 5
    },
    {
      name: "Mike Chen",
      business: "Consulting Firm",
      quote: "The performance improvements were incredible - our site loads 3x faster now.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                WAGUS LLC
              </span>
              <span className="block text-gray-900">
                Web Services & Development
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Part of the comprehensive WAGUS ecosystem, we specialize in transforming business websites into modern, 
              <span className="font-semibold text-blue-600">high-performance React applications</span> that 
              <span className="font-semibold text-orange-600">drive conversions and growth</span>.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-4xl mx-auto">
              <p className="text-sm text-gray-600 mb-2">Part of the WAGUS Ecosystem:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">swap.wagus.app</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">export.wagus.app</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">agents.wagus.app</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">origins.wagus.app</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">services.wagus.app</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Get Free Website Audit
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
        </div>
      </section>

      {/* Statistics Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why React & Modern Web Practices?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Performance that sells. Every improvement directly impacts your bottom line.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to modernize your digital presence and drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center gap-1"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why This Matters for Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">94%</div>
                <div className="font-semibold text-gray-900 mb-2">First impressions are design‑related</div>
                <div className="text-gray-600">Your website is often the first interaction customers have with your business.</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                <div className="text-2xl font-bold text-orange-600 mb-2">2%</div>
                <div className="font-semibold text-gray-900 mb-2">Revenue increase per second</div>
                <div className="text-gray-600">Walmart increased conversions by 2% for every 1‑second improvement in load time.</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">Local</div>
                <div className="font-semibold text-gray-900 mb-2">Competitive advantage</div>
                <div className="text-gray-600">A modern site positions you ahead of competitors still running outdated pages.</div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Client Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.business}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free website audit and see how fast we can transform your online brand.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Get Free Audit Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}