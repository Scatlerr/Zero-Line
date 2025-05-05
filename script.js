const canvas = document.getElementById("battlefield");
const ctx = canvas.getContext("2d");

let mapData = null;
let tileImages = {};
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();


fetch("res/maps/test.json")
  .then (response => response.json())
  .then (data => {mapData = data;
    const imgLoader = []

mapData.usedTiles.forEach(function(usedTile){
    const promise = new Promise(function(resolve){
      const img = new Image();
      img.src="res/img/tiles/"+usedTile+".png";
      img.onload = function(){
        tileImages[usedTile] = img;
        resolve ()
      }
    } )
    imgLoader.push(promise)
} )
Promise.all(imgLoader).then (function(){
    drawMap()
} )
});

function drawMap() {
  const tileWidth = 64;
  const tileHeight = 32;

  for (let y = 0; y < mapData.height; y++) {
    for (let x = 0; x < mapData.width; x++) {
      const tileType = mapData.tiles[y][x];
      const img = tileImages[tileType];

      const screenX = (x - y) * tileWidth / 2 + canvas.width / 2;
      const screenY = (x + y) * tileHeight / 2;

      ctx.drawImage(img, screenX - tileWidth / 2, screenY);
    }
  }
}

document.getElementById("a").getContext= "${(4*1/2)}"