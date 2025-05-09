document.querySelector("#campaignBtn").onclick = function{
    const battlefield = new Battlefield({
        element: document,
        screenHeight: window.innerHeight,
        screenWidth: window.innerWidth,
        tileHeight: 32,
        tileWidth: 64,
        map: "test",
    })
    document.querySelector("#mainMenu").style.display = "none"
    battlefield.mapLoad()
}