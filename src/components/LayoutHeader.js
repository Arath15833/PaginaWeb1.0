import React from 'react';

const LayoutHeader = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Sorteos', page: 'sorteos' },
    { name: 'Resultados', page: 'resultados' },
    { name: 'Contacto', page: 'contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-2 sm:mb-0">
          Sorteos de la Fortuna
        </h1>
        <nav>
          <ul className="flex flex-wrap justify-center sm:space-x-6 space-x-3">
            {navItems.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => setCurrentPage(item.page)}
                  className={`text-sm sm:text-lg font-medium transition-all duration-300 ease-in-out py-1 px-2 sm:py-0 sm:px-0
                    ${currentPage === item.page
                      ? 'text-yellow-500 border-b-2 border-yellow-500'
                      : 'text-gray-300 hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500'
                    }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;