let currGemTile;
let currBombTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the game board in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9, this is for the 9 grids for the pipes 
        // <div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        // tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setGem, 1000); // 1000 miliseconds = 1 second, every 1 second call setGem
    setInterval(setBomb, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setBomb
    }

    function getRandomTile() {
        //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
        let num = Math.floor(Math.random() * 9);
        return num.toString();
    }

    function setGem() {
        if (gameOver) {
            return;
        }
        if (currGemTile) {
            currGemTile.innerHTML = "";
        }
        let gem = document.createElement("img");
        gem.src = "Assets/Image/Gem 2.png ";
    
        let num = getRandomTile();
        if (currBombTile && currBombTile.id == num) {
            return;
        }
        currGemTile = document.getElementById(num);
        currGemTile.appendChild(gem);
    }
    
    function setBomb() {
        if (gameOver) {
            return;
        }
        if (currBombTile) {
            currBombTile.innerHTML = "";
        }
        let bomb = document.createElement("img");
        bomb.src = "Assets/Image/tl (1).webp ";
    
        let num = getRandomTile();
        if (currGemTile && currGemTile.id == num) {
            return;
        }
        currBombTile = document.getElementById(num);
        currBombTile.appendChild(bomb);
    }
    