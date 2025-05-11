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

function unitReady (config){
  
    const img = new Image();
    img.src = `res/img/units/${config.ID}.png`;
    img.onload = function(){
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        const ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        //Change magenta to team color
        for (let i=0; i<data.length; i+=4){
            if (data[i]===255 && data[i+1]===0 && data[i+2]===255){ //Checks if it is magenta
                data[i] = config.owner.teamColor[2];  //sets red
                data[i+1] = config.owner.teamColor[3];  //sets green
                data[i+2] = config.owner.teamColor[4];  //sets blue
            }
        }
        ctx.putImageData(imageData, 0, 0)
        config.minded = null
        config.x = config.owner.primaryBarracks.exitPoint.x
        config.y = config.owner.primaryBarracks.exitPoint.y
        config.image = canvas
        
        const unit = new Unit(config)
    }
}

class Unit {
    constructor(config){
        this.ID = config.ID;
        this.owner = config.owner || "civilianSide";
        this.minded = config.minded || null;
        this.x = config.x || document.querySelector("#battlefield").width/2;
        this.y = config.y || document.querySelector("#battlefield").height/2;
        this.maxHP = config.maxHP || 1000;
        this.HP = config.HP || this.maxHP;
        this.moveToX = config.moveToX || null;
        this.moveToY = config.moveToY || null;
        this.image = config.image;
    }
    addToRenderer (){
      unitRenderer(this)
    }
}