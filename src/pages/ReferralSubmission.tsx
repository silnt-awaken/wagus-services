import { useState } from 'react';
import { ArrowLeft, Building2, User, Mail, Phone, Globe, FileText, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useReferralStore } from '@/hooks/useReferralStore';
import { useNavigate } from 'react-router-dom';

interface FormData {
  businessName: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  websiteUrl: string;
  serviceNeeds: string;
  additionalNotes: string;
}

const ReferralSubmission = () => {
  const navigate = useNavigate();
  const { currentUser, addReferral, isLoading } = useReferralStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    websiteUrl: '',
    serviceNeeds: '',
    additionalNotes: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const serviceOptions = [
    'Website Development',
    'E-commerce Platform',
    'Mobile App Development',
    'Web Application',
    'Website Redesign',
    'SEO Optimization',
    'Digital Marketing',
    'Maintenance & Support',
    'Custom Solution',
    'Other'
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.businessName.trim()) {
        newErrors.businessName = 'Business name is required';
      }
      if (!formData.contactPerson.trim()) {
        newErrors.contactPerson = 'Contact person is required';
      }
    }

    if (step === 2) {
      if (!formData.contactEmail.trim()) {
        newErrors.contactEmail = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
        newErrors.contactEmail = 'Please enter a valid email address';
      }
      if (!formData.contactPhone.trim()) {
        newErrors.contactPhone = 'Phone number is required';
      }
    }

    if (step === 3) {
      if (!formData.serviceNeeds.trim()) {
        newErrors.serviceNeeds = 'Please specify the service needs';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (!currentUser) {
      toast.error('Please log in to submit a referral');
      return;
    }

    if (!validateStep(3)) {
      return;
    }

    try {
      addReferral({
        referrerEmail: currentUser.email,
        businessName: formData.businessName,
        contactPerson: formData.contactPerson,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
        websiteUrl: formData.websiteUrl || undefined,
        serviceNeeds: formData.serviceNeeds,
        status: 'pending'
      });

      toast.success('Referral submitted successfully!');
      navigate('/referral-dashboard');
    } catch (error) {
      toast.error('Failed to submit referral. Please try again.');
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Required</h2>
          <p className="text-gray-600">Please log in to submit a referral.</p>
        </div>
      </div>
    );
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Information</h2>
        <p className="text-gray-600">Tell us about the business you'd like to refer.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Name *
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.businessName ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter business name"
            />
          </div>
          {errors.businessName && (
            <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Person *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={formData.contactPerson}
              onChange={(e) => handleInputChange('contactPerson', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.contactPerson ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter contact person's name"
            />
          </div>
          {errors.contactPerson && (
            <p className="mt-1 text-sm text-red-600">{errors.contactPerson}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Website URL (Optional)
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="url"
              value={formData.websiteUrl}
              onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Details</h2>
        <p className="text-gray-600">How can we reach the business contact?</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={formData.contactEmail}
              onChange={(e) => handleInputChange('contactEmail', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.contactEmail ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="contact@business.com"
            />
          </div>
          {errors.contactEmail && (
            <p className="mt-1 text-sm text-red-600">{errors.contactEmail}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              value={formData.contactPhone}
              onChange={(e) => handleInputChange('contactPhone', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.contactPhone ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          {errors.contactPhone && (
            <p className="mt-1 text-sm text-red-600">{errors.contactPhone}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Requirements</h2>
        <p className="text-gray-600">What services does this business need?</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Service Need *
          </label>
          <select
            value={formData.serviceNeeds}
            onChange={(e) => handleInputChange('serviceNeeds', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.serviceNeeds ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.serviceNeeds && (
            <p className="mt-1 text-sm text-red-600">{errors.serviceNeeds}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes (Optional)
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Any additional information about their needs, timeline, or special requirements..."
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Review & Submit</h2>
        <p className="text-gray-600">Please review the referral details before submitting.</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Business Information</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p><span className="font-medium">Name:</span> {formData.businessName}</p>
              <p><span className="font-medium">Contact:</span> {formData.contactPerson}</p>
              {formData.websiteUrl && (
                <p><span className="font-medium">Website:</span> {formData.websiteUrl}</p>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Contact Details</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p><span className="font-medium">Email:</span> {formData.contactEmail}</p>
              <p><span className="font-medium">Phone:</span> {formData.contactPhone}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Service Requirements</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <p><span className="font-medium">Primary Need:</span> {formData.serviceNeeds}</p>
            {formData.additionalNotes && (
              <p><span className="font-medium">Notes:</span> {formData.additionalNotes}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• We'll reach out to the referred business within 24 hours</li>
          <li>• You'll receive updates on the referral status</li>
          <li>• Earn maintenance credits when they become a client</li>
          <li>• Track your progress in the referral dashboard</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/referral-dashboard')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </button>
          
          <h1 className="text-3xl font-bold text-gray-900">Submit a Referral</h1>
          <p className="text-gray-600 mt-2">
            Refer a business to WAGUS Services and earn maintenance credits.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  step <= currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Business Info</span>
            <span>Contact Details</span>
            <span>Service Needs</span>
            <span>Review</span>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg font-medium ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50"
              >
                <Send className="h-4 w-4 mr-2" />
                {isLoading ? 'Submitting...' : 'Submit Referral'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralSubmission;