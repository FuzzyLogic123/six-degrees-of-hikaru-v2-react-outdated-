const fetchBestWin = async (username, timeControl, requestAttemps) => {
    if (requestAttemps !== 0 && username) {
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

// TODO - update usernameChain to a list of all users that have been tried so far
const getMostRecentWin = async (username, timeControl, alreadyTriedUsers = []) => {
    const res = await fetch(`https://api.chess.com/pub/player/${username}/games/archives`);
    const data = await res.json();
    if (data.code === 0) {
        console.log('the username entered does not exist');
        return false;
    }
    else if (!data.archives.length) {
        console.log('the user has not played any games');
        return false;
    }
    for (let i = data.archives.length - 1; i >= 0; i--) {
        const gameListHttpRequest = await fetch(data.archives[i]);
        const gameList = await gameListHttpRequest.json();
        const candidateGames = [];
        for (let i = gameList.games.length - 1; i >= 0; i--) {
            const game = gameList.games[i];
            if (game.time_class === timeControl && game.white.result === 'win' && game.white.username.toLowerCase() === username.toLowerCase() && !alreadyTriedUsers.includes(game.black.username)) {
                candidateGames.push({
                    username: game.black.username,
                    rating: game.black.rating
                });
            } else if (game.time_class === timeControl && game.black.result === 'win' && game.black.username.toLowerCase() === username.toLowerCase() && !alreadyTriedUsers.includes(game.white.username)) {
                candidateGames.push({
                    username: game.white.username,
                    rating: game.white.rating
                });
            }
        }
        if (candidateGames.length > 0) {
            console.log(candidateGames);
            const highestRatedRecentOpponent = candidateGames.sort((a, b) => b.rating - a.rating)[0];
            console.log(highestRatedRecentOpponent.username, highestRatedRecentOpponent.rating)
            return highestRatedRecentOpponent.username;
        } else {
            console.log("User has not won any games");
        }
    }
};

const getNextOptionHelper = async (userChain, timeControl)=> {
    const result = await getMostRecentWin(userChain.at(-1).next_player, timeControl);
    if (!result) {
        userChain = [userChain[0]];
        console.log("chain reset");
        console.log(userChain);
        return await getNextOptionHelper(userChain, timeControl);
    }
    return result
}

export { fetchBestWin, getNextOptionHelper, getMostRecentWin };

