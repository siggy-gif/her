import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnvelopeGrid from "./components/EnvelopeGrid";
import LetterView from "./components/LetterView";
import MomentsGallery from "./components/MomentsGallery";
import MusicToggle from "./components/MusicToggle";

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [currentView, setCurrentView] = useState('letters'); // 'letters' or 'moments'
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="romantic-app">
          {/* Background with lily overlay */}
          <div className="background-overlay">
            <img 
              src="https://images.unsplash.com/photo-1522248053824-07f955114b0f" 
              alt="background" 
              className="background-lily"
            />
          </div>

          {/* Music Toggle */}
          <MusicToggle 
            isPlaying={isMusicPlaying}
            onToggle={setIsMusicPlaying}
          />

          {/* Navigation */}
          <nav className="romantic-nav">
            <button 
              className={`nav-btn ${currentView === 'letters' ? 'active' : ''}`}
              onClick={() => {
                setCurrentView('letters');
                setSelectedLetter(null);
              }}
            >
              💌 Letters
            </button>
            <button 
              className={`nav-btn ${currentView === 'moments' ? 'active' : ''}`}
              onClick={() => {
                setCurrentView('moments');
                setSelectedLetter(null);
              }}
            >
              🌸 Moments
            </button>
          </nav>

          {/* Main Content */}
          <main className="main-content">
            {selectedLetter ? (
              <LetterView 
                letter={selectedLetter}
                onClose={() => setSelectedLetter(null)}
              />
            ) : currentView === 'letters' ? (
              <EnvelopeGrid onLetterSelect={setSelectedLetter} />
            ) : (
              <MomentsGallery />
            )}
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;