/*----------------------------------------------------------------------------+
 * Class Game                                                                 +
 *----------------------------------------------------------------------------+
 * We need place different obstacles while the gamer is playing               +
 *---------------------------------------------------------------------------*/
 class Game{

    constructor() {
      this.paused = false;
      //The game dimension
      this.gameWidth = canvasObj.width;
      this.gameHeight = canvasObj.height;
      this.gameAreaWidth = {min: -50, max: this.gameWidth + 50};
      this.gameAreaHeight = {min: (this.gameHeight / 2) + 100, max: this.gameHeight + 50};      
      
      this.minObstacles = 0;
      //The skier
      this.skier = new Skier();
      //The Rino
      this.rino = new Rino();
      //Init score
      this.score = 0;
      this.startTime = Date.now();      
    }
    
    /*----------------------------------------------------------------------------+
    * The game cycle                                                              +
    *----------------------------------------------------------------------------*/
    // The game loop
    loop(){
      canvasObj.save();
      canvasObj.clearRect();      

      // Move skier
      this.skier.sky(this.speed);
      // Draw obstacles in the landscape
      this.drawObstacles(this.skier);
      // Draw the skier
      this.drawSkier();      
      // Add obstacle(s) into the landscape
      this.addObstacle();      

      //Update the score. Show the score and speed
      this.updateScore();
      canvasObj.showData(this.score, this.speed);

      if(this.score>1000){
        this.rinoWalk();
      }
            
      canvasObj.restore();
      //The speed is growing alog the time
      this.acelerate();    

      //Check if the game is paused or if the skier is crashed
      if(this.paused === false && this.gameOver() === false){        
        this.score = (this.speed * this.time) - this.speed;
        window.requestAnimationFrame(()=>this.loop());        
      }else{
        canvasObj.showMessage(this.paused, this.gameOver());
      }
    };

    // Init/Reset the game
    init(){
      this.paused = false;
      this.speed = 8;
      this.time = 1;
      this.obstacles = [];
      this.skier.direction = 5;      

      //Place the skier in the center of the canvas      
      this.drawSkier();
      //Init the Rino object
      this.rino.init(this.gameWidth, this.gameHeight);

      //Place initial obstacles
      //this.minObstacles = Math.ceil(_.random(5, 7) * (this.gameWidth / 800) * (this.gameHeight / 500));
      this.minObstacles = Math.ceil(_.random(2, 3) * (this.gameWidth / 800) * (this.gameHeight / 500));
      this.placeInitialObstacles(this.minObstacles);
      
      window.requestAnimationFrame(()=>this.loop());
    };

    //The skier is crached, then GAME OVER
    gameOver(){
      return (this.skier.direction === 0 || this.rino.eatFinish === true);
    }

    // Pause the game
    setPause(state = true){
      this.paused = state;
      canvasObj.showMessage(this.paused, false);
      if(this.paused === false){        
        this.loop();
      }
    }; 

    //Update score
    updateScore(){
      if(this.paused === false 
        && this.skier.direction === 2 
        || this.skier.direction === 3 
        || this.skier.direction === 4){
        this.time ++;
      }
    }

    //Increment the speed
    acelerate(){
      if(this.score > 0 && this.score % 1000 === 0){
        this.speed ++;
      }
    }

    rinoWalk(){
      if(this.rino.isRunning() === true){
        this.rino.run(this.speed, this.skier.getRect());
      }else{
        if(this.rino.isLifting() === true){
          this.rino.lift();
        }else{
          this.rino.appears();
        }
      };
      let rinoImage = assetsObject.getAsset(this.rino.asset); 
      this.rino.setImage(rinoImage);      
      canvasObj.drawImage(rinoImage, this.rino.position.x, this.rino.position.y);
    }

    /*----------------------------------------------------------------------------+
    * The skier section                                                           +
    *----------------------------------------------------------------------------*/  
    //Place the skier in the canvas
    drawSkier(){
      let skierImage = assetsObject.getAsset(this.skier.asset); 
      this.skier.setImage(skierImage);
      this.skier.setPosition(this.gameWidth, this.gameHeight);
      if(this.skier.isJumping === true){
        this.skier.controlJump();
      }
      canvasObj.drawImage(this.skier.image, this.skier.position.x, this.skier.position.y);
    }

    // The skier goes to left
    moveSkierLeft(){
      this.moveObstacles(this.skier.direction);      
      this.skier.moveLeft();      
    };

    // The skier goes to right
    moveSkierRight(){
      this.skier.moveRight();
      //Verify if the skier is walking
      this.moveObstacles(this.skier.direction);
    };

    // The skier goes up, is walking
    moveSkierUp(){
      this.skier.moveUp();
      //Verify if the skier is walking
      this.moveObstacles(this.skier.direction);      
    };

    //The skier jumps
    skierJump(){
      this.skier.jum();      
    };

    // The skier goes down
    moveSkierDown(){
      this.skier.moveDown();      
    };


    /*----------------------------------------------------------------------------+
    * The obstacles section                                                       +
    *----------------------------------------------------------------------------*/
    //Initial obstacles placed in the game's canvas
    placeInitialObstacles(numberObstacles){      
      //Init area for drawing obstacles
      let obstaclesArea = {
          width: this.gameAreaWidth,
          height: this.gameAreaHeight
        };      
      
      for(var i = 0; i < numberObstacles; i++) {          
        this.placeObstacle(obstaclesArea);
      }
    };

    // Add obstacles
    addObstacle(){
      //Prevent overflow
      if(this.obstacles.length > this.minObstacles){
        return;
      }      
      
      //Area for to place the obstacles
      let skier = this.skier,
        gameWidth = this.gameWidth,
        gameHeight = this.gameHeight,
        areaLeft = skier.getAreaLeft(gameHeight),
        areaDown = skier.getAreaDown(gameWidth, gameHeight),
        areaRight = skier.getAreaRight(gameWidth, gameHeight),
        areaUp = skier.getAreaUp(gameWidth, gameHeight),
        newElements = [];          

      switch(this.skier.direction) {
        case 1: // left          
          newElements.push(areaLeft);           
          break;
        case 2: // left down          
          newElements.push(areaLeft);          
          newElements.push(areaDown);
          break;
        case 3: // down          
          newElements.push(areaDown);
          break;
        case 4: // right down                              
          newElements.push(areaRight);
          newElements.push(areaDown);          
          break;
        case 5: // right          
          newElements.push(areaRight);
          break;
        case 6: // up
          newElements.push(areaUp);          
          break;
      };
      //Go to place the obstacles  
      for(let i = 0, elements = newElements.length; i < elements; i++) {          
        this.placeObstacle(newElements[i]);
      }  
    }

    // Adding a new obstacle into the landscape
    // @param Object obstacleArea: area where the obstacles can be placed 
    placeObstacle(obstacleArea){  
      let newObstacle = new Obstacle();         
      newObstacle.obstaclesArea = obstacleArea;
      let obstacleImage = assetsObject.getAsset(newObstacle.type)
      newObstacle.setImage(obstacleImage);

      while(newObstacle.validPosition === false){
          newObstacle.calculatePosition(this.obstacles);
      }                                    
      this.obstacles.push(newObstacle);      
    }

    //Drawing obstacles positiones into de canvas
    drawObstacles(skier){
      let obstacles = [];
      //Get area for drawing the obstacle
      let obstaclesArea = skier.getArea(this.gameWidth, this.gameHeight),      
      //Get the skier rect
      skierRect = this.skier.getRect();      
      
      _.each(this.obstacles, function(obstacle) {
        //Draw the obstacles that are into the game current area
        obstacle.updatePosition(skier);
        //Verify if the obstacle is in the current area
        if(obstacle.isDead(obstaclesArea) === false){          

          //Check collision with the skier
          if(obstacle.isIntersected(skierRect)){
              //Verifyif the skier is jumping and the obstacles can be jumped
              if(obstacle.canBeJumped === false){
                skier.setCollision();  
              }else{
                if(skier.isJumping === false){
                  skier.setCollision();    
                }
              };              
          };

          //Draw the valid obstacle
          canvasObj.drawImage(obstacle.image, obstacle.x, obstacle.y);
          obstacles.push(obstacle);
        };

      });
      //Update the obstacles collection
      this.obstacles = obstacles;
    };

    //The skier is walking, update the obstacles position
    //@param Number direction: direction that the skier is walking
    moveObstacles(direction){
      if(direction !== 1 && direction !== 5 && direction !== 6){
        return
      };

      let speed = this.speed;
      _.each(this.obstacles, function(obstacle) {        
        switch(direction){
          case 1: //Walk to left
            obstacle.moveRigth(speed);
            break;
          case 5: //Walk to right
            obstacle.moveLeft(speed);
            break;
          case 6: //Walk to up
            obstacle.moveDown(speed);
            break
        };
      });
    };
    
 };