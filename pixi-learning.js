async mapLoadPixi (){
  const response = await fetch(`res/maps/${this.map}.json`);
  const mapData = await response.json();
  const Application = PIXI.Application(;
  const app = new Application({
    width: mapData.width,
    height: mapData.height,
    transparent: false,
    antialias: true,
  })  //creates a new canvas
      //antialias makes pixelated rendering

    
  app.renderer.backgroundColor = 0x333;  //canva background
    
  const Graphics = PIXI.Graphics;
  const rectangle = new Graphics();  //creates a graphic
  rectangle.beginFill(0xAA33BB)  //draws the rectangle
  .lineStyle(4, 0xFFAA00, 1)  //draw outlinge
  .drawRect(200, 200, 100, 120) //you can use rectangle.drawRect too (x, y, width, height)
  .endFill();  //you can use rectangle.endFill too, this just chains it to the previous code
    
  app.stage.addChild(rectangle)  //shows the graphic on canvas
  
  const polygon = new Graphics()
  polygon.beginFill(0xAA33BB)
  .drawPolygon([
    100,50,
    300, 70,
    150, 150,
    30, 200
  ])  //specifies the corners of the polygon
  .endFill();
  
  const circle = new Graphics
  circle.beginFill(0xAA33BB)
  .drawCircle(200, 150, 80) //(x, y, radius)
  .endFill()
  
  add.stage.addChild(circle)
  add.stage.addChild(polygon) //polygon will be on top of circle since it is appended later
  
  const line = new Graphics
  line.lineStyle(4, 0xAA33BB, 1)  //don't use beginFill() for lines
  moveTo(1000,300) //start here
  lineTo(100,50) //draw a line ending here
  
  app.stage.appendChild(line)
  
  //there are other graphic options too. and more can be downloaded from pixi's page

  const Text = PIXI.Text
  const myText = new Text("Hello world") //Writes text
  
  const style = PIXI.TextStyle({
    fontFamily: "Montserrat",
    fontSize: 30,
    fill: "deepskyblue"
    stroke: "#ffffff"
    strokeThickness: 4,
    dropShadow: true,
    dropShadowDistance: 10,
    dropShadowAngle: Math.PI/2,
    dropShadowBlur: 4,
    dropShadowColor: "#000000"
  }) //fill is for color
  
  app.stage.appendChild(myText, style)
  
  myText.text = "Text changed!" //you can change the text value and style, even after appending
  
  document.body.appendChild(app,view);  //shows the canvas, doesn't need to be on the bottom

  app.ticker.add(delta => loop(delta))  //runs loop every frame, used for animations

  function loop(delta) {
    const rect = new Graphics
    rect.beginFill(0xFFFFFF)
    .drawRect(MATH.random() * app.screen.width,(MATH.random()*app.screen.height, 50, 50)
    //each frame this function is called, another square will be created at a random position
    rect.endFill()
  }
  
  //images soon
}