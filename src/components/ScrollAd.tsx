import { useEffect, useState } from 'react';

const ScrollAd = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    
    // Array de IDs de secciones en orden
    const sections = ['home', 'about', 'proyectos', 'contacto', 'footer'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Encontrar la sección actual basada en la posición del scroll
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    
                    // Si estamos en el footer, verificar si es visible en la pantalla
                    if (sections[i] === 'footer') {
                        // Requiere que se vea al menos 1rem del footer
                        const footerVisible = scrollPosition + windowHeight >= sectionTop + 16; // 1rem = 16px
                        if (footerVisible) {
                            if (currentSection !== sections.length - 1) {
                                setIsVisible(false);
                                setTimeout(() => {
                                    setCurrentSection(sections.length - 1);
                                    setIsVisible(true);
                                }, 300);
                            } else {
                                setCurrentSection(sections.length - 1);
                            }
                            break;
                        }
                    } else if (sectionTop <= scrollPosition + 300) {
                        if ((i === sections.length - 1) !== (currentSection === sections.length - 1)) {
                            setIsVisible(false);
                            setTimeout(() => {
                                setCurrentSection(i);
                                setIsVisible(true);
                            }, 300);
                        } else {
                            setCurrentSection(i);
                        }
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentSection]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setCurrentSection(sections.indexOf(sectionId));
        }
    };

    const scrollToNextSection = () => {
        const isGoingToLast = currentSection === sections.length - 2;
        const isLeavingLast = currentSection === sections.length - 1;

        if (isGoingToLast || isLeavingLast) {
            setIsVisible(false);
            setTimeout(() => {
                if (currentSection === sections.length - 1) {
                    scrollToSection('home');
                } else {
                    scrollToSection('footer');
                }
                setIsVisible(true);
            }, 300);
        } else {
            if (currentSection === sections.length - 1) {
                scrollToSection('home');
            } else {
                const nextSection = sections[currentSection + 1];
                scrollToSection(nextSection);
            }
        }
    };

    const isFooter = currentSection === sections.length - 1;

    return (
        <div>
            <a onClick={scrollToNextSection} className="fixed z-20 rotate-90 -right-[2rem] bottom-[8rem]">
                <span className={`flex flex-row scroll-animado gap-3 text-xs cursor-pointer transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {isFooter ? (
                        <>
                            <img className="intermitente -rotate-180 ml-[3rem]" src="./Arrow.png" />
                            <span className='text-black font-medium'>TOP</span>
                        </>
                    ) : (
                        <>
                            SCROLL DOWN
                            <img className="intermitente" src="./Arrow.png" />
                        </>
                    )}
                </span>
            </a>
        </div>
    );
};

export default ScrollAd;