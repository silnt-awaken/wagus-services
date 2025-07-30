import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Layout from "@/components/Layout";
import ReferralDashboard from "@/pages/ReferralDashboard";
import ReferralSubmission from "@/pages/ReferralSubmission";
import RewardManagement from "@/pages/RewardManagement";
import ReferralLanding from "@/pages/ReferralLanding";
import AdminPanel from "@/pages/AdminPanel";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/referrals" element={<ReferralDashboard />} />
          <Route path="/referrals/submit" element={<ReferralSubmission />} />
          <Route path="/referrals/rewards" element={<RewardManagement />} />
          <Route path="/referrals/landing" element={<ReferralLanding />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Layout>
      <Toaster position="top-right" richColors />
    </Router>
  );
}
