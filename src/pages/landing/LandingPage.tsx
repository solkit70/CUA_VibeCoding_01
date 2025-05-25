import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <h1>Catch Up AI 재미로 하는 Vibe Coding</h1>
      <div className="app-links">
        <Link to="/translator" className="app-link">
          <h2>Original Translator</h2>
          <p>Original OpenAI Realtime Console</p>
        </Link>
        <Link to="/playground" className="app-link">
          <h2>Playground</h2>
          <p>Experimental Features & Modifications</p>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
