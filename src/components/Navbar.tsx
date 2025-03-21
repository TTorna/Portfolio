import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar () {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 500;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Cerrar menú móvil si está abierto
  };

  const navClasses = `fixed w-full top-0 z-[100] transition-all duration-300 ${
    scrolled
      ? ''
      : ''
  }`;

  {/*const bg_nav = `md:bg-transparent ${
    isOpen
      ? 'bg-[#0E0E0E]'
      : 'bg-transparent'
  }`;*/}

  const bg_nav = ` ${
    isOpen
      ? 'before:w-full before:h-full'
      : 'before:h-[0px] h-[fit-content]'
  }`;

  const linkClasses = `transition-colors text-white cursor-pointer`;

  return (
    <>
        <nav className={navClasses+' nav-contenedor tansicion '+bg_nav}>
          <div className={"mx-auto font-bold px-4 py-2 bg-transparent"}>
            <div className={"flex md:pt-[0rem] pt-[1rem] justify-between h-20 bg-transparent"}>
              {/* Logo */}
              <div className="flex items-center space-x-2 z-[7]">
                <img src='./Kill_Contract.webp' className={`h-16 w-16 text-white`} />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8 px-8">
                <a onClick={() => scrollToSection('home')} className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado cursor-pointer'>HOME</div>
                  <div className='efecto-tachado'></div>
                </a>
                <a onClick={() => scrollToSection('about')} className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado cursor-pointer'>SOBRE MI</div>
                  <div className='efecto-tachado'></div>
                </a>
                <a onClick={() => scrollToSection('proyectos')} className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado cursor-pointer'>PROYECTOS</div>
                </a>
                <a onClick={() => scrollToSection('contacto')} className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado cursor-pointer'>CONTACTO</div>
                  <div className='efecto-tachado'></div>
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center pr-[1rem] z-[7]">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={linkClasses}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className={`md:hidden bg-transparent`}>
              <div className="flex flex-col items-center justify-center pb-[10rem] w-full h-[100vh] gap-4 pt-2 pb-3 space-y-1 nav-mobile">
                <a 
                  onClick={() => scrollToSection('home')} 
                  className={`w-full flex justify-center items-center font-medium contenedor-tachado before:bg-[#161616] before:left-[25%] hover:before:w-[50%] text-[2rem] z-[7] ${linkClasses} opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.1s_forwards]`}
                >
                  HOME
                </a>

                <a 
                  onClick={() => scrollToSection('about')} 
                  className={`w-full flex justify-center items-center font-medium contenedor-tachado before:bg-[#161616] before:left-[25%] hover:before:w-[50%] text-[2rem] z-[7] ${linkClasses} opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.2s_forwards]`}
                >
                  SOBRE MI
                </a>

                <a 
                  onClick={() => scrollToSection('proyectos')} 
                  className={`w-full flex justify-center items-center font-medium contenedor-tachado before:bg-[#161616] before:left-[25%] hover:before:w-[50%] text-[2rem] z-[7] ${linkClasses} opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.3s_forwards]`}
                >
                  PROYECTOS
                </a>
                
                <a 
                  onClick={() => scrollToSection('contacto')} 
                  className={`w-full flex justify-center items-center font-medium contenedor-tachado before:bg-[#161616] before:left-[25%] hover:before:w-[50%] text-[2rem] z-[7] ${linkClasses} opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.4s_forwards]`}
                >
                  CONTACTO
                </a>
              </div>
            </div>
          )}
        </nav>
    </>
  );
}

export default Navbar;