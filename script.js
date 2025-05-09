class Battlefield {
  constructor (config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".battlefield");
    this.ctx = this.canvas.getContext("2d");
    this.screenHeight = config.screenHeight;
    this.screenWidth = config.screenWidth;
    this.tileHeight = config.tileHeight;
    this.tileWidth = config.tileWidth;
    this.map = config.map
  }
  
  async mapLoad() {
    const self = this
    const response = await fetch (`maps/${this.map}.json`);
    const mapData = await response.json();
    return new Promise(function(resolve){
      let loadedTiles = 0
      let tileImages = {}
      mapData.usedTiles.forEach(function(usedTile){
        const img = new Image;
        img.src = `res/img/tiles/${usedTile}.png`;
        img.onload = function () {
          loadedTiles++
          tileImages[usedTile] = img
          if (loadedTiles === mapData.usedTiles.length){
            //Map Drawing
            for (let y=0; y<mapData.height; y++) {
              for (let x=0; x<mapData.width; x++) {
                const isoX = ((x-y-1)*self.tileWidth + self.screenWidth)/2;
                const isoY = ((x+y)*self.tileHeight)/2;
                const tile = mapData.tiles[x][y];
                self.ctx.drawImage(tileImages[tile],isoX,isoY)
              }
            }
            resolve(mapData)
          }
        }
      }
    })
  }
}