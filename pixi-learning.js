  async mapLoadPixi (){
    const response = await fetch(`res/maps/${this.map}.json`);
    const mapData = await response.json();
    const Application = PIXI.Application(;
    const app = new Application({
      width: mapData.width,
      height: mapData.height,
      transparent: false,
      antialias: true,
    })
    
    app.renderer.backgroundColor = 0x333;
    
    const Graphics = PIXI.Graphics;
    const rectangle = new Graphics();
    rectangle.beginFill(0xAA33BB);
    .lineStyle(4, 0xFFAA00, 1);
    .drawRect(200, 200, 100, 120); //you can use rectangle.drawRect too
    .endFill();  //you can use rectangle.endFill too, this just chains it to the previous code
    
    app.stage.addChild(rectangle)
    
    document.body.appendChild(app,view);
  }