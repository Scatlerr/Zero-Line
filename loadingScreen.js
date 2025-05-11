//document.querySelector("loadingScreen").style.display="block"
function loader (map){
    fetch(`./res/maps/${map}.json`)
    .then(response => response.json())
    .then(data => {
        mapData = data;
        const app = new PIXI.Application({
            width: mapData.width,
            height: mapData.height
        })

        const loader = PIXI.loader.shared
        mapData.usedTiles.forEach(usedTile =>{
            loader.add(usedTile, `./res/img/tiles/${usedTile}.png`)
        })
        loader.load(loadingComplete)

        function loadingComplete (){
            const terrain = new Terrain({
                tileHeight: 32,
                tileWidth: 64,
                mapData: mapData
            })
            terrainRenderer(mapData)
        }

    })
}