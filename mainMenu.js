const mainMenu = document.querySelector("#mainMenu")
const campMenu = document.querySelector("#campMenu")

document.querySelector("#campBtn").onclick = () =>{
    mainMenu.style.display = "none";
    campMenu.style.display = "flex";
}

document.querySelector("#campBackBtn").onclick = () =>{
    campMenu.style.display = "none";
    mainMenu.style.display = "flex"
}

document.querySelector("#startCampBtn").onclick = () => {
    campMenu.style.display = "none"
    loader("test")
}