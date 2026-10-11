import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import { InquiryProvider } from "./context/InquiryContext";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Insights from "./pages/Insights";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import CookiePolicy from "./pages/legal/CookiePolicy";
import Accessibility from "./pages/legal/Accessibility";
import Disclaimer from "./pages/legal/Disclaimer";
import NotFound from "./pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/privacy-policy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          <Route path="/legal/accessibility" element={<Accessibility />} />
          <Route path="/legal/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <InquiryProvider>
        <div className="grain-overlay" />
        <CustomCursor />
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </InquiryProvider>
    </HashRouter>
  );
}
