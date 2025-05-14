document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('gesturechange', e => e.preventDefault());
document.addEventListener('gestureend', e => e.preventDefault());

const mainMenu = document.querySelector("#mainMenu");
const campMenu = document.querySelector("#campMenu");

document.querySelector("#campBtn").onclick = () =>{
    mainMenu.style.display = "none";
    campMenu.style.display = "flex";
}

document.querySelector("#backCampBtn").onclick = () =>{
    campMenu.style.display = "none";
    mainMenu.style.display = "flex";
}
document.querySelector("#startCampBtn").onclick = () => {
    campMenu.style.display = "none";
    logToScreen("started");
    loadingScreen("test");
}

function loadingScreen (map){
    
    fetch(`./res/maps/${map}.json`)
    .then(response => response.json())
    .then(data => {
        const height = data.map.height;
        const width = data.map.width;
        const resources = data.resources;
        
        const app = new PIXI.Application({
            height: (height+width)*16,
            width: (height+width)*32
        });
        loader(resources, app, data);
        
        
    })
}

function loader (resource, app, data) {
    const loader = PIXI.Loader.shared;
    for (let key in resource.tiles){
        logToScreen(JSON.stringify(key));
        loader.add("Terrain/" + key);
    }
    
    resTerrain = {};
    resUnits = {};
    
    loader.load((loader, resources) => {
        for (let key in resources){
            const [objectType, ID] = key.split("/");
            if (objectType === "Terrain"){
                resTerrain[ID]=resources[key];
            } else if (objectType === "Units"){
                resUnits[ID] = resources[key];
            }
        }
        terrainRenderer(data, resTerrain, app);
    })
}

function terrainRenderer (data, resTerrain, app){
    const terrainLayer = new PIXI.Container();
    app.stage.addChild(terrainLayer);
    
    const tiles = data.map.tiles;
    tiles.forEach((usedTileRow, y) => {
        usedTileRow.forEach((usedTile, x) => {
            const sprite = new PIXI.Sprite(resTerrain[usedTile].terrain);
            sprite.x = (x-y)*32 + app.width/2;
            sprite.y = (x+y)*16;
            terrainLayer.addChild(sprite);
        })
    })
    terrainLayer.cacheAsBitmap = true;
}