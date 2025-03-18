import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-white py-6 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Copyright y texto */}
        <div className="flex items-center text-[#0E0E0E]">
          <span className="text-sm font-medium">© 2025 Tomas Tornamira</span>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/TTorna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src="/public/github.svg" alt="GitHub" className="w-5 h-5 opacity-80 hover:opacity-100" />
          </a>
          <a 
            href="https://www.linkedin.com/in/tomas-tornamira-118428239/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src="/public/Linkedin.svg" alt="LinkedIn" className="w-5 h-5 opacity-80 hover:opacity-100" />
          </a>
          <a 
            href="mailto:Tototornamira@gmail.com"
            className="transition-transform hover:scale-110"
          >
            <img src="/public/gmail.svg" alt="Email" className="w-5 h-5 opacity-80 hover:opacity-100" />
          </a>
          <a 
            href="https://x.com/TTorna_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src="/public/X.svg" alt="X (Twitter)" className="w-5 h-5 opacity-80 hover:opacity-100" />
          </a>
        </div>

        {/* Botón TOP */}
        <button 
          onClick={scrollToTop}
          className="flex flex-col items-center gap-1 text-[#0E0E0E] hover:text-[#793FED] transition-colors group"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          <span className="text-xs font-medium">TOP</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer; 