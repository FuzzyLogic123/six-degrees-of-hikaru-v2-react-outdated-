function MenuBar() {
    return ( 
        <div className="absolute flex flex-row justify-evenly w-full">
            <a className="font-lexendZetta text-white m-8 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                home
            </a>
            <a className="font-lexendZetta text-white m-8 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                six degrees
            </a>
            <a className="font-lexendZetta text-white m-8 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                about
            </a>
        </div>
     );
}

export default MenuBar;