//document.querySelector("loadingScreen").style.display="block"

var app = new PIXI.Application() //app is global
document.body.appendChild(app.view)

function loader (map){
    fetch(`./res/maps/${map}.json`)
    .then(response => response.json())
    .then(data => {
        const mapData = data;
        app.width = mapData.map.width
        app.height = mapData.map.height
        const loader = PIXI.Loader.shared
        
        mapData.map.usedTiles.forEach(usedTile =>{
            loader.add(`Terrain/${usedTile}`, `./res/img/tiles/${usedTile}.png`)
        })
        mapData.map.groundUnits.forEach(usedUnit =>{
            loader.add(`Ground/${usedUnit.typeID}`, `./res/img/units/${usedUnit.Image}.png`)
        })
        loader.load((loader,resources) => {
            terrainRenderer(mapData)
        }
    })
}