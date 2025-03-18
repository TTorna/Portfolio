import { useEffect, useState } from 'react';

const ScrollAd = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    
    // Array de IDs de secciones en orden
    const sections = ['home', 'about', 'proyectos', 'contacto'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            // Encontrar la sección actual basada en la posición del scroll
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition + 300) {
                    // Solo aplicar efecto si entramos o salimos de la última sección
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
                    scrollToSection('contacto');
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

    const isLastSection = currentSection === sections.length - 1;

    return (
        <div>
            <a onClick={scrollToNextSection} className="fixed z-20 rotate-90 -right-[2rem] bottom-[8rem]">
                <span className={`flex flex-row scroll-animado gap-3 text-xs cursor-pointer transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {isLastSection ? (
                        <>
                            <img className="intermitente -rotate-180 ml-[3rem]" src="../public/Arrow.png" />
                            TOP
                        </>
                    ) : (
                        <>
                            SCROLL DOWN
                            <img className="intermitente" src="../public/Arrow.png" />
                        </>
                    )}
                </span>
            </a>
        </div>
    );
};

export default ScrollAd;