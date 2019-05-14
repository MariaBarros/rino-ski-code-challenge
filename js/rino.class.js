 class Rino{

  //@param Number gameWidth: the game's with
  //@param Number gameHeigth the game's height
  constructor() {        
    this.setStates();    
  };

  init(gameWidth, gameHeight){
    this.position = {x: gameWidth + 50, y: Math.round((gameWidth/4))};    
    this.state = this.states.initial;
    this.asset = this.state.asset;
    this.timeForState = 1;   
    this.eatFinish = false; 
  }

  setStates(){
    this.states = {
      initial: {name: 'initial', time: 25, asset: 'rhino_default'},
      running:{name: 'running', asset: 'rhino_run_left'},//rhino_run_left2
      lift:{name: 'lift', time: 15, asset: 'rhino_lift'},
      mounthOpen:{name: 'mounthOpen', time: 20, asset: 'rhino_lift_mouth_open'},
      eat1:{name: 'eat1', time:15, asset: 'rhino_lift_eat_1'},
      eat2:{name: 'eat2',time: 15, asset: 'rhino_lift_eat_2'},
      eat3:{name: 'eat3', time:15, asset: 'rhino_lift_eat_3'},
      eat4:{name: 'eat4', time: 15, asset: 'rhino_lift_eat_4'}
    }
  }

  /*----------------------------------------------------------------------------+
  * Rino setters section                                                        +
  *----------------------------------------------------------------------------*/
  //Set skier image to draw
  //@param Object value
  setImage(value){
    this.image = value;
  };

  
  /*----------------------------------------------------------------------------+
  * Rino getters section                                                        +
  *----------------------------------------------------------------------------*/  
  //Get rino area for verifying collision with the skier
  getRect(){
    return {
          left: this.position.x,
          right: this.position.x + this.image.width,
          top: this.position.y,
          bottom: this.position.y + this.image.height
      };
  };
  
  /*----------------------------------------------------------------------------+
  * Rino actions section                                                        +
  *----------------------------------------------------------------------------*/  
  run(speed, skierRect){
    //The rino runs faster than skier
    this.speed = speed + 1;
    if(this.position.x > skierRect.left){
      this.position.x -= this.speed;
    }else{
      this.position.x += this.speed;
    }

    if(this.position.y > skierRect.top){
      this.position.y -= this.speed;
    }else{
      this.position.y += this.speed;
    }

    if(this.catchSkier(skierRect) === true){
      this.state = this.states.lift;
    }
  };   

  setAsset(){
    if(this.isRunning() === true){
      if(this.state.asset === 'rhino_run_left'){
        this.state.asset = 'rhino_run_left2';
      }else{
        this.state.asset = 'rhino_run_left';
      }
    }
    this.asset = this.state.asset;
  }

  appears(){
    if(this.timeForState < this.state.time){
      this.timeForState ++;      
    }else{
      this.state = this.states.running;
    }
  }
  
  isRunning(){
    return this.state.name === 'running';
  };

  isLifting(){
    return this.state.name !== 'initial' && this.state.name !== 'running';
  };

  lift(){
    if(this.timeForState < this.state.time){
      this.timeForState ++;
    }else{
      //Change the state
      this.timeForState = 1;
      switch(this.state.name){
        case 'lift':
          this.state = this.states.mounthOpen;
          break;
        case 'mounthOpen':
          this.state = this.states.eat1
          break;
        case 'eat1':
          this.state = this.states.eat2
          break;
        case 'eat2':
          this.state = this.states.eat3
          break;
        case 'eat3':
          this.state = this.states.eat4
          break;
        case 'eat4':
          this.eatFinish = true;
      }
    }
    this.setAsset();
  }

  
  catchSkier(skierRect){
    let rinoRect = this.getRect();
    return !(rinoRect.left > skierRect.right ||
            rinoRect.right < skierRect.left ||
            rinoRect.top > skierRect.bottom ||
            rinoRect.bottom < skierRect.top);
  };
  
}