class Terrain {
  constructor (config) {
    this.canvas = document.querySelector(".battlefield");
    this.ctx = this.canvas.getContext("2d");
    this.tileHeight = config.tileHeight;
    this.tileWidth = config.tileWidth;
    this.map = config.map;
    this.canvas.width = (this.map.width+this.map.height)*this.tileWidth;
    this.canvas.height = (this.map.width+this.map.height)*this.tileHeight;
  }
  
  drawTerrain() {
    this.map.tiles.forEach(usedTileRow, y =>{
      usedTileRow.forEach(usedTile, x =>{
        const isoX = ((x-y-1)*this.tileWidth + this.canvas.width)/2;
        const isoY = ((x+y)*this.tileHeight)/2;
        const sprite = new PIXI.Sprite(PIXI.Loader.shared.resources[usedTile].texture)
      })
    })
  }
}
