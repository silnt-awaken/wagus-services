import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Palette, Zap, Smartphone, Headphones, Bitcoin, CreditCard, DollarSign, FileText } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Complete Website Redesigns",
      description: "Replace outdated layouts with modern, responsive designs that turn visitors into customers.",
      features: [
        "Modern UI/UX Design",
        "Mobile-First Responsive Layout",
        "User Flow Optimization",
        "Brand-Consistent Styling",
        "Cross-Browser Compatibility",
        "SEO-Friendly Structure"
      ],
      deliverables: ["Design Mockups", "Responsive Website", "Performance Report", "Training Documentation"]
    },
    {
      icon: Zap,
      title: "Performance & Accessibility Audits",
      description: "Analyze and fix speed bottlenecks while ensuring WCAG accessibility compliance.",
      features: [
        "Core Web Vitals Analysis",
        "Speed Optimization",
        "WCAG 2.1 AA Compliance",
        "SEO Technical Audit",
        "Mobile Performance Testing",
        "Security Assessment"
      ],
      deliverables: ["Detailed Audit Report", "Priority Fix List", "Performance Benchmarks", "Accessibility Report"]
    },
    {
      icon: Smartphone,
      title: "Modern Features & Integrations",
      description: "Add contact forms, appointment booking, service galleries, and Progressive Web App capabilities.",
      features: [
        "Contact Forms & Lead Capture",
        "Appointment Booking Systems",
        "Service/Product Galleries",
        "Progressive Web Apps (PWA)",
        "Offline Capabilities",
        "Third-Party Integrations"
      ],
      deliverables: ["Custom Features", "Integration Setup", "PWA Configuration", "User Guide"]
    },
    {
      icon: Headphones,
      title: "Ongoing Support & Iteration",
      description: "Regular updates, performance monitoring, and feature rollouts to keep your site competitive.",
      features: [
        "Monthly Performance Reports",
        "Security Updates",
        "Content Management Support",
        "Feature Enhancements",
        "Bug Fixes & Maintenance",
        "Analytics & Insights"
      ],
      deliverables: ["Monthly Reports", "Update Logs", "Performance Metrics", "Support Documentation"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Free Audit",
      description: "We review your current site and identify opportunities for improvement.",
      duration: "1-2 days"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive plan tailored to your business goals and target audience.",
      duration: "3-5 days"
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Create modern, responsive designs and build with React for optimal performance.",
      duration: "2-4 weeks"
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Thorough testing across devices and browsers, plus performance optimization.",
      duration: "3-5 days"
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deploy your new site and provide ongoing support and maintenance.",
      duration: "Ongoing"
    }
  ];

  const paymentMethods = [
    {
      icon: Bitcoin,
      name: "Solana (SPL tokens)",
      description: "Fast, low-cost payments using Solana blockchain",
      benefits: ["Instant transactions", "Low fees", "Secure blockchain"]
    },
    {
      icon: DollarSign,
      name: "USDC (Stablecoin)",
      description: "Stable cryptocurrency pegged to USD",
      benefits: ["Price stability", "Fast transfers", "Global accessibility"]
    },
    {
      icon: CreditCard,
      name: "PayPal",
      description: "Traditional payment via personal account",
      benefits: ["Familiar platform", "Buyer protection", "Easy setup"]
    },
    {
      icon: FileText,
      name: "Invoice Support",
      description: "Custom invoicing for enterprise clients",
      benefits: ["Net payment terms", "Purchase orders", "Accounting integration"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter Redesign",
      price: "$500",
      description: "Perfect for small businesses with basic websites",
      features: [
        "Up to 5 pages",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month support"
      ],
      popular: false
    },
    {
      name: "Professional Revamp",
      price: "$1,000",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Up to 10 pages",
        "Advanced UI/UX design",
        "Performance optimization",
        "CMS integration",
        "Analytics setup",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Multi-language support",
        "Dedicated project manager",
        "12 months support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              WAGUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">Web Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Enterprise-grade web solutions powered by our web3 expertise. Transform your business with modern React applications that drive results.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-gray-600 mb-2">Accepting Web3 & Traditional Payments:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Solana (SPL)</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">USDC</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">PayPal</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Invoicing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Catalog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complete redesigns to ongoing support, we provide everything you need for a modern web presence.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Features Included:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <span key={deliverableIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven step-by-step approach that ensures your project is delivered on time and exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm font-medium text-blue-600">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear pricing structure with no hidden fees. Choose the package that fits your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 ${
                tier.popular ? 'bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-200' : 'bg-white border border-gray-200'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{tier.price}</div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-blue-600 to-orange-600 text-white hover:from-blue-700 hover:to-orange-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Payment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept multiple payment methods to make it convenient for you to get started.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{method.description}</p>
                    <ul className="space-y-1">
                      {method.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-500">
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and create a custom proposal that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Get Free Audit
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}