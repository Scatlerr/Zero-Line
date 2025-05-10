function unitReady (config){
    const img = New Image();
    img.src = "res/img/units/${config.ID}.png";
    img.onload(function(){
        canvas = document.createElement("canvas")
        ctx = canvas.ctx;
        ctx.drawImage(img);
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        data = imageData.data
        //Change magenta to team color
        for (i=0; i<data.lenght; i+=4){
            const r = data[i];
            const g = data[i+1];
            const b = data[i+2];
            if (r===255 && b===255){
                r = config.owner.teamColor[2];
                g = config.owner.teamColor[3];
                b = config.owner.teamColor[4];
            }
        }
        const unit = New unit({
            ID = config.ID,
            owner = config.owner,
            minded = null
            this.x = owner.primaryBarracks.exitPointx
            this.y = owner.primaryBarracks.exitPoint.y
            imageData = imageData
        })
    })
}

class unit {
    constructor(config){
        this.ID = config.ID;
        this.owner = config.owner;
        this.minded = config.minded || null;
        this.x = config.x;
        this.y = config.y;
        this.maxHP = confix.maxHP;
        this.HP = config.HP;
        this.moveToX = config.moveToX;
        this.moveToY = config.moveToY;
        this.imageData = config.imageData;
        this.canvas = document.querySelector(#battlefield);
        this.ctx = canvas.ctx("2d");
    }
    
    drawUnit (){
        const isoX = ((x-y-1) + screenWidth)/2;
        const isoY = (x+y)/2;
        ctx.drawImage(image, isoX, isoY);
    }
}