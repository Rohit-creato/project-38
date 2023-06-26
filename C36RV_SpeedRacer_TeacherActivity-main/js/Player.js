class Player {
  constructor() {}
  getCount(){
    var playerCountref=database.ref("playerCount")
    playerCountref.on("value",data=>{
    playerCount=data.val()
    })
  }
  getdistance(){
    playerdistanceref=database.ref("player"+this.index)
    playerdistanceref.on("value",data=>{
      var data=data.val()
      this.positonX=data.positonX
      this.poitionY=data.positonY
    })
  }
  updatecount(count){
    database.ref("/").update({
      playerCount:count
    })
  }
  
}
