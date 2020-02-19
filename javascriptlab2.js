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
            prompt(`Would you like to continue`)

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
            almightyGrant = 10;
            user = 40;
            userHP = user - getDamage();

            /*The start of the actual loop within the getDamage function. Still 
            have to figure how to add prompt after each round that will ask "attack" || "quit" */
            do {
                while (almightyGrant > 0) {
                    if (almightyGrant > 0 && userHP > 0) {
                        console.log(`${User} and ${Grant}`);
                    }
                }
                if (almightyGrant < userHP) {
                    userWins = userWins + 1;
                }
                if (almightyGrant <= 0) {
                    almightyGrant = 10;
                }
                round = round + 1;
            } while (round <= 3);
            if (userWins === 3) {
                console.log("You Win");
            } else {
                console.log("You lose");
            };
        }
        startCombat();
    }
}
javalab2();