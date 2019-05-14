 class Skier{

  constructor() {
    this.direction = 5;
    this.position = {x: 0, y: 0};
    this.asset = 'skierRight';
    this.speed = 8;
    this.isJumping = false;
  };

  /*----------------------------------------------------------------------------+
  * Skier setters section                                                       +
  *----------------------------------------------------------------------------*/
  //Set skier image to draw
  //@param Object value
  setImage(value){
    this.image = value;
  };

  //Set the skier position
  //@param Number gameWidth: the game's with
  //@param Number gameHeigth the game's height
  setPosition(gameWidth, gameHeight){
    this.position.x = (gameWidth - this.image.width) / 2;
    this.position.y = (gameHeight - this.image.height) / 2;    
  };

  //The skier collisions with a obstacle
  setCollision(){
    this.direction = 0;
    this.setAsset();    
  };

  //Set the skier asset
  setAsset(){
    switch(this.direction) {     
      case 0:
        this.asset = 'skierCrash';
        break;
      case 1:
        this.asset = 'skierLeft'
        break;    
      case 2:
        this.asset = 'skierLeftDown';
        break;
      case 3:
        this.asset = (this.isJumping) ? this.getAssetJumping() :'skierDown';            
        break;
      case 4:
        this.asset = 'skierRightDown'
        break;
      case 5: 
        this.asset = 'skierRight'
        break;
    }
  };

  /*----------------------------------------------------------------------------+
  * Skier getters section                                                       +
  *----------------------------------------------------------------------------*/
  //Get skier asset when he is jumping
  getAssetJumping(){
    return 'skier_jump_' + this.timeJumping;    
  };

  //Get skier area for verifying collision with obstacles
  getRect(){
    return {
          left: this.position.x,
          right: this.position.x + this.image.width,
          top: this.position.y,
          bottom: this.position.y + this.image.height
      };
  };

  //Get skier left area for placing new obstacles
  //@param Number gameHeight
  getAreaLeft(gameHeight){
    let x = this.position.x,
      y = this.position.y;

    return {
      width: {min: -50, max: x - 100},
      height: {min: y + 100, max: y + gameHeight}
    };
  };

  //Get skier down area for placing new obstacles
  //@param Number gameWidth, Number gameHeight
  getAreaDown(gameWidth, gameHeight){
    let x = this.position.x, 
      y = this.position.y;       

    return {
      width: {min: -50, max: gameWidth}, 
      height: {min: gameHeight -50, max: gameHeight + 50}
    };
  };

  //Get skier right area for placing new obstacles
  //@param Number gameWidth, Number gameHeight
  getAreaRight(gameWidth, gameHeight){
    let right = this.position.x + gameWidth,
      top = this.position.y;            

    return {
      width: {min: right, max: gameWidth + 50}, 
      height: {min: top + 100, max: gameHeight}
    };
  };

  //Get skier up area for placing new obstacles
  //@param Number gameWidth, Number gameHeight
  getAreaUp(gameWidth, gameHeight){
    let left = this.position.x,        
        bottom = this.position.y;

    return {
      width: {min: -50, max: gameWidth + 50}, 
      height: {min: bottom - 100, max: bottom - 50}
    };
  };

  //Get skier area for placing new obstacles
  //@param Number gameWidth, Number gameHeight
  getArea(gameWidth, gameHeight){
    let areaWidth = {
      min: this.position.x - (gameWidth / 2) - 50, 
      max: this.position.x + (gameWidth / 2) + 50},

      areaHeight = {
        min: this.position.y - 100, 
        max: this.position.y + gameHeight + 50
      };

    return {width: areaWidth, height: areaHeight};
  };

  /*----------------------------------------------------------------------------+
  * Skier actions section                                                       +
  *----------------------------------------------------------------------------*/
  sky(speed){    
    this.speed = speed;
    switch(this.direction) {     
      case 2: //LeftDown
        this.position.x -= Math.round(this.speed / 1.4142);
        this.position.y += Math.round(this.speed / 1.4142);                
        break;
      case 3: //Down
        this.position.y += this.speed;      
        break;
      case 4: //RightDown
        this.position.x += (this.speed / 1.4142);
        this.position.y += (this.speed / 1.4142);        
        break;      
    }    
    this.setAsset();
  }; 

  //The skier goes to left
  moveLeft(){
    if(this.direction === 1){      
        this.position.x -= this.speed;       
      }else{
        //The skier rotates to left
        this.direction --;    
      }    
  };

  //The skier goes to right
  moveRight(){
    if(this.direction === 5){
      this.position.x += this.speed;      
    }else{
      //The skier rotates to right
      this.direction ++;    
    }         
  };

  //The skier goes down
  moveDown(){
    this.direction = 3;
  };

  //The skier goes up
  moveUp(){
    this.position.y -= this.speed;
    this.direction = 6;
  };

  //The skier jumps
  jump(){
    this.isJumping = true;
    this.timeJumping = 1;
  };  

  //Control ths skier jump. The jump runs in five times
  controlJump(){
    if(this.timeJumping >= 5){
      this.isJumping = false;
    }else{      
      this.timeJumping ++;      
    }
  };
  
}