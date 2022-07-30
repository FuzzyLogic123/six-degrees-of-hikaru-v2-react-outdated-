import { React, useState } from 'react';
import { ReactComponent as ConnectionsSvg } from '../../svg/connectionsSvg.svg';
import { ReactComponent as KingSvg } from '../../svg/king.svg';
import HeroHeader from '../HeroHeader/HeroHeader';
import DegreesPath from "./DegreesPath";
import { queryDatabase } from '../../firebaseConfig';
import { fetchBestWin, getNextOptionHelper, getMostRecentWin } from './functions';


// TODO - decide whether to branch off users or just start from the start
// TODO - Prevent infinite loops/ cycles where players best wins go on forever (including when the backup suggests someone that will again cause an infinite loop)
// can be achieved by using ref to track list of players that have been tried so far, never use these to enter the list.
// TODO - add dropdown to selectTIME_CONTROLor blitz (update this in the path finding code)
// TODO - update rendering to show displayToUserChain (add animations)

const MAX_REQUEST_ATTEMPTS = 1;

function DegreesWrapper() {
    const TIME_CONTROL = "bullet";
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
        const databaseResult = await queryDatabase(mostRecentUser.username, TIME_CONTROL)
        if (databaseResult) {
            mostRecentUser.next_player = databaseResult.next_player;
            console.log(databaseResult);
            console.log('database returned next :  ' + databaseResult.next_player);
        }

        // request cloud function --> get game type from dropdown
        const bestWin = await fetchBestWin(mostRecentUser.next_player, TIME_CONTROL, MAX_REQUEST_ATTEMPTS);
        if (bestWin) {
            userChain.push(bestWin);
            setDisplayToUserChain(userChain);
        } else {
            const mostRecentWin = await getNextOptionHelper(userChain, TIME_CONTROL); //should basically always return someone unless every player in the chain has not won any games of that time control
            console.log(mostRecentWin);
            userChain.at(-1).next_player = mostRecentWin;
        }
        await extendUserChain(userChain);
    }

    const onClickHandler = async () => {
        const USERNAME = "JRT829"
        const firstUserData = await fetchBestWin(USERNAME, TIME_CONTROL, MAX_REQUEST_ATTEMPTS);
        if (!firstUserData) {
            console.error("invalid username");
        }
        if (!firstUserData?.next_player) {
            const mostRecentWin = await getMostRecentWin(USERNAME, TIME_CONTROL);
            if (mostRecentWin) {
                firstUserData.next_player = mostRecentWin;
            } else {
                console.error("the player seems to have won no games within this time control");
                return;
            }
        }
        extendUserChain([firstUserData]);
    }

    return (
        <div id='six-degrees'>
            <HeroHeader svg={<ConnectionsSvg />} colour={"#818CF8"} secondaryText={"See how you compare"} mainText={"Find your path"} />
            <div className="pt-12 pb-16 flex justify-center gap-6 w-full">
                <input className="basis-2/4 inline-block text-white p-3 rounded-md border-2 border-slate-800 bg-slate-900 xl:text-xl text-lg" type="text" placeholder="chess.com username" />
                <button onClick={onClickHandler} className='inline-block bg-slate-900 border-slate-800 border-2 p-3 rounded-md xl:text-xl text-lg text-white hover:stroke-slate-50 stroke-slate-400'>
                    <KingSvg />
                </button>
            </div>
            <DegreesPath />
        </div>
    );
}

export default DegreesWrapper;