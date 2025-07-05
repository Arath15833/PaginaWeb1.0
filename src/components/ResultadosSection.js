import React from 'react';

const ResultadosSection = ({ winningCombinations }) => {
  const sorteos = [
    { id: 1, name: 'Sorteo Millonario Dorado', date: '2024-07-20' },
    { id: 2, name: 'Gran Premio Plateado', date: '2024-07-25' },
    { id: 3, name: 'Mega Sorteo Negro', date: '2024-07-30' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-gray-800 text-white py-10 sm:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-300">
          Resultados de Sorteos Anteriores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sorteos.map((sorteo) => (
            <div
              key={sorteo.id}
              className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl
                transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-yellow-500">{sorteo.name}</h3>
              <p className="text-base sm:text-lg mb-3 sm:mb-4 text-gray-300">
                <span className="font-semibold">Fecha:</span> {sorteo.date}
              </p>
              <div className="mt-4 sm:mt-6">
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-300">Combinación Ganadora:</h4>
                <p className="text-3xl sm:text-4xl font-extrabold text-center text-yellow-500 bg-gray-700 p-3 sm:p-4 rounded-lg tracking-wider">
                  {winningCombinations[sorteo.id] || 'Pendiente'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultadosSection;