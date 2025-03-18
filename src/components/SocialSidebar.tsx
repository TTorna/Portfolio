import { useEffect, useState } from 'react';

const SocialSidebar = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight) {
          // Calcula qué tan dentro de la vista está la sección
          const distance = windowHeight - rect.top;
          const percentage = Math.min(distance / (windowHeight * 0.5), 1);
          setOpacity(1 - percentage);
        } else {
          setOpacity(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamada inicial para establecer la opacidad correcta
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed left-0 hover:left-5 duration-300 top-1/2 -translate-y-1/2 z-50 transition-opacity"
      style={{ opacity, transition: 'opacity 0.3s ease-out' }}
    >
      <div className="color-chupete rounded-r-md hover:rounded-l-md p-2 shadow-lg">
        <div className="flex flex-col gap-4">
          <a
            href="https://www.linkedin.com/in/tomas-tornamira-118428239/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-125 duration-300 flex items-center group"
          >
            <img src='./Linkedin.svg' className="w-[2rem]" alt="LinkedIn" />
          </a>
          <a
            href="mailto:Tototornamira@gmail.com"
            className="text-white hover:scale-125  duration-300 flex items-center group"
          >
            <img src='./gmail.svg' className="w-[2rem]" alt="Gmail" />
          </a>
          <a
            href="https://github.com/TTorna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-125  duration-300 flex items-center group"
          >
            <img src='./github.svg' className="w-[2rem]" alt="Github" />
          </a>
          <a
            href="https://x.com/TTorna_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-125 duration-300 flex items-center group"
          >
            <img src='./X.svg' className="w-[2rem]" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;