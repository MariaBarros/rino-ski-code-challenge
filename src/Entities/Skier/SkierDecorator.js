/*----------------------------------------------------------------------------+
 * SkierDecorator decores the skier in the canvas                             +
 * when he jumps or he makes a path in the snow                               +
 *--------------------------------------------------------------------------*/
class SkierDecorator{

  constructor() {
    this.isJumping = false;
    this.pathStep = 0;
  }  

  //The skier jumps
  jump(speed){    
    this.isJumping = true;
    this.timeJumping = 1;

    this.path = [];
    this.jumpSteps = this.setTimingForJump(speed);
  }

  //Define the time for the jumps acording to the speed
  setTimingForJump(speed){
    return [
        {from: 0, to: speed / 4},
        {from: 0, to: speed / 2}, 
        {from: 0, to: speed}, 
        {from: 0, to: speed / 2}, 
        {from: 0, to: speed / 4}
    ];
  }

  getJumpAsset(){
    return SKIER_JUMP_ASSET[this.timeJumping - 1];
  }

  //Control ths skier jump. The jump runs in five times
  controlJump(){
    if(this.timeJumping >= SKIER_TIMING_JUMP){
      this.isJumping = false;
    }else{
      const currentStep = this.jumpSteps[this.timeJumping - 1];
      if(currentStep.from > currentStep.to){
        this.timeJumping ++;        
      }else{
        this.jumpSteps[this.timeJumping - 1].from ++;
      }
    }
  }

  //Saving the path when the skier makes a path in the snow
  updatePath(direction){    
    const centerX = GAME_WIDTH / 2;
    const centerY = GAME_HEIGHT / 2;    
      
    this.addPath(direction, centerX, centerY);

    this.pathStep += 2;

    this.truncatePath(centerX + centerY);

  }

  //Adding a new point in the skier path
  addPath(direction, centerX, centerY){
    switch(direction){
      case SKIER_DIRECTIONS.DOWN:
        if(this.pathStep < centerY){      
          this.path.push({x: centerX, y: centerY - this.pathStep - 1});
        }
        break;
      case SKIER_DIRECTIONS.LEFT_DOWN:
        if(this.pathStep < centerX){      
          this.path.push({x: centerX + 10  + this.pathStep, y: centerY - this.pathStep - 1});
        }
        break;
      case SKIER_DIRECTIONS.RIGHT_DOWN:
        if(this.pathStep < centerX){
          this.path.push({x: centerX  - this.pathStep - 10, y: centerY - this.pathStep - 1});
        }
        break;
    }
  }

  //Truncating the skier path
  truncatePath(maxLengthPath){
    if(this.path.length > maxLengthPath){
      this.path = this.path.slice(Math.max(this.path.length - maxLengthPath, 1));
    }
  }

  //Reset the path when the skier changes the direction
  resetPath(){
    this.pathStep = 0;
    this.path = [];
  }
  
}