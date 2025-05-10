class unit {
    constructor(config){
        this.ID = config.ID;
        this.team = config.team;
        this.x = config.x;
        this.y = config.y;
        this.maxHP = confix.maxHP;
        this.HP = config.HP;
        this.moveToX = config.moveToX;
        this.moveToY = config.moveToY;
        this.fakeTeam = config.fakeTeam;
        this.image = config.image;
        this.canvas = document.querySelector(#battlefield);
        this.ctx = canvas.ctx("2d");
    }
    drawUnit (){
        const isoX = ((x-y-1) + screenWidth)/2;
        const isoY = (x+y)/2;
        ctx.drawImage(image, isoX, isoY);
    }
}