import React from 'react';

const HomeSection = ({ setCurrentPage }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518655048564-b7179971227b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
      <div className="relative z-10 text-center text-white p-6 sm:p-8 rounded-lg shadow-2xl bg-black bg-opacity-60 backdrop-blur-sm mx-4 sm:mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 text-yellow-500 drop-shadow-lg">
          ¡Tu Suerte Comienza Aquí!
        </h2>
        <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-200">
          Participa en nuestros sorteos exclusivos y transforma tu vida con premios increíbles.
          Cada boleto es una oportunidad de hacer tus sueños realidad.
        </p>
        <button
          onClick={() => setCurrentPage('sorteos')}
          className="bg-yellow-500 text-black font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg shadow-lg
            hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Ver Sorteos Disponibles
        </button>
      </div>
    </section>
  );
};

export default HomeSection;