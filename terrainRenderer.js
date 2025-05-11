function drawTerrain(map) {
  map.tiles.forEach((usedTileRow, y) =>{
    usedTileRow.forEach((usedTile, x) =>{
      const isoX = ((x-y-1)*64 + app.width)/2;
      const isoY = ((x+y)*32)/2;
      const sprite = new PIXI.Sprite(PIXI.Loader.shared.resources["Terrain"][usedTile].texture)
      sprite.x = isoX
      sprite.y = isoY
      app.stage.addChild(sprite)
    })
  })
  app.renderer.render(app.stage)
  app.ticker.stop()
}