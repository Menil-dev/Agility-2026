import React, { useState } from 'react';
import LoadingIntro from './components/LoadingIntro';
import Navbar from './components/Navbar';
import ScheduleSection from './components/ScheduleSection';
import SportsGallery from './components/SportsGallery';
import RegistrationModal from './components/RegistrationModal';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { sportsData } from './data/sportsData';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedSportForRegistration, setSelectedSportForRegistration] = useState(null);

  const handleOpenRegister = (sport = null) => {
    setSelectedSportForRegistration(sport || sportsData[0]);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 relative font-sans selection:bg-[#ff1e42] selection:text-white">

      {/* Animated Loading Intro */}
      <AnimatePresence>
        {showIntro && (
          <LoadingIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <Navbar onOpenRegister={handleOpenRegister} />

          {/* Schedule Section Timeline placed first */}
          <ScheduleSection />

          {/* Sports Gallery & Registration Cards */}
          <SportsGallery onRegisterSport={(sport) => setSelectedSportForRegistration(sport)} />

          <Footer />

          {/* Registration Modal (QR code & Google Form Redirect) */}
          {selectedSportForRegistration && (
            <RegistrationModal
              sport={selectedSportForRegistration}
              onClose={() => setSelectedSportForRegistration(null)}
            />
          )}
        </motion.div>
      )}

    </div>
  );
}
