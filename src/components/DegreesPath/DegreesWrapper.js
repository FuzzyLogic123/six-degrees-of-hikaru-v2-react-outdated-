import { React, useState} from 'react';
import { ReactComponent as ConnectionsSvg } from '../../svg/connectionsSvg.svg';
import { ReactComponent as KingSvg } from '../../svg/king.svg';
import HeroHeader from '../HeroHeader/HeroHeader';
import DegreesPath from "./DegreesPath";


function DegreesWrapper() {
    const [setUserChain, userChain] = useState([]);

    return (
        <div id='six-degrees'>
            <HeroHeader svg={<ConnectionsSvg />} colour={"#818CF8"} secondaryText={"See how you compare"} mainText={"Find your path"} />
            <div className="pt-12 pb-16 flex justify-center gap-6 w-full">
                <input className="basis-2/4 inline-block text-white p-3 rounded-md border-2 border-slate-800 bg-slate-900 xl:text-xl text-lg" type="text" placeholder="chess.com username" />
                <button className='inline-block bg-slate-900 border-slate-800 border-2 p-3 rounded-md xl:text-xl text-lg text-white'>
                    <KingSvg className='stroke-slate-400 hover:stroke-slate-50' />
                </button>
            </div>
            <DegreesPath />
        </div>
    );
}

export default DegreesWrapper;