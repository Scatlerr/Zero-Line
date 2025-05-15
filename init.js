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
    logToScreen("fetching map")
    fetch(`./res/maps/${map}.json`)
    .then(response => response.json())
    .then(data => {
        logToScreen(JSON.stringify(data))
        const height = data.map.height;
        logToScreen(height)
        const width = data.map.width;
        const resources = data.resources;
        logToScreen(width)
        logToScreen((height+width)/16)
        const app = new PIXI.Application({
            height: (height+width)*16,
            width: (height+width)*32
        });
        logToScreen("😀")
        document.body.appendChild(app.view)
        logToScreen("appended app")
        loader(resources, app, data);
        
        
    })
}

function loader (resource, app, data) {
    logToScreen("Loader started")
    const resTerrain = new PIXI.Loader;
    for (let key in resource.tiles){
        resTerrain.add(key, "res/img/tiles/"+resource.tiles[key].sprite+".png");
    };
    
    resTerrain.load((loader, resources) => {
        terrainRenderer(data, resTerrain, app);
    });
    
    const resUnits = new PIXI.Loader;
    for (let key in resource.units){
        resUnits.add(key, "res/img/units/"+resource.units[key].sprite+".png");
    };
    
    resUnits.load((loader, resources) => {
        unitRenderer(data, resUnits, app)
    })
}

function terrainRenderer (data, resTerrain, app){
    logToScreen("renderer active")
    const terrainLayer = new PIXI.Container();
    app.stage.addChild(terrainLayer);
    
    const tiles = data.map.tiles;
    tiles.forEach((usedTileRow, y) => {
        usedTileRow.forEach((usedTile, x) => {
            const sprite = new PIXI.Sprite(resTerrain[usedTile].texture);
            sprite.x = (x-y)*32 + app.screen.width/2;
            sprite.y = (x+y)*16;
            logToScreen("tile placed: "+ x +","+y)
            terrainLayer.addChild(sprite);
        })
    })
    terrainLayer.cacheAsBitmap = true;
}

function unitRenderer (map, resUnits, app){
    
}