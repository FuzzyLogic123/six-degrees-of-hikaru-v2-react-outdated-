import React from 'react';
import { ReactComponent as Reddit } from '../../svg/reddit.svg';
import { ReactComponent as Github } from '../../svg/github.svg';

function Footer() {
    return (
        <>
            <div className="p-10 flex items-center justify-items-center justify-center">
                <h4 className='text-white font-bold font-RobotoCondensed text-center text-lg lg:text-2xl 2xl:text-3xl mx-3'>Patrick Edwards 2022 ©</h4>
                <Reddit className=' mx-3' />
                <Github className=' mx-3' />
            </div>
        </>
    );
}

export default Footer;