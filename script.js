function hello(name) {
    while (true) {
        name = prompt('What is your name?');
        if (name.length < 1) {
            alert('Your name must be at least 1 character')
        } else if (name === null) {
            alert('Battle Bot has been aborted.\n\nI guess you will live to fight another day!')
            return
        } else {
            alert(`Hello, ${name}!\nWelcome to Battle Bot`);
            break
        }
    }
    console.log(`${name}`)
    return battle()
}

function battle() {
    let wizard = 'Wizard'
    let wizardHP = 70;
    let wizardDamage = 150;

    let elf = 'Elf'
    let elfHP = 100;
    let elfDamage = 150;

    let human = 'Human'
    let humanHP = 150;
    let humanDamage = 20;

    let orc = 'Orc'
    let orcHP = 300;
    let orcDamage = 49;

    let dragon = 'Dragon'
    let dragonHP = 300;
    let dragonDamage = 50;

    let character = null;
    let myHP = null;
    let myDamage = null;

    while (true) {
        let option = prompt('Choose your character:\n1: Wizard\n2: Elf\n3: Human\n4: Orc\n5: Quit Game');
        console.log(`Player option: ${option}`)

        if (option === '1') {
            character = wizard;
            myHP = wizardHP;
            myDamage = wizardDamage;
            break;

        } else if (option === '2') {
            character = elf;
            myHP = elfHP;
            myDamage = elfDamage;
            break;

        } else if (option === '3') {
            character = human;
            myHP = humanHP;
            myDamage = humanDamage;
            break;

        } else if (option === '4') {
            character = orc;
            myHP = orcHP;
            myDamage = orcDamage;
            break;

        } else if (option === null || option === '5') {
            return exit();
        } else {
            alert('Unknown character');
        }

    }
    console.log(`${character}\nHP: ${myHP}\nDamage: ${myDamage}`);
    alert(`You chose ${character}\nHP: ${myHP}\nDamage: ${myDamage}\n\nPrepare for battle!`);

    while (true) {
        dragonHP = dragonHP - myDamage;
        alert(`The ${character}, damaged the ${dragon}!\nThe ${dragon} hitpoints are now ${dragonHP}.`);

        if (dragonHP <= 0) {
            return winCondition()
        }
        myHP = myHP - dragonDamage;
        alert(`The ${dragon} strikes back at the ${character}\nThe ${character} hitpoints are now: ${myHP}.`)

        if (myHP <= 0) {
            return gameReset()
            
        }
    }
}

function exit() {
    console.log('Game aborted');
    alert('Battle Bot has been aborted.\n\nI guess you will live to fight another day!');
    return;
}

let myHP = -1;
let dragonHP = -1;

function gameReset() { 
    gameOverSound = new Audio('audioEndGameSound.mp3');
    gameOverSound.play();
    gameOverSound.onended = function () {
        alert("You lost. Click 'Ok' to restart the game");
        location.reload();
    }
    
}

function winCondition() { 
    if (dragonHP < 0) {
        monsterDeathSound = new Audio('https://soundbible.com/grab.php?id=2182&type=mp3'); 
        monsterDeathSound.play();
        monsterDeathSound.onended = function () {
            alert("Congratulations you beat the dragon! Hit 'OK' to restart the game.");
            location.reload();
        }
    }
}