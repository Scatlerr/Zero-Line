logToScreen("bye")

document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('gesturechange', e => e.preventDefault());
document.addEventListener('gestureend', e => e.preventDefault());

const mainMenu = document.querySelector("#mainMenu")
const campMenu = document.querySelector("#campMenu")

document.querySelector("#campBtn").onclick = () =>{
    mainMenu.style.display = "none";
    campMenu.style.display = "flex";
}

document.querySelector("#backCampBtn").onclick = () =>{
    campMenu.style.display = "none";
    mainMenu.style.display = "flex"
}
document.querySelector("#startCampBtn").onclick = () => {
    campMenu.style.display = "none"
    logToScreen("started")
    loadingScreen("test")
}

function loadingScreen (map){
    
    fetch(`./res/maps/${map}.json`)
    .then(response => response.json())
    .then(data => {
        const height = data.map.height;
        const width = mapData.map.width;
        const resources = mapData.resources;
        
        const app = new PIXI.Application({
            height: (height+width)*16,
            width: (height+width)*32
        });
        loader (resources.tiles, "Terrain/", app)
        
        
    })
}

function loader (data, type, app) {
    const loader = PIXI.loader.shared
    for (let key in data){
        logToScreen(JSON.stringify(key));
        loader.add(type + key[typeID])
    }
    
    resTerrain = {}
    resUnits = {}
    
    loader.load(loader, resources) => {
        for (let key in resources){
            const [objectType, ID] = key.split("/")
            if (objectType === "Terrain"){
                resTerrain[ID]=resources[key]
            } else if (objectType === "Units"){
                resUnits[ID] = resources[key]
            }
        }
        terrainRenderer(data, app)
    }
}