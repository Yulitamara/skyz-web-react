import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// Sales
import Sales from "./pages/products/sales/Sales";
import LeadManagement from "./pages/products/sales/LeadManagement";
import OpportunityManagement from "./pages/products/sales/OpportunityManagement";
import SalesManagement from "./pages/products/sales/SalesManagement";
import ContactManagement from "./pages/products/sales/ContactManagement";
import MeetingsManagement from "./pages/products/sales/MeetingsManagement";
import PerformanceManagement from "./pages/products/sales/PerformanceManagement";
import SkyzSalesCloud from "./pages/products/sales/SkyzSalesCloud";
import SkyzSalesMobile from "./pages/products/sales/SkyzSalesMobile";
import SalesWorkflow from "./pages/products/sales/SalesWorkflow";
import EmailIntegration from "./pages/products/sales/EmailIntegration";
import InformationSharing from "./pages/products/sales/InformationSharing";
import CalendarSharing from "./pages/products/sales/CalendarSharing";
import SocialSharing from "./pages/products/sales/SocialSharing";
import ForecastSales from "./pages/products/sales/ForecastSales";
import ReportsAndDashboards from "./pages/products/sales/ReportsAndDashboards";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/products/skyz-sales/sales/" element={<Sales />} />
          <Route
            path="/products/skyz-sales/lead-management/"
            element={<LeadManagement />}
          />
          <Route
            path="/products/skyz-sales/opportunity-management/"
            element={<OpportunityManagement />}
          />
          <Route
            path="/products/skyz-sales/sales-management/"
            element={<SalesManagement />}
          />
          <Route
            path="/products/skyz-sales/contact-management/"
            element={<ContactManagement />}
          />
          <Route
            path="/products/skyz-sales/meetings-management/"
            element={<MeetingsManagement />}
          />
          <Route
            path="/products/skyz-sales/performance-management/"
            element={<PerformanceManagement />}
          />
          <Route
            path="/products/skyz-sales/skyz-sales-cloud/"
            element={<SkyzSalesCloud />}
          />
          <Route
            path="/products/skyz-sales/skyz-sales-mobile/"
            element={<SkyzSalesMobile />}
          />
          <Route
            path="/products/skyz-sales/sales-workflow/"
            element={<SalesWorkflow />}
          />
          <Route
            path="/products/skyz-sales/email-integration/"
            element={<EmailIntegration />}
          />
          <Route
            path="/products/skyz-sales/information-sharing/"
            element={<InformationSharing />}
          />
          <Route
            path="/products/skyz-sales/calendar-sharing/"
            element={<CalendarSharing />}
          />
          <Route
            path="/products/skyz-sales/social-sharing/"
            element={<SocialSharing />}
          />
          <Route
            path="/products/skyz-sales/forecast-sales/"
            element={<ForecastSales />}
          />
          <Route
            path="/products/skyz-sales/reports-and-dashboards/"
            element={<ReportsAndDashboards />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
