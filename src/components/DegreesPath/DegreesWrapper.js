import { React, useState} from 'react';
import { ReactComponent as ConnectionsSvg } from '../../svg/connectionsSvg.svg';
import { ReactComponent as KingSvg } from '../../svg/king.svg';
import HeroHeader from '../HeroHeader/HeroHeader';
import DegreesPath from "./DegreesPath";

const fetchBestWin = async (username, timeControl, requestAttemps) => {
    if (requestAttemps !== 0) {
        try {
            const res = await fetch("https://us-central1-six-degrees-of-hikaru-cf099.cloudfunctions.net/scraper", {
            // const res = await fetch("http://192.168.50.48:5001/six-degrees-of-hikaru-cf099/us-central1/scraper", {
                method: 'POST',
                body: JSON.stringify({
                    "text": `https://www.chess.com/stats/live/${timeControl}/${username}`
                })
            });
            const response = await res.json();
            console.log(response);
            return response;
        } catch(e) {
            console.log(e);
            await fetchBestWin(username, timeControl, requestAttemps - 1);
        }
    } else {
        return false;
    }
}

function DegreesWrapper() {
    const [setDisplayToUserChain, displayToUserChain] = useState([]);
    const extendUserChain = () => {
        // check database for user

        // request cloud function
        

        // if response == ok
            // userChain.append(response)
        // else if response == bad and attempts != 0:
            // extendUserChain(attempts - 1)
        // else:
            // check for most recent wins as a starting point
    }

    const test = fetchBestWin("FuzzyLogic", "bullet", 3);
    console.log(test);


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