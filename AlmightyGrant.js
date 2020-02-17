const playGame = prompt(`Want to play a game with 2 people? [yes] or [no]`);
if (playGame === "yes") {
    userName = prompt("User Name?");
    console.log("Let's Play " + userName);
} else if (playGame === "no") {
    alert("Please Reconsider")
}

var almightyGrant = 10;
var userHP = 40;
var userWins = 0;
var round = 1;
while (almightyGrant > 0 && userHP > 0) {
    let randomHealth = Math.floor(Math.random() * 2) + 1;
    almightyGrant = almightyGrant - randomHealth;
    userHP = userHP - randomHealth;
    console.log(`Almighty Grants health is ${almightyGrant} and ${userName} health is ${userHP}`);
    if (almightyGrant <= 0) {
        almightyGrant = 10;
    }

    round = round + 1;
    if (almightyGrant < userHP) {
        userWins = userWins + 1;
    }

    if (userHP === 0) {
        console.log('Defeated');
    } else if (almightyGrant > 0 && userWins < 3) {
        userWins = userWins + 1;
        console.log('Not Quite');
    } else if (almightyGrant <= 0 && userWins === 3) {
        console.log('You Win');
    }
}