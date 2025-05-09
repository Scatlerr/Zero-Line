const battlefield = new Battlefield({
    element: document,
    screenHeight: window.screenHeight,
    screenWidth: window.screenWidth,
    tileHeight: 32,
    tileWidth: 64,
    map: "test",
})

battlefield.mapLoad()