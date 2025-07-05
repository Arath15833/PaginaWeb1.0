import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeSection from './components/HomeSection';
import SorteosSection from './components/SorteosSection';
import ResultadosSection from './components/ResultadosSection';
import AdminSection from './components/AdminSection';
import ContactSection from './components/ContactSection';
import PaymentSection from './components/PaymentSection';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [winningCombinations, setWinningCombinations] = useState({
    1: 'Pendiente',
    2: 'Pendiente',
    3: 'Pendiente',
  });

  const setWinningCombination = (sorteoId, combination) => {
    setWinningCombinations(prev => ({
      ...prev,
      [sorteoId]: combination,
    }));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeSection setCurrentPage={setCurrentPage} />;
      case 'sorteos':
        return <SorteosSection setCurrentPage={setCurrentPage} />;
      case 'resultados':
        return <ResultadosSection winningCombinations={winningCombinations} />;
      case 'admin':
        return <AdminSection setWinningCombination={setWinningCombination} />;
      case 'contact':
        return <ContactSection />;
      case 'payment':
        return <PaymentSection setCurrentPage={setCurrentPage} />;
      default:
        return <HomeSection setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
      <LayoutHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16 sm:pt-20"> {/* Ajuste de padding para móviles */}
        {renderPage()}
      </main>
    </div>
  );
};

export default App;

// DONE