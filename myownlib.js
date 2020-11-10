function isTouching(ob1,ob2)
{
if(ob1.x-ob2.x<=ob1.width/2+ob2.width/2
    && ob2.x-ob1.x<=ob1.width/2+ob2.width/2)
{
    ob1.velocityX=0;
    var damage=(0.5*weight*speed*speed)/Math.pow(thickness,3);
        if(damage>10)
        {
            ob2.shapeColor=rgb(255,0,0);
        }
        else if(damage<=10)
        {
            ob2.shapeColor=rgb(0,255,0);
        }
        
    fill("white");
    stroke("red");
    textSize(30);
    text("Damage:"+Math.round(damage),30,50);
}
else
{
   ob2.shapeColor="white";
}
}
