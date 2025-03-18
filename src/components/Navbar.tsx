import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

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

  const navClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled
      ? ''
      : ''
  }`;

  const linkClasses = `transition-colors text-white cursor-pointer`;

  return (
    <>
        <nav className={navClasses}>
          <div className="mx-auto font-bold px-4 py-2">
            <div className="flex justify-between h-20">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img src='./Kill_Contract.webp' className={`h-16 w-16 text-white`} />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8 px-8">
                <a onClick={() => scrollToSection('home')} className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado cursor-pointer'>HOME</div>
                  <div className='efecto-tachado'></div>
                </a>
                <a onClick={() => scrollToSection('about')} className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado cursor-pointer'>ABOUT</div>
                  <div className='efecto-tachado'></div>
                </a>
                <a onClick={() => scrollToSection('proyectos')} className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado cursor-pointer'>PROYECTS</div>
                </a>
                <a onClick={() => scrollToSection('contacto')} className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado cursor-pointer'>CONTACT</div>
                  <div className='efecto-tachado'></div>
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
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
            <div className={`md:hidden border-t ${scrolled ? 'bg-pink-500' : 'bg-white'}`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="space-y-2">
                  <a onClick={() => scrollToSection('home')} className={`w-full flex justify-between items-center font-medium px-3 py-2 ${linkClasses}`}>HOME</a>
                </div>

                <div className="space-y-2">
                  <a onClick={() => scrollToSection('about')} className={`w-full flex justify-between items-center font-medium px-3 py-2 ${linkClasses}`}>ABOUT</a>
                </div>

                <a onClick={() => scrollToSection('proyectos')} className={`block font-medium px-3 py-2 ${linkClasses}`}>PROYECTOS</a>
                
                <a onClick={() => scrollToSection('contacto')} className={`w-full flex justify-between items-center px-1 py-2 ${linkClasses}`}>
                  <button className={`flex w-full justify-start items-center gap-2 rounded-full px-4 py-2 font-medium ${
                      scrolled ? 'bg-white text-pink-500 hover:text-pink-700' : 'bg-teal-500 text-white'
                    }`}>
                    <MapPin className="h-6 w-6" />
                    <span>CONTACT</span>
                  </button>
                </a>
              </div>
            </div>
          )}
        </nav>
    </>
  );
}

export default Navbar;