function terrainRenderer(mapData, resTerrain) {
  const terrainLayer = new PIXI.Container()
  app.stage.appendChild(terrainLayer);

  mapData.map.tiles.forEach((usedTileRow, y) =>{
    usedTileRow.forEach((usedTile, x) =>{
      logToConsole("Rendering: " + usedTile + "at" + x + "," + y)
      const sprite = new PIXI.Sprite(resTerrain[usedTile].texture);
      if (!resTerrain[usedTile]){logToConsole("NOTHING HERE WE ARE DOOMED "+usedTile)}
      sprite.x = ((x-y-1)*64 + app.width)/2;
      sprite.y = ((x+y)*32)/2;
      terrainLayer.addChild(sprite);
    })
  })
  terrainLayer.cacheAsBitmap = true;
}

const unitLayer = new PIXI.Container()
app.stage.appendChild(unitLayer)
function unitRenderer(unit) {
  unit.sprite.x = ((unit.x-unit.y-1)*64 + app.width)/2;
  unit.sprite.y = ((unit.x+unit.y)*32)/2
  unitLayer.addChild(unit.sprite)
}

class Unit {
  constructor(config){
    this.typeID = config.typeID;
    this.ID = config.ID
    this.owner = config.owner || "civilianSide";
    this.minded = config.minded || null;
    this.x = config.x || document.querySelector("#battlefield").width/2;
    this.y = config.y || document.querySelector("#battlefield").height/2;
    this.maxHP = config.maxHP || 1000;
    this.HP = config.HP || this.maxHP;
    this.moveToX = config.moveToX || null;
    this.moveToY = config.moveToY || null;
    this.isGround = config.isGround || true;
    this.sprite = new PIXI.Sprite(resUnits[this.typeID].texture)
  }
  addToRenderer (){
    unitRenderer(this)
  }
}
