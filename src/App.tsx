import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StoreSection } from './components/StoreSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ModalType } from './types';

export default function App() {
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleOpenPrivacy = () => setModalType('privacy');
  const handleOpenTerms = () => setModalType('terms');
  const handleCloseModal = () => setModalType(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <Header onOpenPrivacyModal={handleOpenPrivacy} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Short Hero */}
        <Hero />

        {/* Store Cards Section */}
        <StoreSection />
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenPrivacyModal={handleOpenPrivacy}
        onOpenTermsModal={handleOpenTerms}
      />

      {/* Privacy and Terms Modal */}
      <LegalModal modalType={modalType} onClose={handleCloseModal} />
    </div>
  );
}
