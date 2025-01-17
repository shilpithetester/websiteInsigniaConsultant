import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './pages/Banner';
import GooglMarketing from './pages/GooglMarketing';
import Layout from './components/Layout';
import MarketingStrategies from './pages/MarketingStrategies';
import BusinessAutomation from './pages/BusinessAutomation';
import Branding from './pages/Branding';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Banner />} />
            <Route path="/google-marketing" element={<GooglMarketing />} />
            <Route path="/marketing-stratergies" element={<MarketingStrategies />} />
            <Route path="/business-automation" element={<BusinessAutomation />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
