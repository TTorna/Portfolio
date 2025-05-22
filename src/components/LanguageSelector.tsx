import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1.5 rounded-md transition-all duration-300 font-medium text-sm ${
          language === 'es' 
            ? 'bg-[#793FED] text-white shadow-lg shadow-[#793FED]/30' 
            : 'bg-transparent text-white hover:bg-[#793FED]/20'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md transition-all duration-300 font-medium text-sm ${
          language === 'en' 
            ? 'bg-[#793FED] text-white shadow-lg shadow-[#793FED]/30' 
            : 'bg-transparent text-white hover:bg-[#793FED]/20'
        }`}
      >
        EN
      </button>
    </div>
  );
}; 