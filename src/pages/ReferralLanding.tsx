import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Users, Award, Shield, Zap } from 'lucide-react';
import { useReferralStore } from '@/hooks/useReferralStore';

const ReferralLanding = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { currentUser } = useReferralStore();
  const [referrerInfo, setReferrerInfo] = useState<{ name: string; company: string } | null>(null);
  const [isValidReferral, setIsValidReferral] = useState(false);
  
  const referralCode = searchParams.get('ref');

  useEffect(() => {
    // In a real app, this would validate the referral code against a database
    if (referralCode) {
      // Mock validation - in production, this would be an API call
      setIsValidReferral(true);
      setReferrerInfo({
        name: 'John Smith',
        company: 'Tech Solutions Inc'
      });
    }
  }, [referralCode]);

  const services = [
    {
      title: 'Website Development',
      description: 'Custom websites built with modern technologies',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Analytics']
    },
    {
      title: 'Web Applications',
      description: 'Complex web applications for business needs',
      features: ['Custom Features', 'Database Integration', 'User Management', 'API Development']
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance services',
      features: ['24/7 Monitoring', 'Regular Updates', 'Security Patches', 'Performance Optimization']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Digital Marketing Pro',
      text: 'WAGUS Services delivered an exceptional e-commerce platform that increased our sales by 150%. Their attention to detail and ongoing support is outstanding.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      company: 'Local Restaurant Chain',
      text: 'The team at WAGUS created a beautiful website with online ordering that transformed our business. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Chen',
      company: 'Creative Agency',
      text: 'Professional, reliable, and innovative. WAGUS Services exceeded our expectations in every way.',
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers and designers at your service'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes'
    }
  ];

  const handleGetStarted = () => {
    // Navigate to contact page with referral information
    navigate(`/contact?ref=${referralCode}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Referral Validation Banner */}
      {isValidReferral && referrerInfo && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">
                You've been referred by {referrerInfo.name} from {referrerInfo.company}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {isValidReferral && referrerInfo && (
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  Trusted by {referrerInfo.company}
                </div>
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Web Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                That Drive Results
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with custom websites, e-commerce platforms, and web applications 
              built by industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                View Our Services
              </button>
            </div>
            
            {isValidReferral && (
              <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-gray-200">
                  🎉 <strong>Special Referral Bonus:</strong> Get priority support and exclusive consultation 
                  as a referred client from {referrerInfo?.company}!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose WAGUS Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional web solutions that help businesses grow and succeed online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {isValidReferral && referrerInfo ? (
              <>Join {referrerInfo.company} and hundreds of other businesses who trust WAGUS Services.</>  
            ) : (
              <>Join hundreds of businesses who trust WAGUS Services for their web solutions.</>
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button
              onClick={() => navigate('/portfolio')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Our Work
            </button>
          </div>
          
          {isValidReferral && referrerInfo && (
            <div className="mt-8 p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
              <p className="text-sm">
                💡 <strong>Referral Benefits:</strong> Priority support, dedicated consultation, 
                and special pricing as a referred client!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferralLanding;