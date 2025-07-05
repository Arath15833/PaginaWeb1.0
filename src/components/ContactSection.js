import React from 'react';

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-10 sm:py-20 px-4 flex items-center justify-center">
      <div className="container mx-auto max-w-lg bg-gray-800 p-6 sm:p-10 rounded-2xl shadow-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-yellow-500">
          Contáctanos
        </h2>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-300">
          ¿Tienes preguntas o necesitas ayuda? ¡Estamos aquí para ti!
        </p>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <svg className="w-6 h-6 mr-0 sm:mr-3 mb-2 sm:mb-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <p className="text-base sm:text-xl font-semibold text-gray-200">contacto@sorteosfortuna.com</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <svg className="w-6 h-6 mr-0 sm:mr-3 mb-2 sm:mb-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <p className="text-base sm:text-xl font-semibold text-gray-200">+52 55 1234 5678</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;