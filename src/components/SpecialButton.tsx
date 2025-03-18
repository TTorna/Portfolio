interface SpecialButtonProps {
    text?: string;
    circleColor?: string;
    textColor?: string;
    arrowColor?: string;
    classStyle?: string;
    link?: string;
}

const SpecialButton = ({ 
    text = "SEE MY WORKS",
    circleColor = "bg-violet-900",
    textColor = "text-white",
    arrowColor = "brightness-100",
    classStyle = "boton-animado",
    link
}: SpecialButtonProps) => {
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank');
        } else {
            const projectsSection = document.getElementById('proyectos');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className={`${classStyle} flex flex-row justify-left items-center pl-[1rem] pt-[1rem]`}>
            <button 
                onClick={handleClick} 
                className={`-mb-[0.1rem] segundafuente ${textColor}`}
            >
                {text}
            </button>
            <div className={`absolute circ -ml-[1rem] -z-10 ${circleColor} w-[2.25rem] h-[2.25rem] rounded-full`}></div>
            <img 
                className={`w-[2rem] ml-[1rem] ${arrowColor}`} 
                src="../public/Arrow.png" 
                alt="arrow"
            />
        </div>
    );
};

export default SpecialButton;