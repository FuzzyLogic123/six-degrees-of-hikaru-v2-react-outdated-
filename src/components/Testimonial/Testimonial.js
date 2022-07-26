import React from 'react';
import { ReactComponent as Quote } from "../../svg/quote.svg";

function Testimonial({ quote }) {
    return (
        <div>
            <div className={`relative bg-[#31415985] leading-8 p-4 pt-24 text-center text-white text-xl rounded-lg sm:max-w-[13rem] lg:max-w-md 2xl:max-w-2xl mb-32 sm:mb-0 lg:m-6`}>
                <Quote className='sm:hidden lg:block z-20 stroke-white stroke-2 fill-transparent opacity-90 absolute lg:-left-8 lg:-top-4 -left-6 -top-4 h-14' />
                <Quote className='sm:hidden lg:block z-20 stroke-white stroke-2 fill-transparent opacity-90 absolute lg:-right-16 lg:top-44 -right-6 top-44 h-14 -scale-100 rotate-2' />
                <img src={quote[2]} alt="The Pope" className="absolute z-10 w-40 h-40 left-0 right-0 m-auto -top-24 rounded-full object-cover" />
                <p className="font-Outfit 2xl:text-2xl sm:text-sm md:text-lg">
                    {quote[0]}
                </p>
                <br />
                <p className="sm:text-4xl md:text-4xl font-semibold font-Ephesis tracking-[5px] z-30">
                    {"-" + quote[1]}
                </p>
            </div>
        </div>
        );
}

export default Testimonial;