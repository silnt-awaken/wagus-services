import { create } from 'zustand';

export interface Referral {
  id: string;
  referrerEmail: string;
  businessName: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  websiteUrl?: string;
  serviceNeeds: string;
  status: 'pending' | 'contacted' | 'converted' | 'rejected';
  dateSubmitted: string;
  dateConverted?: string;
  rewardEarned?: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  company: string;
  totalReferrals: number;
  successfulReferrals: number;
  maintenanceCredits: number;
  tier: 'bronze' | 'silver' | 'gold';
  joinDate: string;
}

export interface ReferralReward {
  id: string;
  userId: string;
  referralId: string;
  creditsEarned: number;
  dateEarned: string;
  expirationDate: string;
  isRedeemed: boolean;
  dateRedeemed?: string;
}

interface ReferralStore {
  // User state
  currentUser: User | null;
  isAuthenticated: boolean;
  
  // Referral data
  referrals: Referral[];
  rewards: ReferralReward[];
  
  // UI state
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setUser: (user: User) => void;
  logout: () => void;
  addReferral: (referral: Omit<Referral, 'id' | 'dateSubmitted'>) => void;
  updateReferralStatus: (id: string, status: Referral['status']) => void;
  addReward: (reward: Omit<ReferralReward, 'id'>) => void;
  redeemReward: (rewardId: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  generateReferralLink: (userId: string) => string;
  getTierProgress: (successfulReferrals: number) => { current: string; next: string | null; progress: number };
  calculateMaintenanceCredits: (successfulReferrals: number) => number;
}

export const useReferralStore = create<ReferralStore>((set, get) => ({
  // Initial state
  currentUser: null,
  isAuthenticated: false,
  referrals: [],
  rewards: [],
  isLoading: false,
  error: null,

  // Actions
  setUser: (user) => set({ currentUser: user, isAuthenticated: true }),
  
  logout: () => set({ currentUser: null, isAuthenticated: false }),
  
  addReferral: (referralData) => {
    const newReferral: Referral = {
      ...referralData,
      id: crypto.randomUUID(),
      dateSubmitted: new Date().toISOString(),
      status: 'pending'
    };
    set((state) => ({ referrals: [...state.referrals, newReferral] }));
  },
  
  updateReferralStatus: (id, status) => {
    set((state) => ({
      referrals: state.referrals.map((referral) =>
        referral.id === id
          ? {
              ...referral,
              status,
              dateConverted: status === 'converted' ? new Date().toISOString() : referral.dateConverted
            }
          : referral
      )
    }));
    
    // If converted, update user stats and add reward
    if (status === 'converted') {
      const { currentUser } = get();
      if (currentUser) {
        const newSuccessfulReferrals = currentUser.successfulReferrals + 1;
        const creditsEarned = get().calculateMaintenanceCredits(newSuccessfulReferrals) - 
                             get().calculateMaintenanceCredits(currentUser.successfulReferrals);
        
        set((state) => ({
          currentUser: {
            ...currentUser,
            successfulReferrals: newSuccessfulReferrals,
            maintenanceCredits: currentUser.maintenanceCredits + creditsEarned,
            tier: get().getTierProgress(newSuccessfulReferrals).current as 'bronze' | 'silver' | 'gold'
          }
        }));
        
        // Add reward record
        const reward: ReferralReward = {
          id: crypto.randomUUID(),
          userId: currentUser.id,
          referralId: id,
          creditsEarned,
          dateEarned: new Date().toISOString(),
          expirationDate: new Date(Date.now() + 24 * 30 * 24 * 60 * 60 * 1000).toISOString(), // 24 months
          isRedeemed: false
        };
        
        set((state) => ({ rewards: [...state.rewards, reward] }));
      }
    }
  },
  
  addReward: (rewardData) => {
    const newReward: ReferralReward = {
      ...rewardData,
      id: crypto.randomUUID()
    };
    set((state) => ({ rewards: [...state.rewards, newReward] }));
  },
  
  redeemReward: (rewardId) => {
    set((state) => ({
      rewards: state.rewards.map((reward) =>
        reward.id === rewardId
          ? { ...reward, isRedeemed: true, dateRedeemed: new Date().toISOString() }
          : reward
      )
    }));
  },
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  setError: (error) => set({ error }),
  
  generateReferralLink: (userId) => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/referral?ref=${userId}`;
  },
  
  getTierProgress: (successfulReferrals) => {
    if (successfulReferrals >= 6) {
      return { current: 'gold', next: null, progress: 100 };
    } else if (successfulReferrals >= 3) {
      return { current: 'silver', next: 'gold', progress: ((successfulReferrals - 3) / 3) * 100 };
    } else {
      return { current: 'bronze', next: 'silver', progress: (successfulReferrals / 3) * 100 };
    }
  },
  
  calculateMaintenanceCredits: (successfulReferrals) => {
    if (successfulReferrals === 0) return 0;
    if (successfulReferrals === 1) return 1;
    if (successfulReferrals === 2) return 2;
    if (successfulReferrals === 3) return 4;
    // 4+ referrals: 4 + (successfulReferrals - 3) * 3
    return 4 + (successfulReferrals - 3) * 3;
  }
}));

// Mock data for development
export const initializeMockData = () => {
  const mockUser: User = {
    id: 'user-1',
    email: 'john@example.com',
    name: 'John Smith',
    company: 'Tech Solutions Inc',
    totalReferrals: 5,
    successfulReferrals: 3,
    maintenanceCredits: 4,
    tier: 'silver',
    joinDate: '2024-01-15T00:00:00.000Z'
  };
  
  const mockReferrals: Referral[] = [
    {
      id: 'ref-1',
      referrerEmail: 'john@example.com',
      businessName: 'Digital Marketing Pro',
      contactPerson: 'Sarah Johnson',
      contactEmail: 'sarah@digitalmarketingpro.com',
      contactPhone: '+1-555-0123',
      websiteUrl: 'https://digitalmarketingpro.com',
      serviceNeeds: 'E-commerce website development',
      status: 'converted',
      dateSubmitted: '2024-01-20T10:00:00.000Z',
      dateConverted: '2024-02-01T14:30:00.000Z',
      rewardEarned: 1
    },
    {
      id: 'ref-2',
      referrerEmail: 'john@example.com',
      businessName: 'Local Restaurant Chain',
      contactPerson: 'Mike Rodriguez',
      contactEmail: 'mike@localrestaurant.com',
      contactPhone: '+1-555-0456',
      serviceNeeds: 'Restaurant website with online ordering',
      status: 'pending',
      dateSubmitted: '2024-02-15T09:15:00.000Z'
    }
  ];
  
  useReferralStore.getState().setUser(mockUser);
  mockReferrals.forEach(referral => {
    useReferralStore.setState((state) => ({
      referrals: [...state.referrals, referral]
    }));
  });
};