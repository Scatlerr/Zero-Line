const terrainLayer = new PIXI.container();
const groundLayer = new PIXI.container();
const airLayer = new PIXI.container();

app.stage.appendChild(terrainLayer);
app.stage.appendChild(groundLayer);
app.stage.appendChild(airLayer);.

function terrainRenderer(map) {
  map.tiles.forEach((usedTileRow, y) =>{
    usedTileRow.forEach((usedTile, x) =>{
      const isoX = ((x-y-1)*64 + app.width)/2;
      const isoY = ((x+y)*32)/2;
      const sprite = new PIXI.Sprite(PIXI.Loader.shared.resources["Terrain"][usedTile].texture);
      sprite.x = isoX;
      sprite.y = isoY;
      terrainLayer.addChild(sprite);
    })
  })
  terrainLayer.cacheAsBitmap = true;
}

function unitRenderer(unit) {
  unit.sprite.x = ((unit.x-unit.y-1)*64 + app.width)/2;
  unit.sprite.y = ((unit.x+unit.y)*32)/2
  groundLayer.addChild(sprite)
}