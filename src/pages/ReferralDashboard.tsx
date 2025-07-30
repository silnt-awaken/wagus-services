import { useEffect, useState } from 'react';
import { Gift, Users, Trophy, TrendingUp, Copy, Share2, QrCode } from 'lucide-react';
import { toast } from 'sonner';
import { useReferralStore, initializeMockData } from '@/hooks/useReferralStore';
import QRCode from 'qrcode';

const ReferralDashboard = () => {
  const {
    currentUser,
    isAuthenticated,
    referrals,
    rewards,
    generateReferralLink,
    getTierProgress
  } = useReferralStore();
  
  const [referralLink, setReferralLink] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);

  useEffect(() => {
    // Initialize mock data for development
    if (!isAuthenticated) {
      initializeMockData();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (currentUser) {
      const link = generateReferralLink(currentUser.id);
      setReferralLink(link);
      
      // Generate QR code
      QRCode.toDataURL(link, { width: 200, margin: 2 })
        .then(url => setQrCodeUrl(url))
        .catch(err => console.error('QR Code generation failed:', err));
    }
  }, [currentUser, generateReferralLink]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      toast.success('Referral link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  const shareReferralLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'WAGUS Services Referral',
          text: 'Check out WAGUS Services for professional web development!',
          url: referralLink
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      copyToClipboard();
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Required</h2>
          <p className="text-gray-600">Please log in to access your referral dashboard.</p>
        </div>
      </div>
    );
  }

  const userReferrals = referrals.filter(ref => ref.referrerEmail === currentUser.email);
  const pendingReferrals = userReferrals.filter(ref => ref.status === 'pending').length;
  const convertedReferrals = userReferrals.filter(ref => ref.status === 'converted').length;
  const tierProgress = getTierProgress(currentUser.successfulReferrals);
  const availableCredits = rewards
    .filter(reward => reward.userId === currentUser.id && !reward.isRedeemed)
    .reduce((sum, reward) => sum + reward.creditsEarned, 0);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'gold': return 'text-yellow-600 bg-yellow-100';
      case 'silver': return 'text-gray-600 bg-gray-100';
      default: return 'text-amber-600 bg-amber-100';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'gold': return '🏆';
      case 'silver': return '🥈';
      default: return '🥉';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Referral Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back, {currentUser.name}! Track your referrals and earn maintenance credits.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Referrals */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Referrals</p>
                <p className="text-3xl font-bold text-gray-900">{userReferrals.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Successful Conversions */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Successful Conversions</p>
                <p className="text-3xl font-bold text-green-600">{convertedReferrals}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          {/* Pending Referrals */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Referrals</p>
                <p className="text-3xl font-bold text-amber-600">{pendingReferrals}</p>
              </div>
              <div className="p-3 bg-amber-100 rounded-full">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </div>

          {/* Maintenance Credits */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Credits</p>
                <p className="text-3xl font-bold text-purple-600">{availableCredits}</p>
                <p className="text-xs text-gray-500">months</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Gift className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tier Progress */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Your Tier Status</h2>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getTierColor(tierProgress.current)}`}>
                {getTierIcon(tierProgress.current)} {tierProgress.current.toUpperCase()}
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress to {tierProgress.next || 'Max Tier'}</span>
                  <span>{Math.round(tierProgress.progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${tierProgress.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className={`p-3 rounded-lg ${tierProgress.current === 'bronze' ? 'bg-amber-50 border-2 border-amber-200' : 'bg-gray-50'}`}>
                  <div className="text-lg">🥉</div>
                  <div className="text-xs font-medium">Bronze</div>
                  <div className="text-xs text-gray-500">1-2 referrals</div>
                </div>
                <div className={`p-3 rounded-lg ${tierProgress.current === 'silver' ? 'bg-gray-50 border-2 border-gray-300' : 'bg-gray-50'}`}>
                  <div className="text-lg">🥈</div>
                  <div className="text-xs font-medium">Silver</div>
                  <div className="text-xs text-gray-500">3-5 referrals</div>
                </div>
                <div className={`p-3 rounded-lg ${tierProgress.current === 'gold' ? 'bg-yellow-50 border-2 border-yellow-300' : 'bg-gray-50'}`}>
                  <div className="text-lg">🏆</div>
                  <div className="text-xs font-medium">Gold</div>
                  <div className="text-xs text-gray-500">6+ referrals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Link Generator */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Share Your Referral Link</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Unique Referral Link
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={referralLink}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={shareReferralLink}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Link
                </button>
                
                <button
                  onClick={() => setShowQrCode(!showQrCode)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <QrCode className="h-4 w-4" />
                </button>
              </div>
              
              {showQrCode && qrCodeUrl && (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <img src={qrCodeUrl} alt="Referral QR Code" className="mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Scan to visit your referral link</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent Referrals */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Referrals</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Business
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reward
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userReferrals.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No referrals yet. Start referring businesses to earn maintenance credits!
                    </td>
                  </tr>
                ) : (
                  userReferrals.slice(0, 5).map((referral) => (
                    <tr key={referral.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{referral.businessName}</div>
                          <div className="text-sm text-gray-500">{referral.serviceNeeds}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">{referral.contactPerson}</div>
                          <div className="text-sm text-gray-500">{referral.contactEmail}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          referral.status === 'converted' ? 'bg-green-100 text-green-800' :
                          referral.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          referral.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {referral.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(referral.dateSubmitted).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {referral.rewardEarned ? `${referral.rewardEarned} month${referral.rewardEarned > 1 ? 's' : ''}` : '-'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralDashboard;