class Solo{
    constructor (x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    var options = {
        isStatic:true
    }
        this.body=Bodies.rectangle(x,y,w,h,options); 
        World.add(world,this.body);  
    }
    cerveja (){
        rectMode(CENTER)
        rect(this.x ,this.y,this.w,this.h);
    }

}