class stoneclass{
    constructor (x,y,){
        var options= {
        isStatic:false , 
        'restitution ': 0 ,
        'friction': 1.2 ,
        'density': 1
        }
    }
}
    
this.image=loadImage('IMAGE/Plucking mangoes stone.png');
this.body=bodies.Rectangle(x,y,width,options);
this.width=width;
this.height=height;
this.image=loadImage('IMAGES/Plucking mangoes tree.png');
Worldadd (world ,  this.body);{

}display() 
var angle= this.body.angle;
Push();
translate (This.body.position.x,this.body.position.y);
rotate(angle);
imageMode('CENTER');
image(this.image,0,0,this.width,this.height);
Pop() ;





