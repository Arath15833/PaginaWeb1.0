import React, { useState } from 'react';

const AdminSection = ({ setWinningCombination }) => {
  const [sorteoId, setSorteoId] = useState('');
  const [combination, setCombination] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sorteoId || !combination) {
      setMessage('Por favor, selecciona un sorteo y escribe la combinación.');
      return;
    }
    if (!/^\d{5}$/.test(combination)) {
      setMessage('La combinación debe ser de 5 dígitos numéricos.');
      return;
    }
    setWinningCombination(parseInt(sorteoId), combination);
    setMessage(`Combinación ${combination} publicada para el sorteo ${sorteoId}.`);
    setSorteoId('');
    setCombination('');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-10 sm:py-20 px-4 flex items-center justify-center">
      <div className="container mx-auto max-w-lg bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-yellow-500">
          Panel de Administrador
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="sorteoId" className="block text-base sm:text-lg font-medium text-gray-300 mb-2">
              Seleccionar Sorteo:
            </label>
            <select
              id="sorteoId"
              value={sorteoId}
              onChange={(e) => setSorteoId(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            >
              <option value="">-- Selecciona un sorteo --</option>
              <option value="1">Sorteo Millonario Dorado</option>
              <option value="2">Gran Premio Plateado</option>
              <option value="3">Mega Sorteo Negro</option>
            </select>
          </div>
          <div>
            <label htmlFor="combination" className="block text-base sm:text-lg font-medium text-gray-300 mb-2">
              Combinación Ganadora (5 dígitos):
            </label>
            <input
              type="text"
              id="combination"
              value={combination}
              onChange={(e) => setCombination(e.target.value)}
              maxLength="5"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              placeholder="Ej: 19620"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-2 sm:py-3 rounded-lg text-base sm:text-lg shadow-md
              hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Publicar Combinación
          </button>
        </form>
        {message && (
          <p className="mt-4 sm:mt-6 text-center text-base sm:text-lg font-semibold text-gray-300">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default AdminSection;