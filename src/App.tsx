import SocialSidebar from "./components/SocialSidebar";
import Navbar from "./components/Navbar";
import ScrollAd from "./components/ScrollAd";
import SpecialButton from "./components/SpecialButton";
import Skills from "./components/Skills";
import { TarjetaIndividual } from "./components/Tarjeta";
import { useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';


function App() {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add('visible');
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px',
      }
    );

    const contactContainer = document.getElementById('contact-container');
    if (contactContainer) {
      observer.observe(contactContainer);
    }

    return () => {
      if (contactContainer) {
        observer.unobserve(contactContainer);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <header className="shadow-lg">
          <Navbar />
      </header>
      <SocialSidebar />
      <ScrollAd />
      <main className="w-3/4 min-h-screen mx-auto flex flex-col justify-center items-center">
        <section id="home" className="w-3/4 min-h-screen z-10 flex md:flex-row-reverse flex-col justify-center items-center">
          <img src="./Iso_Artwork_Full.PNG" className="md:h-1/2 md:w-1/2 h-4/5 w-4/5 z-10 md:pt-10 pt-4 animacion" alt="avatar" />
          <div className="absolute -z-10 md:w-[25rem] w-[15rem] md:h-[25rem] h-[15rem] md:mb-[5rem] mb-[14rem] bg-zinc-900 w-md rounded-full"></div>
          <div className="font-bold">
            <h1 className="md:text-5xl text-4xl md:pb-12 pb-8">{t('welcome')}</h1>
            <h3 className="md:pb-12 pb-8 md:w-[25rem] w-[15rem]">{t('greeting')} <span className="text-purple-400 md:text-xl text-lg bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Tomas Tornamira.</span> {t('role')}</h3>
            <SpecialButton text={t('projectsTitle')} />
          </div>
        </section>
        <section id="about" className="w-screen gap-4 bg-[#161616] min-h-screen z-10 flex flex-col justify-center items-center">
          <div className="md:w-3/4 w-full min-h-screen gap-4 flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center mt-[4rem]">
              <div className="absolute -z-10 bg-zinc-900 w-[10rem] h-[10rem] rounded-full"></div>
              <img src="./Focusing_Spray.webp" className="h-2/5 w-2/5 z-10" alt="avatar" />
            </div>
            <h1 className="text-2xl font-bold">{t('aboutTitle')} <span className="text-purple-400 text-2xl">Tomas Tornamira</span></h1>
            <h3 className="text-sm font-bold md:w-1/3 sm:w-1/2 w-2/3">{t('aboutDescription')}<br /><br />{t('hobbies')}<br /><br />{t('dedication')}<br /><br /></h3>
            
            <ol className="relative border-s md:w-1/3 sm:w-1/2 w-3/4 border-purple-700">
              <li className="ms-4">
                      <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-purple-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-purple-500">{t('workExperience')}</time>
                      <h3 className="text-lg font-semibold text-white">{t('workTitle')}</h3>
                      <ul className="list-disc ml-[1rem] mt-1 mb-4 text-base font-normal text-gray-400">
                        <li className="mb-1">{t('workDescription1')}</li>
                        <li className="mb-1">{t('workDescription2')}</li>
                        <li className="">{t('workDescription3')}</li>
                      </ul>
              </li>
            </ol>
          </div>
          <div className="md:w-3/4 w-full mt-[4rem] gap-4 flex flex-col justify-start items-center">
            <h1 className="text-3xl w-3/4 text-center font-bold">{t('academicTitle')}</h1>

            <ol className="relative border-s md:w-1/3 sm:w-1/2 w-3/4 mt-[3rem] border-purple-700">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-purple-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-purple-500">{t('school1Date')}</time>
                    <h3 className="text-lg font-semibold text-white">{t('school1')}</h3>
                    <ul className="list-disc ml-[2rem] mt-1 mb-4 text-base font-normal text-gray-400">
                      <li className="mb-1">{t('school1Description')}</li>
                    </ul>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-purple-700 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-purple-500">{t('school2Date')}</time>
                    <h3 className="text-lg font-semibold text-white">{t('school2')}</h3>
                    <ul className="list-disc ml-[2rem] mt-1 mb-4 text-base font-normal text-gray-400">
                      <li className="mb-1">{t('school2Description1')}</li>
                      <li className="mb-1">{t('school2Description2')}</li>
                    </ul>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-purple-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-purple-500">{t('school3Date')}</time>
                    <h3 className="text-lg font-semibold text-white">{t('school3')}</h3>
                    <ul className="list-disc ml-[2rem] mt-1 mb-4 text-base font-normal text-gray-400">
                      <li className="mb-1">{t('school3Description1')}</li>
                      <li className="mb-1">{t('school3Description2')}</li>
                      <li className="">{t('school3Description3')}</li>
                    </ul>
                </li>
            </ol>
          </div>
          <div className="md:w-3/4 w-full z-10 gap-5 flex flex-col justify-start items-center mt-[7rem] md:mb-[0rem] mb-[4rem]">
            <h1 className="text-3xl text-center font-bold">{t('skillsTitle')}</h1>

            <h2 className="text-2xl mt-[2rem] font-bold text-violet-500">{t('keySkillsTitle')}</h2>
            <span className="grid w-1/2 md:w-3/4 justify-center items-center md:grid-cols-2 grid-cols-1 md:ml-[10rem] ml-[2rem] mt-[1rem] gap-[1rem] md:gap-2 gap-x-[2rem] w-[fit-content] lista-circulo-deco">
              <h3 className="font-bold w-[fit-content] lista-circulo">{t('keySkill1')}</h3>
              <h3 className="font-bold w-[fit-content] lista-circulo">{t('keySkill2')}</h3>
              <h3 className="font-bold w-[fit-content] lista-circulo">{t('keySkill3')}</h3>
              <h3 className="font-bold w-[fit-content] lista-circulo">{t('keySkill4')}</h3>
              <h3 className="font-bold w-[fit-content] lista-circulo">{t('keySkill5')}</h3>
            </span>

            <h2 className="text-2xl mt-[4rem] font-bold text-violet-500">SKILLS</h2>
            <Skills />
          </div>
        </section>
        <section id="proyectos" className="w-screen min-h-screen z-10 bg-[#101010] flex flex-col md:pt-[0rem] pt-[4rem] justify-center items-center">
          <div className="flex md:flex-row-reverse flex-col justify-center items-end">
            <img src="https://static.wikia.nocookie.net/valorant/images/8/87/In_the_Zone_Spray.gif/" className="md:h-3/5 md:w-3/5 h-4/5 w-4/5 -ml-[3.25rem] z-10" alt="avatar" />
            <h1 className="text-3xl font-bold md:ml-[8rem] ml-[0rem]">{t('projectsTitle')}</h1>
            <div className="absolute -z-10 bg-zinc-900 md:w-[14rem] md:h-[14rem] w-[10rem] h-[10rem] -mb-[2rem] md:ml-[8rem] ml-[0rem] rounded-full"></div>
          </div>
          <div className="w-2/3 h-2/3 gap-[2.5rem] flex md:flex-row flex-col justify-center items-center mt-[4rem]">
            <TarjetaIndividual 
              numero="/01"
              titulo={t('project1Title')}
              tecnologias={["React", "TypeScript", "Tailwind"]}
              colorFondo="#8A2BE2"
              imagenUrl="./Vickens.png"
              link="https://vickens.vercel.app"
            />
            <TarjetaIndividual 
              numero="/02"
              titulo={t('project2Title')}
              tecnologias={["React", "JavaScript", "CSS"]}
              colorFondo="#8A2BE2"
              imagenUrl="./Tantos.png"
              link="https://Tantos.vercel.app"
            />
            <TarjetaIndividual 
              numero="/03"
              titulo={t('project3Title')}
              tecnologias={["Front-End", "Back-End", "IA"]}
              colorFondo="#8A2BE2"
              imagenUrl="./valo.png"
              link="https://valorantinfo.vercel.app"
            />
          </div>
          <div className="w-3/4 flex flex-col justify-center mt-[4rem] md:mb-[0rem] mb-[4rem]">
            <h2 className="text-2xl font-bold pb-[1rem]">{t('projectsRepositories')}</h2>
            <h4 className="font-bold"><span className="text-gray-500 mr-[0.5rem]">/ 01 </span><span className="text-gray-300 mr-[0.7rem] cursor-pointer">{"<src />"} </span><a href="https://github.com/TTorna/Heladeria" className="text-xl text-gray-100 cursor-pointer underline underline-offset-2 hover:ml-[0.5rem] before:hover:bg-gray-400 transition-all duration-300">VICKENS</a></h4>
            <h4 className="font-bold"><span className="text-gray-500 mr-[0.5rem]">/ 02 </span><span className="text-gray-300 mr-[0.7rem] cursor-pointer">{"<src />"} </span><a href="https://github.com/TTorna/Tantos" className="text-xl text-gray-100 cursor-pointer underline underline-offset-2 hover:ml-[0.5rem] before:hover:bg-gray-400 transition-all duration-300">TANTOS</a></h4>
            <h4 className="font-bold"><span className="text-gray-500 mr-[0.5rem]">/ 03 </span><span className="text-gray-300 mr-[0.7rem] cursor-pointer">{"<src />"} </span><a href="https://github.com/TTorna/Valorant-Info-Api" className="text-xl text-gray-100 cursor-pointer underline underline-offset-2 hover:ml-[0.5rem] before:hover:bg-gray-400 transition-all duration-300">VALORANT INFO</a></h4>
          </div>
        </section>
        <section id="contacto" className="w-screen md:min-h-screen min-h-[fit-content] md:pt-[0rem] pt-[4rem] md:pb-[0rem] pb-[4rem] z-10 bg-[#161616] flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold pb-[3rem]">{t('contactTitle')}</h2>
          <div 
            className="flex flex-col gap-2 sm:w-[23rem] w-[18rem] before:w-full sm:h-[16rem] h-[12rem] before:h-full contact-container bg-[#2f1464] rounded-md shadow-lg"
            id="contact-container"
          >
              <a
                href="https://www.linkedin.com/in/tomas-tornamira-118428239/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-4 ml-[1.2rem] mt-[0.3rem] items-center redsocial-container"
              >
                <img src='./linkedin.svg' className="sm:w-[3rem] w-[2rem] icono-redsocial" alt="LinkedIn" />
                <h3 className="sm:text-md text-sm sm:overflow-visible overflow-hidden text-black font-bold texto-redsocial">/Tomas Tornamira</h3>
              </a>
              <a
                href="mailto:Tototornamira@gmail.com"
                className="flex flex-row gap-4 ml-[1.2rem] mt-[0.3rem] items-center redsocial-container"
              >
                <img src='./gmail.svg' className="sm:w-[3rem] w-[2rem] icono-redsocial" alt="Gmail" />
                <h3 className="sm:text-md text-sm sm:overflow-visible overflow-hidden text-black font-bold texto-redsocial">Tototornamira@gmail.com</h3>
              </a>
              <a
                href="https://github.com/TTorna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-4 ml-[1.2rem] mt-[0.3rem] items-center redsocial-container"
              >
                <img src='./github.svg' className="sm:w-[3rem] w-[2rem] icono-redsocial" alt="Github" />
                <h3 className="sm:text-md text-sm sm:overflow-visible overflow-hidden text-black font-bold texto-redsocial">/TTorna</h3>
              </a>
              <a
                href="https://x.com/TTorna_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row gap-4 ml-[1.2rem] mt-[0.3rem] items-center redsocial-container"
              >
                <img src='./X.svg' className="sm:w-[3rem] w-[2rem] icono-redsocial" alt="Twitter" />
                <h3 className="sm:text-md text-sm sm:overflow-visible overflow-hidden text-black font-bold texto-redsocial">/TTorna_</h3>
              </a>
          </div>
        </section>
        <footer id="footer" className="w-[100vw] min-h-[85vh] z-10 bg-white text-[#0E0E0E] flex flex-col justify-between items-center">
          <div className="w-full flex flex-col text-center gap-[1rem] font-bold justify-center items-center mt-[7rem] circulo-footer">
            <h1 className="text-[3rem] pb-[1rem]">{t('footerTitle')}</h1>
            <h3 className="text-[1.1rem] text-[#0E0E0E] pb-[1rem]">{t('footerDescription')}</h3>
            <SpecialButton text={t('footerButton')} link="https://www.linkedin.com/in/tomas-tornamira-118428239/" circleColor="bg-gray-400" textColor="text-black" arrowColor="brightness-0" classStyle="boton-animado-footer"/>
          </div>
          <div className="flex flex-row gap-[1rem] justify-center items-center mb-[2rem] mt-[8rem] footer-circulo">
            <span className="text-sm font-bold mr-[0.5rem]">{t('rights')}</span>
            <a href="https://www.linkedin.com/in/tomas-tornamira-118428239/" className="hover:bg-gray-300 rounded-full p-[0.25rem]" target="_blank" rel="noopener noreferrer">
              <img src='./linkedin.svg' className="w-[2rem] icono-redsocial" alt="LinkedIn" />
            </a>
            <a href="mailto:Tototornamira@gmail.com" className="hover:bg-gray-300 rounded-full p-[0.25rem]" target="_blank" rel="noopener noreferrer">
              <img src='./gmail.svg' className="w-[2rem] icono-redsocial" alt="Gmail" />
            </a>
            <a href="https://github.com/TTorna" className="hover:bg-gray-300 rounded-full p-[0.25rem]" target="_blank" rel="noopener noreferrer">
              <img src='./github.svg' className="w-[2rem] icono-redsocial" alt="Github" />
            </a>
            <a href="https://x.com/TTorna_" className="hover:bg-gray-300 rounded-full p-[0.25rem]" target="_blank" rel="noopener noreferrer">
              <img src='./X.svg' className="w-[2rem] icono-redsocial" alt="Twitter" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;