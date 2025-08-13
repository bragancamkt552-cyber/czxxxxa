import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LandingPageView from './pages/LandingPageView';
import LandingPageWhatsApp from './pages/LandingPageWhatsApp';
import Relaciex from './pages/Relaciex';
import SpanishMemoryLanding from './pages/SpanishMemoryLanding';
import TermsSpanish from './pages/TermsSpanish';
import PrivacySpanish from './pages/PrivacySpanish';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lp-view" element={<LandingPageView />} />
        <Route path="/lp-wpp" element={<LandingPageWhatsApp />} />
        <Route path="/gjgks-ch" element={<Relaciex />} />
        <Route path="/gjgkkks-esp" element={<SpanishMemoryLanding />} />
        <Route path="/gjgkkks-esp/terms" element={<TermsSpanish />} />
        <Route path="/gjgkkks-esp/privacy" element={<PrivacySpanish />} />
      </Routes>
    </Router>
  );
}

export default App;
