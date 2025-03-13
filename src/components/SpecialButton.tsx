const SpecialButton = () => {
    return (
        <div className="boton-animado flex flex-row justify-left items-center pl-[1rem] pt-[1rem]">
            <button className="-mb-[0.1rem]"> SEE MY WORKS</button>
            <div className="absolute circ -ml-[1rem] -z-10 bg-violet-900 w-[2.25rem] h-[2.25rem] rounded-full"></div>
            <img className="w-[2rem] ml-[1rem]" src="../public/Arrow.png" />
        </div>
    );
};

export default SpecialButton;