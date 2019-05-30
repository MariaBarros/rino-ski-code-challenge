/*----------------------------------------------------------------------------------+
 * Skier moves the skier in the canvas and verifies collision                       +
 * This class has a decorator for controls the jump and draw the path in the snow   +
 *---------------------------------------------------------------------------------*/
class Skier extends Element{

  constructor(x, y) {
    super(x, y);
    this.decorator = new SkierDecorator();
    this.observable = new Observable();
  }

  //Placing the skier in the center
  init(){
    this.direction = SKIER_DIRECTIONS.RIGHT;
    this.assetName = SKIER_RIGHT;
    this.decorator.reset();
    this.x = 0;
    this.y = 0;        
    this.crashed = false;
  }  

  //Set the skier direction
  setDirection(direction) {
    this.direction = direction;
    this.updateAsset();
    this.crashed = direction === SKIER_DIRECTIONS.CRASH;    
  }

  //Getting the skier assetName for drawing
  updateAsset() {    
    this.assetName = SKIER_DIRECTION_ASSET[this.direction];    
  }
  

  isSkying(){
    return this.direction === SKIER_DIRECTIONS.LEFT_DOWN || 
        this.direction === SKIER_DIRECTIONS.DOWN || this.direction === SKIER_DIRECTIONS.RIGHT_DOWN;
  }
  
  //Moving the skier  
  move(speed){    
    this.speed = speed;
    switch(this.direction) {     
      case SKIER_DIRECTIONS.LEFT_DOWN:
        this.moveSkierLeftDown();
        break;
      case SKIER_DIRECTIONS.DOWN:
        this.moveSkierDown();
        break;
      case SKIER_DIRECTIONS.RIGHT_DOWN:
        this.moveSkierRightDown();
    }    
  }

  moveSkierLeft() {
    this.x -= SKIER_STARTING_SPEED;
  }

  //Update the skier position and the path
  moveSkierLeftDown() {
    this.x -= this.speed / SKIER_DIAGONAL_SPEED_REDUCER;
    this.y += this.speed / SKIER_DIAGONAL_SPEED_REDUCER;
    this.decorator.updatePath(this.direction);
  }

  moveSkierDown() {
    this.y += this.speed;
    if(this.isJumping() === true){
      //Decore jump
      this.assetName = this.decorator.getJumpAsset();
      this.decorator.controlJump();      
      return;
    }    
    this.updateAsset();
    this.decorator.updatePath(this.direction);     
  }

  moveSkierRightDown() {
    this.x += this.speed / SKIER_DIAGONAL_SPEED_REDUCER;
    this.y += this.speed / SKIER_DIAGONAL_SPEED_REDUCER;
    this.decorator.updatePath(this.direction);
  }
  
  moveSkierRight() {
    this.x += SKIER_STARTING_SPEED;
  }

  //The skier goes up
  moveSkierUp(){
    this.y -= SKIER_STARTING_SPEED; 
  }

  //Change direction reset the skier path
  turnLeft() {
    if(this.direction === SKIER_DIRECTIONS.LEFT) {
      this.moveSkierLeft();
      return;
    }
    //Skier rotates
    this.setDirection(this.direction - 1);
    this.decorator.reset();    
  }

  //Change direction reset the skier path
  turnRight() {
    if(this.direction === SKIER_DIRECTIONS.RIGHT) {
      this.moveSkierRight();
      return;
    }
    //Skier rotates
    this.setDirection(this.direction + 1);  
    this.decorator.reset();         
  }

  turnUp() {
    if(this.direction === SKIER_DIRECTIONS.LEFT || this.direction === SKIER_DIRECTIONS.RIGHT) {
      this.moveSkierUp();
    }
  }

  //The skier goes down
  turnDown() {
    this.setDirection(SKIER_DIRECTIONS.DOWN);
    this.decorator.resetPath();
  }
  

  //The skier jumps
  jump(){
    if(this.direction !== SKIER_DIRECTIONS.DOWN){
      return;
    }

    this.decorator.jump(this.speed);    
  }

  isJumping(){
    return this.decorator.isJumping === true;
  }

  //Draw the skier and his path in the snow
  drawAndDecore(canvas){
    this.draw(canvas);
    canvas.drawRect("200,200,200", this.decorator.path);
  } 

  //Verify collision
  checkIfSkierHitObstacle(obstacleManager) {
    const asset = AssetsManager.getAsset(this.assetName);    
    const skierBounds = this.getBounds();

    const collision = obstacleManager.getObstacles().find((obstacle) => {      
      const obstacleBounds = obstacle.getBounds();
      const intersected = intersectTwoRects(skierBounds, obstacleBounds);
      if(intersected === false){
        return false;
      }      
      //Obstacle intersected and cannot be jumped
      if(obstacle.canBeJumped === false){
        return true;
      }

      //Jump over rump
      if(obstacle.isRump === true){
        this.jump();
        this.notify({credit: CREDIT_FOR_JUMP * this.speed});
        return false;
      }

      //Jump over rock
      if(this.isJumping() === true){
        this.notify({credit: CREDIT_FOR_JUMP * this.speed});
        return false;
      }else{
        return true;
      }
      
    });

    if(collision) {
      this.setDirection(SKIER_DIRECTIONS.CRASH);      
    }
  }

  notify(data){
    this.observable.notify(data);
  }
}