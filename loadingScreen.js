//document.querySelector("loadingScreen").style.display="block"

var app = new PIXI.Application() //app is global
document.body.appendChild(app.view)

function loader (map){
    fetch(`./res/maps/${map}.json`)
    .then(response => response.json())
    .then(data => {
        const mapData = data;
        app.renderer.resize(mapData.map.width+mapData.map.height)*32,(mapData.map.height+mapData.map.width)*16)
        const loader = PIXI.Loader.shared
        const resTerrain = {}
        const resUnits = {}
        
        mapData.resources.tiles.forEach(tile =>{
            loader.add("Terrain/"+tile, `./res/img/tiles/${tile.sprite}.png`)
        })
        mapData.resources.units.forEach(unit =>{
            loader.add("Units/"unit, `./res/img/units/${unit.sprite}.png`)
        })
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
        }
    })
}