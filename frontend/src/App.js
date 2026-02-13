import React, { useState, useEffect } from 'react';
import '@/App.css';

// Components
import LoadingScreen from './components/custom/LoadingScreen';
import CustomCursor from './components/custom/CustomCursor';
import HeroSection from './components/custom/HeroSection';
import AboutSection from './components/custom/AboutSection';
import ProjectShowcase from './components/custom/ProjectShowcase';
import FeaturesSection from './components/custom/FeaturesSection';
import ImmersiveSection from './components/custom/ImmersiveSection';
import Footer from './components/custom/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadImages = [
      'https://images.unsplash.com/photo-1692030178613-8742cdf4a1fd?crop=entropy&cs=srgb&fm=jpg&q=85&w=800',
      'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=srgb&fm=jpg&q=85&w=800'
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <div className="App bg-black min-h-screen relative" data-testid="app-container">
      {/* Noise overlay - always present */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Loading screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Main content */}
      {showContent && (
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <ProjectShowcase />
          <FeaturesSection />
          <ImmersiveSection />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;
