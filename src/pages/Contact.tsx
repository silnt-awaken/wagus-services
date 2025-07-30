import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageSquare, Calendar, Zap } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    hearAbout: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_czppj79'; // Your EmailJS service ID
      const templateId = 'template_3toz5lv'; // Your EmailJS template ID (create template first)
      const publicKey = 'NfyIf2Z8z3P4zmTgr'; // Your EmailJS public key
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        website: formData.website,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        hear_about: formData.hearAbout,
        to_email: 'silnt.awaken@gmail.com' // Your email address
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success(
        "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours at " + formData.email
      );
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
        hearAbout: ""
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Sorry, there was an error sending your message. Please try again or email us directly at services@wagus.app");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "services@wagus.app",
      description: "Get a response within 24 hours",
      action: "mailto:services@wagus.app"
    },
    {
      icon: MessageSquare,
      title: "WAGUS Ecosystem",
      details: "wagus.app",
      description: "Explore our full platform",
      action: "https://wagus.app"
    },
    {
      icon: Zap,
      title: "Web3 Payments",
      details: "Solana, USDC, PayPal",
      description: "Flexible payment options",
      action: "#payment-options"
    },
    {
      icon: Calendar,
      title: "Schedule Consultation",
      details: "Free 30-min strategy call",
      description: "Discuss your project needs",
      action: "#contact-form"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your goals, current challenges, and vision for your new website.",
      duration: "30-60 minutes"
    },
    {
      step: "2",
      title: "Website Audit & Proposal",
      description: "We analyze your current site and provide a detailed proposal with timeline and pricing.",
      duration: "2-3 business days"
    },
    {
      step: "3",
      title: "Design & Development",
      description: "We create your modern React website with regular check-ins and updates.",
      duration: "2-6 weeks"
    },
    {
      step: "4",
      title: "Launch & Support",
      description: "We launch your site and provide ongoing support to ensure continued success.",
      duration: "Ongoing"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical React website project take?",
      answer: "Most projects take 2-6 weeks depending on complexity. Simple business websites typically take 2-3 weeks, while more complex e-commerce or custom applications may take 4-6 weeks."
    },
    {
      question: "Do you work with businesses outside your local area?",
      answer: "Yes! While we love working with local businesses, we serve clients nationwide. All our communication and project management is done remotely with regular video calls and updates."
    },
    {
      question: "What if I need changes after the website is launched?",
      answer: "We provide ongoing support and maintenance services. Minor updates are often included in our support packages, while larger changes can be handled as separate projects."
    },
    {
      question: "Can you help improve my existing website's performance?",
      answer: "Absolutely! We offer website audits and performance optimization services. We can often improve load times and Core Web Vitals scores significantly without a complete rebuild."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build the Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">Together</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business with WAGUS web services? Leverage our web3 expertise and enterprise-grade solutions for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                Get Free Audit
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+15551234567"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={index}
                  href={info.action}
                  className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Your Project Today
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll provide a detailed proposal within 48 hours.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Website (if any)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select project type</option>
                    <option value="new-website">New Website</option>
                    <option value="website-redesign">Website Redesign</option>
                    <option value="react-conversion">Convert to React</option>
                    <option value="performance-optimization">Performance Optimization</option>
                    <option value="e-commerce">E-commerce Website</option>
                    <option value="maintenance">Ongoing Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select budget range</option>
                    <option value="500">$500 - Starter Redesign</option>
                    <option value="1000">$1,000 - Professional Revamp</option>
                    <option value="custom">Custom - Enterprise Solution</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                  Desired Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (Rush project)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="flexible">Flexible timeline</option>
                  <option value="planning">Just planning ahead</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Tell us about your project goals, current challenges, specific features you need, or any questions you have..."
                />
              </div>

              <div>
                <label htmlFor="hearAbout" className="block text-sm font-semibold text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select an option</option>
                  <option value="google-search">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral from friend/colleague</option>
                  <option value="previous-client">Previous client</option>
                  <option value="online-ad">Online Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach that ensures your project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-600 inline-block">
                    {step.duration}
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-orange-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our React website development services.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Business Hours & Availability
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Monday - Friday</div>
                    <div className="text-gray-600">9:00 AM - 6:00 PM EST</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Saturday</div>
                    <div className="text-gray-600">10:00 AM - 2:00 PM EST</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-gray-400" />
                  <div>
                    <div className="font-semibold text-gray-900">Sunday</div>
                    <div className="text-gray-600">Closed (Emergency support available)</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">Quick Response Guarantee</h3>
                </div>
                <p className="text-gray-600">
                  We respond to all inquiries within 24 hours during business days, often much sooner. For urgent matters, call us directly.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Free Website Audit</h3>
                    <p className="text-gray-600">We'll analyze your current website and identify opportunities for improvement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No Obligation Consultation</h3>
                    <p className="text-gray-600">Discuss your project goals and get expert advice with no pressure to commit.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Detailed Proposal</h3>
                    <p className="text-gray-600">Receive a comprehensive proposal with timeline, pricing, and project scope.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="#contact-form"
                  className="bg-gradient-to-r from-blue-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                >
                  Start Your Free Audit
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}