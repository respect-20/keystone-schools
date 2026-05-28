import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import News from '../components/News';
import EventsCalendar from '../components/EventsCalendar';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import RegistrationCTA from '../components/RegistrationCTA';
import Footer from '../components/Footer';
import RegistrationModal from '../components/RegistrationModal';

export default function Home() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Keystone Schools - Excellence in Education</title>
        <meta name="description" content="Keystone Schools offers world-class education for Forms 1-4. Modern learning environment, experienced faculty, and student development programs." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="bg-white">
        <Navigation onRegisterClick={() => setIsRegistrationOpen(true)} />
        <Hero onRegisterClick={() => setIsRegistrationOpen(true)} />
        <About />
        <Programs />
        <Features />
        <Testimonials />
        <Gallery />
        <News />
        <EventsCalendar />
        <FAQ />
        <Newsletter />
        <RegistrationCTA onRegisterClick={() => setIsRegistrationOpen(true)} />
        <Footer />

        {isRegistrationOpen && (
          <RegistrationModal
            isOpen={isRegistrationOpen}
            onClose={() => setIsRegistrationOpen(false)}
          />
        )}
      </div>
    </>
  );
}
