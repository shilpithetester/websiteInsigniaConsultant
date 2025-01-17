import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './pages/Banner';
import GooglMarketing from './pages/GooglMarketing';
import Layout from './components/Layout';
import MarketingStrategies from './pages/MarketingStrategies';
import BusinessAutomation from './pages/BusinessAutomation';
import Branding from './pages/Branding';
import MarketingAutomation from './pages/MarketingAutomation';
import ProcessAutomation from './pages/ProcessAutomation';
import LogoDesigning from './pages/LogoDesigning';
import Portfolio from './pages/Portfolio';
import BrandStratergy from './pages/BrandStratergy';
import BrandGuideline from './pages/BrandGuideline';
import MarketingCollateral from './pages/MarketingCollateral';
import Seo from './pages/Seo';
import PaytoPay from './pages/PaytoPay';
import DisplayAdvertising from './pages/DisplayAdvertising';
import ShopingAds from './pages/ShopingAds';
import VideoAds from './pages/VideoAds';
import AppPromotionAds from './pages/AppPromotionAds';
import LocalService from './pages/LocalService';
import GoogleBusiness from './pages/GoogleBusiness';
import LeadGeneration from './pages/LeadGeneration';
import ContactUs from './pages/ContactUs';
import BookConsultant from './pages/BookConsultant';
import AboutUs from './pages/AboutUs';


function App() {

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/google-marketing" element={<GooglMarketing />} />
        </Routes>
      </Router> */}

<Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Banner />} />
          <Route path="/google-marketing" element={<GooglMarketing />} />
          <Route path="/marketing-stratergies" element={<MarketingStrategies />} />
          <Route path="/business-automation" element={<BusinessAutomation />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/marketing-automation" element={<MarketingAutomation />} />
          <Route path="/process-automation" element={<ProcessAutomation />} />
          <Route path="/logo-design" element={<LogoDesigning />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/brand-stratergy" element={<BrandStratergy />} />
          <Route path="/brand-guideline" element={<BrandGuideline />} />
          <Route path="/marketing-collateral" element={<MarketingCollateral />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/paytopay" element={<PaytoPay />} />
          <Route path="/display-advertising" element={<DisplayAdvertising />} />
          <Route path="/shoping-ads" element={<ShopingAds />} />
          <Route path="/video-ads" element={<VideoAds />} />
          <Route path="/promotion-ads" element={<AppPromotionAds />} />
          <Route path="/local-service-ads" element={<LocalService />} />
          <Route path="/google-my-business" element={<GoogleBusiness />} />
          <Route path="/lead-generation" element={<LeadGeneration />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/book-consultant" element={<BookConsultant />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
