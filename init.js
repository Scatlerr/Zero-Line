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
const app = new PIXI.Application()
document.querySelector("#startCampBtn").onclick = () => {
    campMenu.style.display = "none"
    logToScreen("started")
    loader("test", app)
}