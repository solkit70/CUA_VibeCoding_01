import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import TranslatorPage from './pages/translator/TranslatorPage';
import PlaygroundPage from './pages/playground/PlaygroundPage';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/translator" element={<TranslatorPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
