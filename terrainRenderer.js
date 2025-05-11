function terrainRenderer(map, app) {
  const terrainLayer = new PIXI.container()
  app.stage.appendChild(terrainLayer);

  map.tiles.forEach((usedTileRow, y) =>{
    usedTileRow.forEach((usedTile, x) =>{
      const isoX = ((x-y-1)*64 + app.width)/2;
      const isoY = ((x+y)*32)/2;
      const sprite = new PIXI.Sprite(PIXI.Loader.shared.resources[`Terrain/${usedTile}`].texture);
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
  groundLayer.addChild(unit.sprite)
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
    this.sprite = PIXI.sprite(PIXI.loader.shared[(this.isGround)?"Ground":"Air"][typeID]);
  }
  addToRenderer (){
    unitRenderer(this)
  }
}