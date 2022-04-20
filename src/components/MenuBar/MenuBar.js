function MenuBar() {
    return ( 
        <div className="relative flex flex-row justify-evenly w-full">
            <div className="text-center font-lexendZetta text-white md:my-14 m-6 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                home
            </div>
            <div className="text-center font-lexendZetta text-white md:my-14 m-6 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                six degrees
            </div>
            <div className="text-center font-lexendZetta text-white md:my-14 m-6 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                about
            </div>
        </div>
     );
}

export default MenuBar;