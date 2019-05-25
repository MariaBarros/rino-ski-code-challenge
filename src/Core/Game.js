class Game{

  constructor(notificationManager) {      
    //Create the game's canvas
    this.canvas = new Canvas(GAME_WIDTH,GAME_HEIGHT);

    this.obstacleManager = new ObstacleManager();            

    //The Skier
    this.skier = new Skier(0, 0);
    this.observeSkier();

    //The Rhino
    this.rino = new Rhino();

    //The player
    this.player = new Player();      

    //Notification Manager
    this.notificationManager = notificationManager;

    //Key event listener
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

    // Init/Reset the game
  init(){
    //Initial states and values
    this.paused = false;
    this.speed = SKIER_STARTING_SPEED;

    //Init the Skier and Rhino objects
    this.skier.init();           
    this.rino.init();

    this.player.init();    

    //Place initial obstacles      
    this.obstacleManager.placeInitialObstacles();      
  }
    
 
  // The game loop
  run(){
    //Clear canvas
    this.canvas.clearCanvas();
    //Update window
    this.updateGameWindow();
    //Draw elements
    this.drawGameWindow();      
    //Update score
    this.updateScore();     
                  
    //The speed is growing alog the time
    this.checkSpeed();    

    //Check if the game is paused or if the skier is crashed
    if(this.paused === false && this.gameOver() === false){      
      window.requestAnimationFrame(this.run.bind(this));
    }

    this.notify();
   }

  updateGameWindow() {    
    const previousGameWindow = this.gameWindow;
    if(this.rino.catchSkier() === false){      
      this.skier.move(this.speed);
    }
        
    this.calculateGameWindow();

    this.obstacleManager.placeNewObstacle(this.gameWindow, previousGameWindow);

    this.skier.checkIfSkierHitObstacle(this.obstacleManager);    

    if(this.skier.isSkying() === true){
      this.rino.run(this.skier);
    }
  }

  drawGameWindow() {
    this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top);

    if(this.rino.catchSkier() === false){      
      this.skier.drawAndDecore(this.canvas);      
    }
    this.obstacleManager.drawObstacles(this.canvas);

    this.rino.drawAndDecore(this.canvas);
    
  }    

  calculateGameWindow() {
    const skierPosition = this.skier.getPosition();
    const left = skierPosition.x - (GAME_WIDTH / 2);
    const top = skierPosition.y - (GAME_HEIGHT / 2);

    this.gameWindow = new Rect(left, top, left + GAME_WIDTH, top + GAME_HEIGHT);
  }

  //The Skier is crached or the Rhino eat the Skier
  gameOver(){
    const isGameOver = (this.skier.crashed === true || this.rino.eat() === true);
    if(isGameOver === true){
      this.player.storeScore();
    }
    return isGameOver;
  }

  // Pause the game
  setPause(state = true){
    if(this.player.score > 0){
      this.paused = state;      
      if(this.paused === false){        
        this.run();
      }
    }
  }

  updateScore(){
    if(this.paused === false && this.skier.isSkying() === true && this.rino.catchSkier() === false){
      this.player.update(this.speed);
    }
  }

  //Increment the speed if so
  checkSpeed(){
    this.acelerate = this.player.checkAceleration();
    if(this.acelerate === true){
      this.speed += 1;        
    }
  }

  handleKeyDown(event) {
    switch(event.which) {
      case KEYS.LEFT:
        this.skier.turnLeft();
        event.preventDefault();
        break;
      case KEYS.RIGHT:
        this.skier.turnRight();
        event.preventDefault();
        break;
      case KEYS.UP:
        this.skier.turnUp();
        event.preventDefault();
        break;
      case KEYS.DOWN:
        this.skier.turnDown();
        event.preventDefault();
        break;
      case KEYS.PAUSE:
        this.setPause(true);
        event.preventDefault();
        break;
      case KEYS.JUMP:
        this.skier.jump();
        event.preventDefault();
        break;
    }    
  }

  notify(){
    this.notificationManager.updateGameState({
      isPaused: this.paused,
      isGameOver: this.gameOver(),      
      speed: this.speed,
      acelerate: this.acelerate,
      isJumping: this.skier.isJumping(),
      player: this.player      
    });
  }

  observeSkier(){
    this.skier.observable.add((data) =>{
      if(data.credit){
        this.player.sumCredit(data.credit);  
      }      
    });
  }
    
 }