import React from 'react';

function HeroHeader( { colour, mainText, secondaryText, svg}) {
    return ( 
        <div className="m-8 md:m-20">
            {svg}
            <h3 className={`text-[${colour}] m-1 text-xl md:text-2xl xl:text-3xl font-bold md:font-medium`}>{secondaryText}</h3>
            <h1 className="capitalize text-white text-5xl md:text-7xl xl:text-9xl font-bold">{mainText}</h1>
        </div>
     );
}

export default HeroHeader;