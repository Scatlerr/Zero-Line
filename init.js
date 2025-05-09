const battlefield = new BF({
    element: document,
    screenHeight: window.innerHeight,
    screenWidth: window.innerWidth,
    tileHeight: 32,
    tileWidth: 64,
    map: "test",
})

battlefield.mapLoad()