class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount()
    car1=createSprite(width/2,height)
    car1.addImage("car",car1image)
    car1.scale=0.5
    car2=createSprite(width/2,height)
    car2.addImage("car",car2image)
    car2.scale=0.5
    cars=[car1,car2]
  }
  handlelements(){
    form.hide()
    form.titleimage.position(50,50)
    form.titleimage.class("gametitle")

  }
  play(){
    this.handlelements()
    Player.getplayerinfo()
    if(allplayers!==undifined){
      image(track,0,-height,width,height)
      var index=0
      for(var plr in allplayers){
        index=index+1
        var X=allplayers[plr].positionX
        var Y=allplayers[plr].positionY
        cars[index-1].position.X=X
        cars[index-1].position.Y=Y
        if(index===player.index){
          ellips(x,y,60,60)
          
        }
      }
      drawSprites()
    }
  }
  
  getstate(){
    var gamestateref=database.ref ("gameState")
    gamestateref.on("value",function(data){
      gameState=data.val()
    })
  }
  handleplayercontrol(){
    if(keyIsDown(UP_ARROW)){
      player.positionY+=10
      player.update()
    }
  }
}
