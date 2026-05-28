import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import LoadingScreen from '../components/LoadingScreen';
import CookieBanner from '../components/CookieBanner';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import BackToTop from '../components/BackToTop';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only show loading screen once per browser session
    const hasLoaded = sessionStorage.getItem('appLoaded');
    if (!hasLoaded) {
      setLoading(true);
    }
    setMounted(true);
  }, []);

  const handleLoadingDone = () => {
    sessionStorage.setItem('appLoaded', 'true');
    setLoading(false);
  };

  // Don't render until mounted (prevents SSR mismatch with sessionStorage)
  if (!mounted) return null;

  return (
    <>
      {loading && <LoadingScreen onDone={handleLoadingDone} />}
      {!loading && (
        <>
          <Component {...pageProps} />
          <CookieBanner />
          <FloatingWhatsApp />
          <BackToTop />
        </>
      )}
    </>
  );
}

export default MyApp;
