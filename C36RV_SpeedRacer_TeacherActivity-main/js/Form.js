class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }
  setElementsposition(){
    this.titleImg.position(120,50)
    this.input.position(width/2-100,height/2-100)
    this.playButton.position(width/2-80,height/2-20)
    this.greeting.position(width/2-300,height/2-100)
  }
  setElementstyle(){
    this.titleImg.class("gameTitle")
    this.input.class("customInput")
    this.playButton.class("customButton")
    this.greeting.class("greeting")
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  handleMousePressed(){
    this.playButton.mousePressed(()=>{
  this.input.hide()
  this.playButton.hide()
  this.greeting.html("waiting for another player to join")
    })
  }
  display(){
  this.setElementsposition()
  this.setElementstyle()
  this.handleMousePressed()
  }

}
