class NotificationManager extends DomManager{
  constructor(){
    super(); 
  }

  loading(){
    this.addClass(LOADING_CONTAINER, CLASS_SHOW);    
  }

  loaded(){
    this.addClass(LOADING_CONTAINER, CLASS_HIDE);
    this.addClass(PANEL_CONTAINER, CLASS_SHOW);
    this.addClass(WELCOME_CONTAINER, CLASS_SHOW);    
  }  

  updateGameState(gameState){
    this.checkGameOver(gameState.isGameOver);
    this.checkPause(gameState.isPaused);    
    this.checkJump(gameState.isJumping);
    
    //Show score and show speed
    this.showScore(gameState.player);           
    this.showSpeed(gameState.acelerate, gameState.speed);  
    //Distance
    const distance = gameState.player.distance.toString();
    this.setContent(DISTANCE_CONTAINER, distance.substring(0,5));
  }

  checkGameOver(isGameOver){
    if(isGameOver === true){
      this.addClass(GAME_OVER_CONTAINER, CLASS_SHOW); 
      this.removeClass(CENTER_CONTAINER, CLASS_ANIMATION_GO);               
    }
  }

  checkPause(isPaused){
    if(isPaused === true){      
      this.removeClass(PAUSE_CONTAINER, CLASS_HIDE);
      this.addClass(PAUSE_CONTAINER, CLASS_SHOW);
    }
  }

  checkJump(jumping){        
    if(jumping === true){            
      this.addClass(CENTER_CONTAINER, CLASS_ANIMATION_JUMP);
    }else{
      this.removeClass(CENTER_CONTAINER, CLASS_ANIMATION_JUMP);
    }
  }

  showScore(player){
    //Update the score
    this.setContent(SCORE_CONTAINER, player.score);    
    this.addClass(BEST_SCORE_CONTAINER, CLASS_HIDE);
    //Show the stored score    
    if(player.storedScore > 0){
      this.setContent(BEST_SCORE_CONTAINER, player.storedScore);            
      this.removeClass(BEST_SCORE_CONTAINER, CLASS_HIDE);      
      this.addClass(BEST_SCORE_CONTAINER, CLASS_SHOW);      
    }
  }

  showSpeed(acelerate, speed){    
    if(acelerate === true){
      this.addClass(SPEED_CONTAINER, CLASS_ANIMATION_JUMP);      
    }
    this.setContent(SPEED_CONTAINER, speed);    
  }

  showError(errorMessage){
    this.setContent(SHOW_ERROR_CONTAINER, errorMessage);
    this.addClass(ERROR_CONTAINER, CLASS_SHOW);
  }

  setEventListener(game){
    const begin = ()=>{
      this.removeClass(WELCOME_CONTAINER, CLASS_SHOW);       
      this.addClass(CENTER_CONTAINER, CLASS_ANIMATION_GO);    
    };

    const restart = ()=>{
      this.removeClass(GAME_OVER_CONTAINER, CLASS_SHOW);
      this.addClass(CENTER_CONTAINER, CLASS_ANIMATION_GO);
      game.init();
      game.run();
    };

    const pauseOff = () =>{
      this.removeClass(PAUSE_CONTAINER, CLASS_SHOW);            
      game.setPause(false);
    };

    $(PAUSE_OFF_BUTTON).click(pauseOff);

    $(RESTART_BUTTON).click(restart); 

    $(OK_BUTTON).click(begin);
  }

}