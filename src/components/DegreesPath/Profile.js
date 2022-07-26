import React from 'react';
import { ReactComponent as LongArrow } from "../../svg/longArrow.svg"

function Profile({ name, title, profilePicture, username, rating, position }) {
    const positionCSS = position === "right" ? 'right' : 'left';
    const rotationCSS = position === "right" ? '-135deg' : '135deg';

    const arrowStyle = {
        transform: `rotate(${rotationCSS})`,
    };
    return (
        <div style={{ textAlign: positionCSS }} className='w-full relative h-[25vh]'>
            <div className='px-4 text-center inline-block sm:mx-16 h-full'>
                <img className="rounded-full" src={profilePicture} alt='user profile avatar' />
                <div className='bg-[#b33430] rounded-[0.3rem] text-white text-xs lg:text-lg xl:text-2xl font-semibold p-1 m-4 inline-block'>
                    {title}
                </div>
                <h1 className='font-Outfit text-white tracking-wider text-lg lg:text-xl xl:text-2xl'>
                    {name}
                </h1>

                <h2 className='text-white font-Mono text-md lg:text-lg m-0 font-thin xl:text-2xl xl:m-2'>
                    {username}
                </h2>

                <h3 className='text-white font-Mono font-thin text-sm lg:text-md xl:text-lg'>
                    {rating}
                </h3>

            </div>

            <div className='scale-[0.1] absolute left-1/2 top-1/2 origin-top-left'>
                <LongArrow style={arrowStyle} />
            </div>
        </div>
    );
}

export default Profile;