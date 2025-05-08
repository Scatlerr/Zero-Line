class battlefield {
  constructor (config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(.battlefield);
    this.ctx = this.canvas.getContext("2d");
  }
  
  const screenHeight = window.screen.height;
  const screenWidth = window.screen.width;
  
  
  
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
          if (loadedTiles === mapData.usedTiles.length) {
            resolve(mapData)
          }
        }
      }
      
      }
  }
  
  async function drawMap (mapData) {
    for (x=0, x>=screenWidth, x++) {}
  }
}