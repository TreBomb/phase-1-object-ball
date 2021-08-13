const gameObject = function() {
    const obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        }
    };
    return obj;
}

const gameDetails = gameObject();

const numPointsScored = function(player) {
    const homePlayerKeys = Object.keys(gameDetails.home.players);
    const awayPlayerKeys = Object.keys(gameDetails.away.players);

    if(!!(homePlayerKeys.find(name => name === player)) === true) {
        const name = gameDetails.home.players[player];
        return name[`points`];
    } else if(awayPlayerKeys.find(name => name === player)) {
        const name = gameDetails.away.players[player];
        return name[`points`];
    }
}

const shoeSize = function(player) {
    const homePlayerKeys = Object.keys(gameDetails.home.players);
    const awayPlayerKeys = Object.keys(gameDetails.away.players);

    if(!!(homePlayerKeys.find(name => name === player)) === true) {
        const name = gameDetails.home.players[player];
        return name[`shoe`];
    } else if(awayPlayerKeys.find(name => name === player)) {
        const name = gameDetails.away.players[player];
        return name[`shoe`];
    }
}

const teamColors = function(team) {
    if(gameDetails.home.teamName === team) {
        return gameDetails.home['colors'];
    } else if(gameDetails.away.teamName === team) {
        return gameDetails.away['colors'];
    }
}

const teamNames = function() {
    const team1 = gameDetails.home.teamName;
    const team2 = gameDetails.away.teamName;
    return [team1, team2];
}

const playerNumbers = function(team) {
    if(gameDetails.home.teamName === team) {
        const players = Object.keys(gameDetails.home.players);
        return players.map(player => gameDetails.home.players[player].number);
    } else if(gameDetails.away.teamName === team) {
        const players = Object.keys(gameDetails.away.players);
        return players.map(player => gameDetails.away.players[player].number);
    }
}

const playerStats = function(player) {
    const homePlayerKeys = Object.keys(gameDetails.home.players);
    const awayPlayerKeys = Object.keys(gameDetails.away.players);

    if(!!(homePlayerKeys.find(name => name === player)) === true) {
        const name = gameDetails.home.players[player];
        return name;
    } else if(awayPlayerKeys.find(name => name === player)) {
        const name = gameDetails.away.players[player];
        return name;
    }
}

const bigShoeRebounds = function() {
    const homePlayerKeys = Object.keys(gameDetails.home.players);
    const awayPlayerKeys = Object.keys(gameDetails.away.players);
    const homeSizes = [];
    const awaySizes =[];

    for (i = 1; i < homePlayerKeys.length; i++) {
        const size = gameDetails.home.players[homePlayerKeys[i]].shoe;
        homeSizes.unshift(size);
    }
    for (i = 1; i < awayPlayerKeys.length; i++) {
        const size = gameDetails.away.players[awayPlayerKeys[i]].shoe;
        awaySizes.unshift(size);
    }
    const totalPlayers = [...homePlayerKeys, ...awayPlayerKeys];
    const totalSizes = [...homeSizes, ...awaySizes];
    const biggest = totalSizes.reduce((((oldLarge, newLarge) => (oldLarge > newLarge) ? oldLarge : newLarge)), 0);
    const key = totalSizes.findIndex((size) =>  size === biggest);
    const player = totalPlayers[key];
    return [[totalSizes], [totalPlayers]];
}

console.log(numPointsScored("Brendan Haywood"));
console.log(shoeSize("Brendan Haywood"));
console.log(teamColors("Charlotte Hornets"));
console.log(teamNames());
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerStats("Brendan Haywood"));
console.log(bigShoeRebounds());