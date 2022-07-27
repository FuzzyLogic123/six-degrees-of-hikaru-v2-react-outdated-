
function MenuBar() {
    return (
        <div className="pb-5 relative flex flex-row justify-evenly w-full items-center ">
            <div className="text-center font-lexendZetta text-white sm:my-14 mx-6 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                <a href="#home">
                    home
                </a>
            </div>
            <div className="text-center font-lexendZetta text-white sm:my-14 mx-6 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                <a href="#six-degrees">
                    six degrees
                </a>
            </div>
            <div className="text-center font-lexendZetta text-white sm:my-14 mx-6 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                <a href="#about">
                    about
                </a>
            </div>
        </div >
    );
}

export default MenuBar;