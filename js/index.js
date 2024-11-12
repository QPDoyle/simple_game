function Tile(color) {
    this.color = color;
}

const totalFlips = document.getElementById('totalFlips');
const tile1 = document.getElementById('tile1');
const tile2 = document.getElementById('tile2');
const tile3 = document.getElementById('tile3');
const tile4 = document.getElementById('tile4');
const tile5 = document.getElementById('tile5');
const tile6 = document.getElementById('tile6');
const tile7 = document.getElementById('tile7');
const tile8 = document.getElementById('tile8');
const tiles = [];

const colors = ['blue', 'blue', 'green', 'green', 'red', 'red', 'yellow', 'yellow'];
for (i in colors) {
    const newTile = new Tile(colors[i]);
    tiles.push(newTile);
}   


//TO FIX
//  add a listener for each box


// on click, change box class color to assigned color
    // on click get tile id 

tile1.addEventListener('click', e =>{
    if(tile1.className === 'unFlipped'){
        console.log("click");
        tile1.className = colors[0];
    }
    else {
        tile1.className = 'unFlipped';
    }
})

