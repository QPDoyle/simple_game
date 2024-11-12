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
shuffleArray(colors);
for (i in colors) {
    const newTile = new Tile(colors[i]);
    tiles.push(newTile);
}   

tile1.addEventListener('click', e =>{
    if(tile1.className === 'unFlipped'){
        console.log("click");
        tile1.className = colors[0];
    }
    else if(tile1.className === colors[1].concat('Pair')){
        tile1.className = colors[1].concat('Pair');
    }
    else {
        tile1.className = 'unFlipped';

    }
})
tile2.addEventListener('click', e =>{
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

