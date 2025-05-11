//document.querySelector("loadingScreen").style.display="block"

function loader (map){
    fetch(`./res/maps/${map}.json`)
    .then(response => response.json())
    .then(data => {
        const mapData = data;
        const app = new PIXI.Application({
            width: mapData.width,
            height: mapData.height
        })
        document.body.appendChild(app.view)
        const loader = PIXI.Loader.shared
        mapData.usedTiles.forEach(usedTile =>{
            loader.add(usedTile, `./res/img/tiles/${usedTile}.png`)
        })
        mapData.units.forEach(usedUnit =>{
            loader.add(`Units/${usedUnit}`, `./res/img/tiles/${usedUnit}.png`)
        })
        loader.load((loader,resources) => {
            const terrain = new Terrain({
                tileHeight: 32,
                tileWidth: 64,
                mapData: mapData
            })
            terrainRenderer(mapData, app)
        }
    })
}