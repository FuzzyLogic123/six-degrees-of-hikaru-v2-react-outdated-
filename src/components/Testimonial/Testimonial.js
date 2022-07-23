

function Testimonials({ quotes }) {
    console.log(quotes) 
    return (
        <div className="relative flex flex-row justify-evenly items-center mx-12 2xl:py-12 xl:py-0 gap-7 mt-40 py-20">
            {quotes.map((quote, i) =>
                <div key={i}>
                    <div className={`relative sm:min-w-[20rem] flex-initial ${i === 1 ? " scale-125 z-10 sm:m-28" : " opacity-90 hidden md:block"} bg-[#31415985] leading-8 p-4 sm:p-12 sm:mx-16 sm:pt-20 pt-24 text-center text-white text-xl rounded-lg`}>
                        <img src={quote[2]} alt="The Pope" className="absolute w-40 h-40 left-0 right-0 m-auto -top-24 rounded-full object-cover"/>
                        <p className="font-Outfit 2xl:text-4xl">
                            {quote[0]}
                        </p>
                        <br/>
                        <p className="sm:text-4xl text-xl font-semibold font-Ephesis tracking-[5px]">
                            {"-" + quote[1]}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Testimonials;