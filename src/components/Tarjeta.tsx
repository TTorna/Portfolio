import { ArrowUpRight } from 'lucide-react';
import React from 'react';

// Definición de tipos para las props
interface TarjetaProps {
  numero: string;
  titulo: string;
  tecnologias: string[];
  colorFondo?: string;
  imagenUrl?: string;
  link?: string;
}

// Componente individual para una tarjeta
export const TarjetaIndividual: React.FC<TarjetaProps> = ({ 
  numero, 
  titulo, 
  tecnologias, 
  colorFondo = "#32CD32", 
  imagenUrl,
  link = "#" 
}) => {
  return (
    <div className="bg-[transparent] cursor-pointer rounded-[0.5rem] transition-transform before:mt-[-1rem] before:ml-[-1rem] before:bg-[#242424] hover:scale-105 container-card">
      <a href={link} className="relative w-[14rem] rounded-[0.5rem] before:shadow-2xl container-card">
        {/* Círculo con número */}
        <div className="absolute top-[0.3rem] left-[0.3rem] bg-gray-300 font-bold text-black text-sm h-8 w-8 rounded-full flex items-center justify-center z-10">
          {numero}
        </div>
        
        {/* Icono de expansión */}
        <a className="absolute top-[0.3rem] right-[0.3rem] bg-transparent text-black z-10 hover:text-gray-300">
          <ArrowUpRight size={24} />
        </a>
        
        {/* Contenido central con color personalizable o imagen */}
        {imagenUrl ? (
          <div className="h-[7rem] w-[14rem] shadow-2xl rounded-[0.5rem] mb-4 overflow-hidden">
            <img 
              src={imagenUrl} 
              alt={titulo} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        ) : (
          <div 
            className="h-[7rem] w-[14rem] rounded-[0.5rem] shadow-2xl mb-4 flex items-center justify-center" 
            style={{ backgroundColor: colorFondo }}
          ></div>
        )}
        
        {/* Título del proyecto */}
        <h3 className="text-white font-bold truncate shadow-2xl text-md mt-2 mb-3">{titulo}</h3>
        
        {/* Botones de tecnologías dinámicos */}
        <div className="flex justify-between drop-shadow-2xl gap-2 mb-3">
          {tecnologias.map((tech, index) => (
            <button 
              key={index} 
              className="bg-gray-300 hover:bg-gray-400 text-gray-900 text-xs py-1 px-3 rounded-full transition-colors"
            >
              {tech}
            </button>
          ))}
        </div>
      </a>
    </div>
  );
};

// Componente que renderiza múltiples tarjetas
const Tarjeta = () => {
  // Datos de ejemplo para las tarjetas
  const proyectos = [
    {
      numero: "/01",
      titulo: "VICKENS - HELADERIA",
      tecnologias: ["React", "TypeScript", "Tailwind"],
      colorFondo: "#32CD32"
    },
    {
      numero: "/02",
      titulo: "TANTOS - ANOTADOR",
      tecnologias: ["React", "JavaScript", "CSS"],
      colorFondo: "#1a1a1a"
    },
    {
      numero: "/03",
      titulo: "GITHUB - TOMAS TORNAMIRA",
      tecnologias: ["Front-End", "Back-End", "IA"],
      colorFondo: "#0d1117"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4 mt-8 mb-12">
      {proyectos.map((proyecto, index) => (
        <TarjetaIndividual 
          key={index}
          numero={proyecto.numero}
          titulo={proyecto.titulo}
          tecnologias={proyecto.tecnologias}
          colorFondo={proyecto.colorFondo}
        />
      ))}
    </div>
  );
};

export default Tarjeta;