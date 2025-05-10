document.querySelector("#campBtn").onclick = () =>{
    document.querySelectorAll(".mainMenu").style.display = "none";
    document.querySelectorAll(".campMenu").style.display = "flex";
}

document.querySelector("#campBackBtn").onclick = () =>{
    document.querySelectorAll(".campMemu").style.display = "none";
    document.querySelectorAll(".mainMenu").style.display = "flex"
}