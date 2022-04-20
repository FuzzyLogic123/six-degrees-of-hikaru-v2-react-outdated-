function MenuBar() {
    return ( 
        <div className="relative flex flex-row justify-evenly w-full h-24">
            <a className="text-center font-lexendZetta text-white m-8 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                home
            </a>
            <a className="text-center font-lexendZetta text-white m-8 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                six degrees
            </a>
            <a className="text-center font-lexendZetta text-white m-8 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                about
            </a>
        </div>
     );
}

export default MenuBar;