let currGemTile;
let currBombTile;
let currHeartTile;
let currBobTile;
let currSwordTile;
let score = 0;
let gameOver = false;
let gemCount = 0;
let heartCount = 0;
let BobCount = 0;
let SwordCount;
const maxGemCount = 30;
const maxHeartCount = 30;
const maxBobCount = 30;
const gameDuration = 120000; // 120,000 milliseconds = 120 seconds = 2 minutes
let remainingTime = 120; // Time in seconds

let gemInterval, heartInterval, bobInterval, swordInterval, bombInterval, gameTimer, countdownInterval;

window.onload = function() {
    setGame();
}

document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const muteButton = document.getElementById('muteButton');
    const mySound = new Audio('Assets/Audio/Super Mario Bros. Theme Song.mp3');
    let isMuted = false;

    playButton.addEventListener('click', () => {
        mySound.play().catch(error => {
            console.error('Error playing the audio:', error);
        });
        // startGame();
        playButton.disabled = true; // Disable the play button after clicking
    });

    muteButton.addEventListener('click', () => {
        isMuted = !isMuted;
        mySound.muted = isMuted;
        muteButton.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    });
});

function setGame() {
    // Set up the game board in HTML
    for (let i = 0; i < 9; i++) { // i goes from 0 to 8, stops at 9, this is for the 9 grids for the pipes 
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    gemInterval = setInterval(setGem, 1000); // 1000 milliseconds = 1 second, every 1 second call setGem
    heartInterval = setInterval(setHeart, 1000); // 1000 milliseconds = 1 second, every 1 second call setHeart
    bobInterval = setInterval(setBob, 1000); // 1000 milliseconds = 1 second, every 1 second call setBob
    swordInterval = setInterval(setSword, 1000); // 1000 milliseconds = 1 second, every 1 second call setSword
    bombInterval = setInterval(setBomb, 1500); // 1500 milliseconds = 1.5 seconds, every 1.5 seconds call setBomb
    
    // Set a timeout for the game duration
    gameTimer = setTimeout(endGame, gameDuration);

    // Start the countdown timer
    countdownInterval = setInterval(updateCountdown, 1000); // Correct interval to 1000 milliseconds (1 second)
}

function updateCountdown() {
    if (remainingTime > 0) {
        remainingTime--;
        document.getElementById("timer").innerText = "Time left: " + remainingTime + "s";
    } else {
        clearInterval(countdownInterval);
    }
    document.getElementById("timer").innerText = "Time left: " + remainingTime + "s";
}

function endGame() {
    gameOver = true;
    clearInterval(gemInterval);
    clearInterval(heartInterval);
    clearInterval(bobInterval);
    clearInterval(swordInterval);
    clearInterval(bombInterval);
    clearInterval(countdownInterval);
    document.getElementById("score").innerText = "TIME UP! Final Score: " + score.toString();
}

    function getRandomTile() {
        //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
        let num = Math.floor(Math.random() * 9);
        return num.toString();
    }

    function setGem() {
        if (gameOver)
            return;
        if (gemCount >= maxGemCount) {
            clearInterval(gemInterval);
            return;
        }
        if (currGemTile) {
            currGemTile.innerHTML = "";
        }
        let gem = document.createElement("img");
        gem.src = "Assets/Image/Gem 2.png";
    
        let num;
    do {
        num = getRandomTile();
    } while ((currBombTile && currBombTile.id === num) || (currHeartTile && currHeartTile.id === num) || (currBobTile && currBobTile.id === num)|| (currSwordTile && currSwordTile.id === num));
    
    currGemTile = document.getElementById(num);
    currGemTile.appendChild(gem);
    gemCount++;
}

    function setHeart() {
        if (gameOver)
            return;
    
        if (heartCount >= maxHeartCount) {
            clearInterval(heartInterval);
            return;
        }

        if (currHeartTile) {
            currHeartTile.innerHTML = "";
        }
        let heart = document.createElement("img");
        heart.src = "Assets/Image/heart.webp";
    
        let num;
    do {
        num = getRandomTile();
    } while ((currBombTile && currBombTile.id === num) || (currGemTile && currGemTile.id === num) || (currBobTile && currBobTile.id === num)|| (currSwordTile && currSwordTile.id === num));
    
    currHeartTile = document.getElementById(num);
    currHeartTile.appendChild(heart);
    heartCount++;
}

function setBob() {
    if (gameOver) {
        return;
    }
    if (BobCount >= maxBobCount) {
        clearInterval(bobInterval);
        return;
    }
    if (currBobTile) {
        currBobTile.innerHTML = "";
    }
    let bob = document.createElement("img");
    bob.src = "Assets/Image/Bob.webp";

    let num;
    do {
        num = getRandomTile();
    } while ((currBombTile && currBombTile.id === num) || (currHeartTile && currHeartTile.id === num) || (currGemTile && currGemTile.id === num) || (currSwordTile && currSwordTile.id === num));

    currBobTile = document.getElementById(num);
    currBobTile.appendChild(bob);
    BobCount++;
}
function setSword() {
    if (gameOver) {
        return;
    }
    if (currSwordTile) {
        currSwordTile.innerHTML = "";
    }
    let sword = document.createElement("img");
    sword.src = "Assets/Image/sword.webp";

    let num;
    do {
        num = getRandomTile();
    } while ((currBombTile && currBombTile.id === num) || (currHeartTile && currHeartTile.id === num) || (currGemTile && currGemTile.id === num) || (currBobTile && currBobTile.id === num));

    currSwordTile = document.getElementById(num);
    currSwordTile.appendChild(sword);
    SwordCount++;
}
    
    function setBomb() {
        if (gameOver) {
            return;
        }
        if (currBombTile) {
            currBombTile.innerHTML = "";
        }
        let bomb = document.createElement("img");
        bomb.src = "Assets/Image/tl (1).webp";
    
        let num;
        do {
            num = getRandomTile();
        } while ((currHeartTile && currHeartTile.id === num) || (currGemTile && currGemTile.id === num) || (currBobTile && currBobTile.id === num) || (currSwordTile && currSwordTile.id === num));
        
        currBombTile = document.getElementById(num);
        currBombTile.appendChild(bomb);
    }

    function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currGemTile) {
        score += 5;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currHeartTile) {
        score += 5;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currBobTile) {
        score += 5;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currSwordTile) {
        score -= 5;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currBombTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
        clearTimeout(gameTimer);
        clearInterval(countdownInterval);
    }
}