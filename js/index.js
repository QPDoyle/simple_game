function Tile(color) {
    this.color = color;
}
//Fisher-Yates shuffle
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

function numUp(color, opp) {
    if(color === 'blue') {
        if(opp = '+'){
            return blueUp + 1;
        }
        else if (opp = '-'){
            return blueUp - 1;
        }
    }
    if(color === 'green') {
        if(opp = '+'){
            return greenUp + 1;
        }
        else if (opp = '-'){
            return greenUp - 1;
        }
    }
    if(color === 'red') {
        if(opp = '+'){
            return redUp + 1;
        }
        else if (opp = '-'){
            return redUp - 1;
        }
    }
    if(color === 'yellow') {
        if(opp = '+'){
            return yellowUp + 1;
        }
        else if (opp = '-'){
            return yellowUp - 1;
        }
    }
}

totalUp = 0;
const blueUp = 0;
const greenUp = 0;
const redUp = 0;
const yellowUp = 0;

let totalFlips = 0;
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
shuffleArray(colors);
for (i in colors) {
    const newTile = new Tile(colors[i]);
    tiles.push(newTile);
}   

tile1.addEventListener('click', e =>{
    //records the flip and updates the counter
    totalFlips++;
    document.getElementById('totalFlips').textContent = totalFlips;

    if(tile1.className === 'unFlipped'){ //checking if tile is un-flipped
        numUp(colors[0], '+');
        tile1.className = colors[0]; // changes color of tile to its flipped color
    }
    else if(tile1.className === colors[0].concat('Pair') || numUp(colors[0]) === 1){ //if been paired, or if 1 of same color is already up
        console.log("pair");
        tile1.className = colors[0].concat('Pair');
    }
    else {
        tile1.className = 'unFlipped';
        numUp(colors[0], '-');

    }
})
tile2.addEventListener('click', e =>{
    //records the flip and updates the counter
    totalFlips++;
    document.getElementById('totalFlips').textContent = totalFlips;

    if(tile2.className === 'unFlipped'){
        console.log("click");
        tile2.className = colors[1];
    }
    else if(tile2.className === colors[1].concat('Pair')){ //names it the "colorPair" class
        tile2.className = colors[1].concat('Pair');
    }
    else {
        tile2.className = 'unFlipped';

    }
})
tile3.addEventListener('click', e =>{
    //records the flip and updates the counter
    totalFlips++;
    document.getElementById('totalFlips').textContent = totalFlips;

    if(tile3.className === 'unFlipped'){
        console.log("click");
        tile3.className = colors[2];
    }
    else if(tile3.className === colors[2].concat('Pair')){ //names it the "colorPair" class
        tile3.className = colors[2].concat('Pair');
    }
    else {
        tile3.className = 'unFlipped';

    }
})
tile4.addEventListener('click', e =>{
    //records the flip and updates the counter
    totalFlips++;
    document.getElementById('totalFlips').textContent = totalFlips;

    if(tile4.className === 'unFlipped'){
        console.log("click");
        tile4.className = colors[3];
    }
    else if(tile4.className === colors[3].concat('Pair')){ //names it the "colorPair" class
        tile4.className = colors[3].concat('Pair');
    }
    else {
        tile4.className = 'unFlipped';

    }
})
tile5.addEventListener('click', e =>{
    //records the flip and updates the counter
    totalFlips++;
    document.getElementById('totalFlips').textContent = totalFlips;

    if(tile5.className === 'unFlipped'){
        console.log("click");
        tile5.className = colors[4];
    }
    else if(tile5.className === colors[4].concat('Pair')){ //names it the "colorPair" class
        tile5.className = colors[4].concat('Pair');
    }
    else {
        tile5.className = 'unFlipped';

    }
})
tile6.addEventListener('click', e =>{
    //records the flip and updates the counter
    totalFlips++;
    document.getElementById('totalFlips').textContent = totalFlips;

    if(tile6.className === 'unFlipped'){
        console.log("click");
        tile6.className = colors[5];
    }
    else if(tile6.className === colors[5].concat('Pair')){ //names it the "colorPair" class
        tile6.className = colors[5].concat('Pair');
    }
    else {
        tile6.className = 'unFlipped';

    }
})
tile7.addEventListener('click', e =>{
    //records the flip and updates the counter
    totalFlips++;
    document.getElementById('totalFlips').textContent = totalFlips;

    if(tile7.className === 'unFlipped'){
        console.log("click");
        tile7.className = colors[6];
    }
    else if(tile7.className === colors[6].concat('Pair')){ //names it the "colorPair" class
        tile7.className = colors[6].concat('Pair');
    }
    else {
        tile7.className = 'unFlipped';

    }
})
tile8.addEventListener('click', e =>{
    //records the flip and updates the counter
    totalFlips++;
    document.getElementById('totalFlips').textContent = totalFlips;

    if(tile8.className === 'unFlipped'){
        console.log("click");
        tile8.className = colors[7];
    }
    else if(tile8.className === colors[7].concat('Pair')){ //names it the "colorPair" class
        tile8.className = colors[7].concat('Pair');
    }
    else {
        tile8.className = 'unFlipped';

    }
})

