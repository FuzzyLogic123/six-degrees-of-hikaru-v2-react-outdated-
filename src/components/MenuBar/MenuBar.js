function MenuBar() {
    return ( 
        <div className="pb-5 relative flex flex-row justify-evenly w-full items-center ">
            <div className="text-center font-lexendZetta text-white sm:my-14 mx-6 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                home
            </div>
            <div className="text-center font-lexendZetta text-white sm:my-14 mx-6 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                six degrees
            </div>
            <div className="text-center font-lexendZetta text-white sm:my-14 mx-6 text-xl scale-y-75 tracking-widest hover:line-through hover:cursor-pointer">
                about
            </div>
        </div>
     );
}

export default MenuBar;