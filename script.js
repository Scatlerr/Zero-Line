class battlefield {
  constructor (config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".battlefield");
    this.ctx = this.canvas.getContext("2d");
  }
  
  const screenHeight = window.screen.height;
  const screenWidth = window.screen.width;
  
  mapLoad(test)
  .then(resolve => {
    const mapData = resolve.mapData
    const tileImages = resolve.tileImages
  })
  
  drawMap()
  
  async function mapLoad(map) {
    const response = await fetch (`maps/${map}.json`);
    const mapData = await response.json();
    return new Promise(function(resolve){
      let loadedTiles = 0
      mapData.usedTiles.forEach(function(usedTile){
        img = new Image;
        img.src = `${usedTile}.png`;
        img.onload = function () {
          loadedTiles++
          tileImages[usedTile] = img
          if (loadedTiles === mapData.usedTiles.length) {
            resolve(mapData, tileImages)
          }
        }
      }
      
      }
  }
  
  async function drawMap () {
    const tileWidth = 64;
    const tileHeight = 32;
    for (let y=0, y>=mapData.height, y++) {
      for (let x=0, x>=mapData.width, x++) {
        const isoX = ((x-y-1)*tileWidth + screenWidth)/2;
        const isoY = ((x+y)*tileHeight)/2;
        const tile = mapData.tiles[x][y];
        config.ctx.drawImg(tileImages[tile],isoX,isoY)
      }
    }
  }
}