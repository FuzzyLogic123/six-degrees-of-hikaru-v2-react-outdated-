import { React, useState } from 'react';
import { ReactComponent as ConnectionsSvg } from '../../svg/connectionsSvg.svg';
import { ReactComponent as KingSvg } from '../../svg/king.svg';
import HeroHeader from '../HeroHeader/HeroHeader';
import DegreesPath from "./DegreesPath";
import { queryDatabase } from '../../firebaseConfig';


// TODO - Implement most recent win getAlternateUser() (as backup - can copy and paste previous implementation) - probably import that function for cleanliness
// TODO - Prevent infinite loops/ cycles where players best wins go on forever (including when the backup suggests someone that will again cause an infinite loop)
// can be achieved by using ref to track list of players that have been tried so far, never use these to enter the list.
// TODO - add dropdown to select bullet or blitz (update this in the path finding code)
// TODO - update rendering to show displayToUserChain (add animations)

const MAX_REQUEST_ATTEMPTS = 3;

const fetchBestWin = async (username, timeControl, requestAttemps) => {
    if (requestAttemps !== 0) {
        try {
            // const res = await fetch("https://us-central1-six-degrees-of-hikaru-cf099.cloudfunctions.net/scraper", {
            const res = await fetch("http://localhost:5001/six-degrees-of-hikaru-cf099/us-central1/scraper", {
                method: 'POST',
                body: JSON.stringify({
                    "text": `https://www.chess.com/stats/live/${timeControl}/${username}`
                })
            });
            const response = await res.json();
            console.log(response);
            return response;
        } catch (e) {
            console.log(e);
            await fetchBestWin(username, timeControl, requestAttemps - 1);
        }
    } else {
        return false;
    }
}

function DegreesWrapper() {
    const [displayToUserChain, setDisplayToUserChain] = useState([]);
    const extendUserChain = async (userChain) => {
        const mostRecentUser = userChain.at(-1);
        if (mostRecentUser.name === "Hikaru Nakamura") {
            setDisplayToUserChain(userChain);
            console.log(userChain);
            return userChain;
        }
        if (!mostRecentUser?.username) {
            console.error("user does not have a username!");
        }
        // check database for user
        console.log(mostRecentUser.username)
        const databaseResult = await queryDatabase(mostRecentUser.username, "bullet")
        if (databaseResult) {
            mostRecentUser.next_player = databaseResult.next_player;
            console.log(databaseResult);
            console.log('database returned next :  ' + databaseResult.next_player);
        }

        // request cloud function --> get game type from dropdown
        const bestWin = await fetchBestWin(mostRecentUser.next_player, "bullet", MAX_REQUEST_ATTEMPTS);
        if (bestWin) {
            userChain.push(bestWin);
            setDisplayToUserChain(userChain);
            extendUserChain(userChain);
        } else {
            // call function to get most recent win
        }


    }


    return (
        <div id='six-degrees'>
            <HeroHeader svg={<ConnectionsSvg />} colour={"#818CF8"} secondaryText={"See how you compare"} mainText={"Find your path"} />
            <div className="pt-12 pb-16 flex justify-center gap-6 w-full">
                <input className="basis-2/4 inline-block text-white p-3 rounded-md border-2 border-slate-800 bg-slate-900 xl:text-xl text-lg" type="text" placeholder="chess.com username" />
                <button onClick={async () => {
                    // get input data from input fields
                    const firstUserData = await fetchBestWin("FuzzyLogic12", "bullet", MAX_REQUEST_ATTEMPTS)
                    extendUserChain([firstUserData]);
                }} className='inline-block bg-slate-900 border-slate-800 border-2 p-3 rounded-md xl:text-xl text-lg text-white'>
                    <KingSvg className='stroke-slate-400 hover:stroke-slate-50' />
                </button>
            </div>
            <DegreesPath />
        </div>
    );
}

export default DegreesWrapper;