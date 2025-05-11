//document.querySelector("loadingScreen").style.display="block"

function loader (map){
    fetch(`./res/maps/${map}.json`)
    .then(response => response.json())
    .then(data => {
        const mapData = data;
        const app = new PIXI.Application({
            width: mapData.map.width,
            height: mapData.map.height
        })
        document.body.appendChild(app.view)
        const loader = PIXI.Loader.shared
        
        mapData.map.usedTiles.forEach(usedTile =>{
            loader.add(`Terrain/${usedTile}`, `./res/img/tiles/${usedTile}.png`)
        })
        mapData.map.units.forEach(usedUnit =>{
            loader.add(`Units/${usedUnit}`, `./res/img/tiles/${usedUnit}.png`)
        })
        loader.load((loader,resources) => {
            terrainRenderer(mapData, app)
        }
    })
}