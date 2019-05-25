class Rhino extends Element{

  constructor() {
    super();
    this.decorator = new RhinoDecorator();    
  }

  init(){        
    this.decorator.reset();
    this.setAsset();
    this.appears = false;
    this.timming = 0;
  }  
  
  /*----------------------------------------------------------------------------+
  * Rino actions section                                                        +
  *----------------------------------------------------------------------------*/  
  run(skier){
    if(this.timming < RHINO_MOMENT){
      this.timming += 1;
      return;
    }

    if(this.appears === false){
      this.intro(skier);
    }
    
    if(this.isRunning() === true){
      this.move(skier);
    }

    this.decorator.controlStates();    

    this.setAsset();
  }

  setAsset(){    
    this.assetName = this.decorator.getAsset();    
  }

  intro(skier){
    this.x = skier.x + (GAME_WIDTH);
    this.y = skier.y - (GAME_HEIGHT / 2);
    this.appears = true;
  }

  drawAndDecore(canvas){
    if(this.appears === true){
      this.draw(canvas);
    }
  }
  
  isRunning(){
    const state = this.decorator.state;
    return state.name === RHINO_STATES.RUNNING;
  }

  catchSkier(){
    const state = this.decorator.state;
    return state.name === RHINO_STATES.LIFT || state.name === RHINO_STATES.MOUTH_OPEN ||
           state.name === RHINO_STATES.EAT;
  }

  eat(){
   return this.decorator.finish === true;
  }

  move(skier){    
    const speed = skier.speed * 1.1;
    switch(skier.direction) {     
      case SKIER_DIRECTIONS.LEFT_DOWN:
        this.updatePosition(skier, speed);
        this.y += speed / SKIER_DIAGONAL_SPEED_REDUCER;
        break;
      case SKIER_DIRECTIONS.DOWN:    
        this.y += speed;
        break;
      case SKIER_DIRECTIONS.RIGHT_DOWN:        
        this.updatePosition(skier, speed);
        this.y += speed / SKIER_DIAGONAL_SPEED_REDUCER;     
        break;      
    }    

    if(skier.y < this.y){
      this.y = skier.y;      
        if(skier.x > this.x){
          this.x += speed;
        }else{
          this.x -= speed;
        }      
    }

    const intersected = intersectTwoRects(skier.getBounds(), this.getBounds());

    if(intersected === true){      
      this.decorator.nextState();
    }
  }

  updatePosition(skier, speed){
    if(this.x < skier.x){
      this.x += speed / SKIER_DIAGONAL_SPEED_REDUCER;  
    }else{
      this.x -= speed / SKIER_DIAGONAL_SPEED_REDUCER;
    }
  }

}