import React from 'react';
import { ReactComponent as LongArrow } from "../../svg/shortArrow.svg";

function Profile({ name, title, profilePicture, username, rating, position }) {
    const positionCSS = position === "right" ? 'right' : 'left';
    const arrowClass = position === "left" ? '-scale-x-100' : '';

    return (
        <>
            <div style={{ textAlign: positionCSS }} className='w-full relative'>
                <div className='px-4 text-center inline-block 3xl:scale-150 relative'>
                    {/* remove explicit height when using real chess.com images */}
                    <img className="rounded-full m-auto border-white border-4" src={profilePicture} alt='user profile avatar' />
                    <h1 className='font-Outfit text-white tracking-wider text-lg lg:text-xl xl:text-2xl inline-block my-1 lg:my-3'>
                        {name}
                    </h1>
                    {
                        title ?
                            <div className='bg-[#b33430] rounded-[0.3rem] text-white text-xs lg:text-md xl:text-lg font-semibold mx-3 inline-block p-1'>
                                <p className='m-0 p-0 flex justify-center align-center leading-none'>
                                    {title}
                                </p>
                            </div> :
                            <></>
                    }
                    <h2 className='text-white font-Mono text-md lg:text-lg font-thin xl:text-2xl xl:m-2'>
                        {username}
                    </h2>

                    <h3 className='text-white font-Mono font-thin text-sm lg:text-md xl:text-lg'>
                        {rating}
                    </h3>
                </div>
            </div>
            <div className='relative w-full text-center scale-75 md:scale-125 2xl:scale-[2] 3xl:scale-[3] '>
                <div className={arrowClass + " inline-block"}>
                    <LongArrow className='arrow-rotation ' />
                </div>
            </div>
        </>
    );
}

export default Profile;