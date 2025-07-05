import React from 'react';

const SorteosSection = ({ setCurrentPage }) => {
  const sorteos = [
    {
      id: 1,
      name: 'Sorteo Millonario Dorado',
      date: '2024-07-20',// fecha del sorteo
      prize: '$1000MXN',//precio del boleto
      description: 'El sorteo que puede cambiar tu vida para siempre. ¡No te lo pierdas!',
      color: 'bg-yellow-500', // Dorado vibrante
      textColor: 'text-black',
    },
    {
      id: 2,
      name: 'Gran Premio Plateado',
      date: '2024-07-25', // fecha del sorteo
      prize: '$5,000,000 MXN', // precio del boleto
      description: 'Una oportunidad de oro para ganar un premio espectacular.',
      color: 'bg-gray-300', // Plateado más claro
      textColor: 'text-black',
    },
    {
      id: 3,
      name: 'Mega Sorteo Negro',
      date: '2024-07-30',
      prize: '$2,500,000 MXN',
      description: 'Participa y sé uno de los afortunados ganadores de este gran sorteo.',
      color: 'bg-gray-900', // Negro sólido
      textColor: 'text-white',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-10 sm:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-yellow-500">
          Nuestros Sorteos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sorteos.map((sorteo) => (
            <div
              key={sorteo.id}
              className={`${sorteo.color} ${sorteo.textColor} p-6 sm:p-8 rounded-2xl shadow-xl
                transform hover:scale-105 transition-all duration-300 ease-in-out
                flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{sorteo.name}</h3>
                <p className="text-base sm:text-lg mb-1 sm:mb-2">
                  <span className="font-semibold">Fecha:</span> {sorteo.date}
                </p>
                <p className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4">
                  <span className="font-semibold">Premio:</span> {sorteo.prize}
                </p>
                <p className="text-sm sm:text-md mb-4 sm:mb-6">{sorteo.description}</p>
              </div>
              <button
                onClick={() => setCurrentPage('payment')}
                className={`w-full py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg shadow-md
                  ${sorteo.color === 'bg-yellow-500' ? 'bg-black text-yellow-500 hover:bg-gray-800' :
                    sorteo.color === 'bg-gray-300' ? 'bg-black text-gray-300 hover:bg-gray-800' :
                    'bg-white text-gray-900 hover:bg-gray-200'}
                  transition-colors duration-300`}
              >
                Comprar Boleto
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SorteosSection;