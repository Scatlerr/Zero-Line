//document.querySelector("loadingScreen").style.display="block"

var app = new PIXI.Application() //app is global
document.body.appendChild(app.view)

function loader (map){
    fetch(`./res/maps/${map}.json`)
    .then(response => response.json())
    .then(data => {
        const mapData = data;
        app.renderer.resize((mapData.map.width+mapData.map.height)*32,(mapData.map.height+mapData.map.width)*16)
        const loader = PIXI.Loader.shared
        const resTerrain = {}
        const resUnits = {}
        
        for (let tile in mapData.resources.tiles){
            loader.add("Terrain/"+mapData.resources.tiles.tile.typeID, `./res/img/tiles/${mapData.resources.tiles.tile.sprite}.png`)
        }
        for (let unit in mapData.resources.units){
            loader.add("Units/"+mapData.resources.units.unit.typeID, `./res/img/units/${mapData.resources.units.unit.sprite}.png`)
        }
        loader.load((loader,resources) => {
            for (let key in resources){
                const [objectType, ID] = key.split("/")
                if (objectType === "Terrain"){
                    resTerrain[ID]=resources[key]
                } else if (objectType === "Units"){
                    resUnits[ID] = resources[key]
                }
                
            }
            terrainRenderer(mapData, resTerrain)
        })
    })
}