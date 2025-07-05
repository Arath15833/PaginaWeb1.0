import React from 'react';

const PaymentSection = ({ setCurrentPage }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-10 sm:py-20 px-4 flex items-center justify-center">
      <div className="container mx-auto max-w-lg bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-yellow-500">
          Realizar Pago
        </h2>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-300">
          Para completar la compra de tu boleto, por favor realiza una transferencia a la siguiente cuenta:
        </p>
        <div className="bg-gray-700 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 shadow-inner">
          <p className="text-lg sm:text-xl font-semibold text-gray-300 mb-1 sm:mb-2">Banco:</p>
          <p className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Banco de la Fortuna S.A.</p>
          <p className="text-lg sm:text-xl font-semibold text-gray-300 mb-1 sm:mb-2">Número de Cuenta:</p>
          <p className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">1234 5678 9012 3456</p>
          <p className="text-lg sm:text-xl font-semibold text-gray-300 mb-1 sm:mb-2">CLABE Interbancaria:</p>
          <p className="text-xl sm:text-2xl font-bold text-white">012345678901234567</p>
        </div>
        <p className="text-sm sm:text-md text-gray-400 mb-6 sm:mb-8">
          Una vez realizado el depósito, tu boleto será validado y recibirás una confirmación por correo electrónico.
        </p>
        <button
          onClick={() => setCurrentPage('sorteos')}
          className="bg-yellow-500 text-black font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg shadow-lg
            hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Volver a Sorteos
        </button>
      </div>
    </section>
  );
};

export default PaymentSection;