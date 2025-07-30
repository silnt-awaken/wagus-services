import { useState } from 'react';
import { ArrowLeft, Gift, Calendar, Clock, CheckCircle, Star, Trophy, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useReferralStore } from '@/hooks/useReferralStore';
import { toast } from 'sonner';

const RewardManagement = () => {
  const navigate = useNavigate();
  const { currentUser, rewards, redeemReward, getTierProgress } = useReferralStore();
  const [activeTab, setActiveTab] = useState<'credits' | 'history' | 'tiers'>('credits');

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Required</h2>
          <p className="text-gray-600">Please log in to access your rewards.</p>
        </div>
      </div>
    );
  }

  const userRewards = rewards.filter(reward => reward.userId === currentUser.id);
  const availableCredits = userRewards
    .filter(reward => !reward.isRedeemed && new Date(reward.expirationDate) > new Date())
    .reduce((sum, reward) => sum + reward.creditsEarned, 0);
  const expiredCredits = userRewards
    .filter(reward => !reward.isRedeemed && new Date(reward.expirationDate) <= new Date())
    .reduce((sum, reward) => sum + reward.creditsEarned, 0);
  const redeemedCredits = userRewards
    .filter(reward => reward.isRedeemed)
    .reduce((sum, reward) => sum + reward.creditsEarned, 0);
  const totalEarned = userRewards.reduce((sum, reward) => sum + reward.creditsEarned, 0);

  const tierProgress = getTierProgress(currentUser.successfulReferrals);

  const handleRedeemCredit = (rewardId: string) => {
    redeemReward(rewardId);
    toast.success('Maintenance credit redeemed successfully!');
  };

  const getTierBenefits = (tier: string) => {
    switch (tier) {
      case 'gold':
        return [
          'Exclusive consultation access',
          'Bonus maintenance months',
          'Early feature access',
          'Priority support',
          'Extended maintenance credits',
          'Basic maintenance credits',
          'Referral tracking'
        ];
      case 'silver':
        return [
          'Priority support',
          'Extended maintenance credits',
          'Basic maintenance credits',
          'Referral tracking'
        ];
      default:
        return [
          'Basic maintenance credits',
          'Referral tracking'
        ];
    }
  };

  const renderCreditsTab = () => (
    <div className="space-y-6">
      {/* Credit Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Available Credits</p>
              <p className="text-3xl font-bold">{availableCredits}</p>
              <p className="text-green-100 text-xs">months</p>
            </div>
            <Gift className="h-8 w-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Earned</p>
              <p className="text-3xl font-bold">{totalEarned}</p>
              <p className="text-blue-100 text-xs">months</p>
            </div>
            <Star className="h-8 w-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Redeemed</p>
              <p className="text-3xl font-bold">{redeemedCredits}</p>
              <p className="text-purple-100 text-xs">months</p>
            </div>
            <CheckCircle className="h-8 w-8 text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm font-medium">Expired</p>
              <p className="text-3xl font-bold">{expiredCredits}</p>
              <p className="text-red-100 text-xs">months</p>
            </div>
            <Clock className="h-8 w-8 text-red-200" />
          </div>
        </div>
      </div>

      {/* Available Credits List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Available Maintenance Credits</h3>
          <p className="text-sm text-gray-600">Credits you can redeem for maintenance services</p>
        </div>
        
        <div className="divide-y divide-gray-200">
          {userRewards
            .filter(reward => !reward.isRedeemed && new Date(reward.expirationDate) > new Date())
            .length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-500">
              <Gift className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p>No available credits at the moment.</p>
              <p className="text-sm">Refer more businesses to earn maintenance credits!</p>
            </div>
          ) : (
            userRewards
              .filter(reward => !reward.isRedeemed && new Date(reward.expirationDate) > new Date())
              .map((reward) => {
                const daysUntilExpiry = Math.ceil(
                  (new Date(reward.expirationDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                );
                
                return (
                  <div key={reward.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-100 rounded-full">
                        <Gift className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {reward.creditsEarned} Month{reward.creditsEarned > 1 ? 's' : ''} Maintenance Credit
                        </p>
                        <p className="text-sm text-gray-500">
                          Earned on {new Date(reward.dateEarned).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-gray-400">
                          Expires in {daysUntilExpiry} days
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRedeemCredit(reward.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Redeem
                    </button>
                  </div>
                );
              })
          )}
        </div>
      </div>

      {/* Expiring Soon Warning */}
      {userRewards.some(reward => {
        const daysUntilExpiry = Math.ceil(
          (new Date(reward.expirationDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
        );
        return !reward.isRedeemed && daysUntilExpiry <= 30 && daysUntilExpiry > 0;
      }) && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-amber-600 mr-2" />
            <div>
              <h4 className="font-medium text-amber-900">Credits Expiring Soon</h4>
              <p className="text-sm text-amber-700">
                You have credits expiring within 30 days. Make sure to redeem them before they expire!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderHistoryTab = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Reward History</h3>
        <p className="text-sm text-gray-600">Complete history of your earned and redeemed rewards</p>
      </div>
      
      <div className="divide-y divide-gray-200">
        {userRewards.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-500">
            <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p>No reward history yet.</p>
            <p className="text-sm">Start referring businesses to build your reward history!</p>
          </div>
        ) : (
          userRewards
            .sort((a, b) => new Date(b.dateEarned).getTime() - new Date(a.dateEarned).getTime())
            .map((reward) => {
              const isExpired = !reward.isRedeemed && new Date(reward.expirationDate) <= new Date();
              
              return (
                <div key={reward.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        reward.isRedeemed ? 'bg-purple-100' :
                        isExpired ? 'bg-red-100' : 'bg-green-100'
                      }`}>
                        {reward.isRedeemed ? (
                          <CheckCircle className="h-5 w-5 text-purple-600" />
                        ) : isExpired ? (
                          <Clock className="h-5 w-5 text-red-600" />
                        ) : (
                          <Gift className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {reward.creditsEarned} Month{reward.creditsEarned > 1 ? 's' : ''} Maintenance Credit
                        </p>
                        <p className="text-sm text-gray-500">
                          Earned on {new Date(reward.dateEarned).toLocaleDateString()}
                        </p>
                        {reward.isRedeemed && reward.dateRedeemed && (
                          <p className="text-xs text-purple-600">
                            Redeemed on {new Date(reward.dateRedeemed).toLocaleDateString()}
                          </p>
                        )}
                        {isExpired && (
                          <p className="text-xs text-red-600">
                            Expired on {new Date(reward.expirationDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        reward.isRedeemed ? 'bg-purple-100 text-purple-800' :
                        isExpired ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {reward.isRedeemed ? 'Redeemed' : isExpired ? 'Expired' : 'Available'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );

  const renderTiersTab = () => (
    <div className="space-y-6">
      {/* Current Tier Status */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Your Current Tier</h3>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">
                {tierProgress.current === 'gold' ? '🏆' :
                 tierProgress.current === 'silver' ? '🥈' : '🥉'}
              </span>
              <span className="text-2xl font-bold capitalize">{tierProgress.current}</span>
            </div>
            <p className="text-blue-100 mt-2">
              {currentUser.successfulReferrals} successful referral{currentUser.successfulReferrals !== 1 ? 's' : ''}
            </p>
          </div>
          {tierProgress.next && (
            <div className="text-right">
              <p className="text-blue-100 text-sm">Progress to {tierProgress.next}</p>
              <div className="w-32 bg-blue-500 rounded-full h-2 mt-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${tierProgress.progress}%` }}
                ></div>
              </div>
              <p className="text-blue-100 text-xs mt-1">{Math.round(tierProgress.progress)}%</p>
            </div>
          )}
        </div>
      </div>

      {/* Tier Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bronze Tier */}
        <div className={`bg-white rounded-lg shadow-sm border-2 p-6 ${
          tierProgress.current === 'bronze' ? 'border-amber-300 bg-amber-50' : 'border-gray-200'
        }`}>
          <div className="text-center mb-4">
            <div className="text-3xl mb-2">🥉</div>
            <h3 className="text-lg font-semibold text-gray-900">Bronze</h3>
            <p className="text-sm text-gray-600">1-2 successful referrals</p>
          </div>
          <ul className="space-y-2 text-sm">
            {getTierBenefits('bronze').map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Silver Tier */}
        <div className={`bg-white rounded-lg shadow-sm border-2 p-6 ${
          tierProgress.current === 'silver' ? 'border-gray-400 bg-gray-50' : 'border-gray-200'
        }`}>
          <div className="text-center mb-4">
            <div className="text-3xl mb-2">🥈</div>
            <h3 className="text-lg font-semibold text-gray-900">Silver</h3>
            <p className="text-sm text-gray-600">3-5 successful referrals</p>
          </div>
          <ul className="space-y-2 text-sm">
            {getTierBenefits('silver').map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Gold Tier */}
        <div className={`bg-white rounded-lg shadow-sm border-2 p-6 ${
          tierProgress.current === 'gold' ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'
        }`}>
          <div className="text-center mb-4">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="text-lg font-semibold text-gray-900">Gold</h3>
            <p className="text-sm text-gray-600">6+ successful referrals</p>
          </div>
          <ul className="space-y-2 text-sm">
            {getTierBenefits('gold').map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next Tier Requirements */}
      {tierProgress.next && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">
            Unlock {tierProgress.next.charAt(0).toUpperCase() + tierProgress.next.slice(1)} Tier
          </h3>
          <p className="text-blue-800 mb-4">
            You need {tierProgress.current === 'bronze' ? 3 - currentUser.successfulReferrals : 6 - currentUser.successfulReferrals} more successful referral{(tierProgress.current === 'bronze' ? 3 - currentUser.successfulReferrals : 6 - currentUser.successfulReferrals) !== 1 ? 's' : ''} to reach {tierProgress.next} tier.
          </p>
          <button
            onClick={() => navigate('/referral-submission')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Submit a Referral
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/referral-dashboard')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </button>
          
          <h1 className="text-3xl font-bold text-gray-900">Reward Management</h1>
          <p className="text-gray-600 mt-2">
            Manage your maintenance credits, view reward history, and track tier progress.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'credits', label: 'Credits', icon: Gift },
                { id: 'history', label: 'History', icon: Calendar },
                { id: 'tiers', label: 'Tiers', icon: Trophy }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as typeof activeTab)}
                  className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'credits' && renderCreditsTab()}
        {activeTab === 'history' && renderHistoryTab()}
        {activeTab === 'tiers' && renderTiersTab()}
      </div>
    </div>
  );
};

export default RewardManagement;