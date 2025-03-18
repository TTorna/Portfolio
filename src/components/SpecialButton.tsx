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
        <button onClick={handleClick} className={`${classStyle} flex flex-row justify-left items-center pl-[1rem] pt-[1rem]`}>
            <span 
                className={`-mb-[0.1rem] segundafuente ${textColor}`}
            >
                {text}
            </span>
            <div className={`absolute circ -ml-[1rem] -z-10 ${circleColor} w-[2.25rem] h-[2.25rem] rounded-full`}></div>
            <img 
                className={`w-[2rem] ml-[1rem] ${arrowColor}`} 
                src="./Arrow.png" 
                alt="arrow"
            />
        </button>
    );
};

export default SpecialButton;