const mainMenu = document.querySelectorAll("#mainMenu)
const campMenu = document.querySelectorAll("#mainMenu)

document.querySelector("#campBtn").onclick = () =>{
    mainMenu.style.display = "none";
    campMenu.style.display = "flex";
}

document.querySelector("#campBackBtn").onclick = () =>{
    campMenu.style.display = "none";
    mainMenu.style.display = "flex"
}

document.querySelector("#startCampBtn").onclick = () => {
    mainMenu.style.display = "none"
}