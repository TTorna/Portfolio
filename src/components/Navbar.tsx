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

  const navClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled
      ? ''
      : ''
  }`;

  const linkClasses = `transition-colors text-white cursor-pointer `;

  return (
    <>
        <nav className={navClasses}>
          <div className="mx-auto font-bold px-4 py-2">
            <div className="flex justify-between h-20">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                
                  <img src='../public/Kill_Contract.webp' className={`h-16 w-16 text-white`} />

              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8 px-8">
                <a href="#home" className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado'>HOME</div>
                  <div className='efecto-tachado'></div>
                </a>
                <a href="#about" className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado'>ABOUT</div>
                  <div className='efecto-tachado'></div>
                </a>
                <a href="#projects" className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado'>PROYECTS</div>
                </a>
                <a href="#contact" className={linkClasses+'flex flex-row items-center contenedor-tachado'} >
                  <div className='titulo-tachado'>CONTACT</div>
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
                {/* Home Section */}
                <div className="space-y-2">
                  
                  <a className={`w-full flex justify-between items-center font-medium px-3 py-2 ${linkClasses}`} >HOME</a>

                </div>

                {/* Sabores Section */}
                <div className="space-y-2">

                    <a className={`w-full flex justify-between items-center font-medium px-3 py-2 ${linkClasses}`} >ABOUT</a>

                </div>

                {/*<Link className={`block font-medium px-3 py-2 ${linkClasses}`} to="/nosotros">Nosotros</Link>*/}

                <a className={`block font-medium px-3 py-2 ${linkClasses}`} >PROYECTOS</a>
                
                <a className={`w-full flex justify-between items-center px-1 py-2 ${linkClasses}`} >
                  <button className={`flex w-full justify-start items-center gap-2 rounded-full px-4 py-2 font-medium ${
                      scrolled ? 'bg-white text-pink-500 hover:text-pink-700' : 'bg-teal-500 text-white'
                    }`}>
                    <MapPin className="h-6 w-6" />
                    <a>CONTACT</a>
                  </button>
                </a>
              </div>
            </div>
          )}
        </nav>
    </>
  );
};

export default Navbar;