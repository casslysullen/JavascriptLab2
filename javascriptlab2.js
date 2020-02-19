/*Renaming functions and variables with:
startGame, startCombat, and getDamage*/

function javalab2() {
    /*startGame function used to start game with startCombat included 
    within the function*/

    startGame = prompt(`Want to play a game with 2 people? [yes] or [no]`);
    if (startGame === "yes") {
        userName = prompt("User Name?");
        console.log("Let's Play " + userName);

        function startCombat() {
            function getDamage() {
                Math.floor(Math.random() * 4) + 1
            };

            /* creating objects for Grant and User that includes:
            health and name property && getDamage method(function) */

            class Grant {
                constructor(name, health) {
                    this.name = almightyGrant;
                    this.health = grantHP;
                    almightyGrant = 10;
                    grantHP = almightyGrant - getDamage();
                }
                getGrantHealth() {
                    console.log(this.name, 'health is', this.health);
                }
            }

            class User {
                constructor(name, health) {
                    this.name = userName;
                    this.health = userHP;
                    user = 40;
                    userHP = user - getDamage();
                }
                getUserHealth() {
                    console.log(this.name, 'health is', this.userHP);
                }
            }
            var round = 1;
            /*The start of the actual loop within the getDamage function. Still 
            have to figure how to add prompt after each round that will ask "attack" || "quit" */
            while (Grant > 0 && User > 0) {
                console.log(`${User} and ${Grant}`);
            }
            round = round + 1;
            if (Grant < User) {
                userWins = userWins + 1;
            }
            if (User <= 0) {
                console.log('Defeated');
            } else if (Grant <= 0) {
                Grant = 10;
            } else if (Grant >= 0 && userWins < 3) {
                fight = prompt(`Would you like to attack or quit? [attack] or [quit]`)
                if (fight === "attack") {
                    Grant && User
                } else if (fight === "quit") {
                    Grant && User === 0
                }
            }
            if (Grant <= 0 && User >= 0 && userWins === 3) {
                console.log('You Win')
            }
        }
        while (round <= 3);
        if (userWins === 3) {
            console.log("You Win");
        } else {
            console.log("You lose");
        };
    }
}
startCombat();
javalab2()