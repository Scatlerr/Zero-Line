logToScreen("it begins")
initApp()
logToScreen(`Canvas size: ${app.renderer.width} x ${app.renderer.height}`);

document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('gesturechange', e => e.preventDefault());
document.addEventListener('gestureend', e => e.preventDefault());

const mainMenu = document.querySelector("#mainMenu")
const campMenu = document.querySelector("#campMenu")

document.querySelector("#campBtn").onclick = () =>{
    mainMenu.style.display = "none";
    campMenu.style.display = "flex";
}
logToConsole("Hello world");
document.querySelector("#backCampBtn").onclick = () =>{
    campMenu.style.display = "none";
    mainMenu.style.display = "flex"
}

document.querySelector("#startCampBtn").onclick = () => {
    campMenu.style.display = "none"
    loader("test")
}

logToScreen("nevermind")