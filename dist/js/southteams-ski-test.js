const GAME_WIDTH = window.innerWidth;
const GAME_HEIGHT = window.innerHeight;


//Skier
const SKIER_CRASH = 'skierCrash';
const SKIER_LEFT = 'skierLeft';
const SKIER_LEFTDOWN = 'skierLeftDown';
const SKIER_DOWN = 'skierDown';
const SKIER_RIGHTDOWN = 'skierRightDown';
const SKIER_RIGHT = 'skierRight';

//Skier Jump
const JUMP_STEP_1 = 'skier_jump_1';
const JUMP_STEP_2 = 'skier_jump_2';
const JUMP_STEP_3 = 'skier_jump_3';
const JUMP_STEP_4 = 'skier_jump_4';
const JUMP_STEP_5 = 'skier_jump_5';

const SKIER_DIRECTIONS = {
    CRASH : 0,
    LEFT : 1,
    LEFT_DOWN : 2,
    DOWN : 3,
    RIGHT_DOWN : 4,
    RIGHT : 5
};

const SKIER_DIRECTION_ASSET = {
    [SKIER_DIRECTIONS.CRASH] : SKIER_CRASH,
    [SKIER_DIRECTIONS.LEFT] : SKIER_LEFT,
    [SKIER_DIRECTIONS.LEFT_DOWN] : SKIER_LEFTDOWN,
    [SKIER_DIRECTIONS.DOWN] : SKIER_DOWN,
    [SKIER_DIRECTIONS.RIGHT_DOWN] : SKIER_RIGHTDOWN,
    [SKIER_DIRECTIONS.RIGHT] : SKIER_RIGHT
};

const SKIER_JUMP_ASSET = [JUMP_STEP_1, JUMP_STEP_2, JUMP_STEP_3, JUMP_STEP_4, JUMP_STEP_5];

//Obstacles
const TREE = 'tree';
const TREE_CLUSTER = 'treeCluster';
const ROCK1 = 'rock1';
const ROCK2 = 'rock2';
const JUMP_RUMP = 'jump_ramp';

const DISTANCE_BETWEEN_OBSTACLES = 50;
const STARTING_OBSTACLE_GAP = 100;
const STARTING_OBSTACLE_REDUCER = 300;
const NEW_OBSTACLE_CHANCE = 8;


//Rhino
const RHINO_DEFAULT = 'rhino_default';
const RHINO_LIFT = 'rhino_lift';
const RHINO_LIFT_EAT_1 = 'rhino_lift_eat_1';
const RHINO_LIFT_EAT_2 = 'rhino_lift_eat_2';
const RHINO_LIFT_EAT_3 = 'rhino_lift_eat_3';
const RHINO_LIFT_EAT_4 = 'rhino_lift_eat_4';
const RHINO_LIFT_MOUTH_OPEN = 'rhino_lift_mouth_open';
const RHINO_RUN_LEFT = 'rhino_run_left';
const RHINO_RUN_LEFT_2 = 'rhino_run_left_2';

const RHINO_MOMENT = 10000;

const RHINO_STATES = {
    INITIAL : 'initial',
    RUNNING : 'running',
    LIFT : 'lift',
    MOUTH_OPEN : 'mouthOpen',
    EAT : 'eat'
};

 const RHINO_TIME_APPEAR = 20;
 const RHINO_TIME_LIFT = 25;
 const RHINO_TIME_MOUTH_OPEN = 25;
 const RHINO_TIME_EAT = 25;


//Assets
const ASSETS_DIR = 'dist/img';

const ASSETS = {
    [SKIER_CRASH]: `${ASSETS_DIR}/skier_crash.png`,
    [SKIER_LEFT]: `${ASSETS_DIR}/skier_left.png`,
    [SKIER_LEFTDOWN]: `${ASSETS_DIR}/skier_left_down.png`,
    [SKIER_DOWN]: `${ASSETS_DIR}/skier_down.png`,
    [SKIER_RIGHTDOWN]: `${ASSETS_DIR}/skier_right_down.png`,
    [SKIER_RIGHT]: `${ASSETS_DIR}/skier_right.png`,

    [TREE] : `${ASSETS_DIR}/tree_1.png`,
    [TREE_CLUSTER] : `${ASSETS_DIR}/tree_cluster.png`,
    [ROCK1] : `${ASSETS_DIR}/rock_1.png`,
    [ROCK2] : `${ASSETS_DIR}/rock_2.png`,
    [JUMP_RUMP]: `${ASSETS_DIR}/jump_ramp.png`,

    [JUMP_STEP_1]: `${ASSETS_DIR}/skier_jump_1.png`,
    [JUMP_STEP_2]: `${ASSETS_DIR}/skier_jump_2.png`,
    [JUMP_STEP_3]: `${ASSETS_DIR}/skier_jump_3.png`,
    [JUMP_STEP_4]: `${ASSETS_DIR}/skier_jump_4.png`,
    [JUMP_STEP_5]: `${ASSETS_DIR}/skier_jump_5.png`,

    [RHINO_DEFAULT]: `${ASSETS_DIR}/rhino_default.png`,
    [RHINO_LIFT]: `${ASSETS_DIR}/rhino_lift.png`,
    [RHINO_LIFT_EAT_1]: `${ASSETS_DIR}/rhino_lift_eat_1.png`,
    [RHINO_LIFT_EAT_2]: `${ASSETS_DIR}/rhino_lift_eat_2.png`,
    [RHINO_LIFT_EAT_3]: `${ASSETS_DIR}/rhino_lift_eat_3.png`,
    [RHINO_LIFT_EAT_4]: `${ASSETS_DIR}/rhino_lift_eat_4.png`,
    [RHINO_LIFT_MOUTH_OPEN]: `${ASSETS_DIR}/rhino_lift_mouth_open.png`,
    [RHINO_RUN_LEFT]: `${ASSETS_DIR}/rhino_run_left.png`,
    [RHINO_RUN_LEFT_2]: `${ASSETS_DIR}/rhino_run_left_2.png`
};

//Game
const KEYS = {
    PAUSE: 27,
    JUMP: 32,
    LEFT : 37,
    RIGHT : 39,
    UP : 38,
    DOWN : 40
};

const SKIER_STARTING_SPEED = 8;
const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;
const SKIER_TIMING_JUMP = 5;
const CREDIT_FOR_JUMP = 50;

//Store
const SCORE_ITEM = 'rinho-score';

//Animation
const PATH_ALPHA_MIN = '0.25';
const PATH_ALPHA_MAX = '0.50';

//HTML contaniers
const LOADING_CONTAINER = "#loading";
const GAME_OVER_CONTAINER = "#messagegameOver";
const PAUSE_CONTAINER =  '#messageOnPause'; 
const PANEL_CONTAINER =  '#panel';
const WELCOME_CONTAINER =  '#welcome';
const CENTER_CONTAINER = '.expression';
const BEST_SCORE_CONTAINER = '.best-score';
const SCORE_CONTAINER = '.score';
const SPEED_CONTAINER = '.speed';
const DISTANCE_CONTAINER = '#distance';
const ERROR_CONTAINER = '#error';
const SHOW_ERROR_CONTAINER = '#messageError';

const PAUSE_OFF_BUTTON = '#pauseOff';
const OK_BUTTON = '#ok';
const RESTART_BUTTON = '#restart';

const CLASS_SHOW = 'show';
const CLASS_HIDE = 'hide';
const CLASS_ANIMATION_JUMP = 'jump';
const CLASS_ANIMATION_GO = 'go';
let singletonFactory = (function() {
  let singletons = {};
  function createSingleton(name, definition) {
    if (typeof singletons[name] === 'object') {
      return singletons[name];
    }
    singletons[name] = definition();
    return singletons[name];
  }
  return createSingleton;
}());


/*---------------------------------------------------------------------------+
 * Singleton pattern for loaging assets                                      +
 *--------------------------------------------------------------------------*/
const AssetsManager = singletonFactory('AssetsManager', () => {
  const assetFunctions = {}; 
  let loadedAssets = []; 

  //Load assets, return promises
  assetFunctions.load = (assets) =>{
    let assetPromises = [];    
    //Generating a promise for each asset
    Object.keys(assets).forEach((key) =>{    
        let assetImage = new Image(),
          assetName = key,
          assetUrl = assets[key],
          assetDeferred = new $.Deferred();
        //The asset was loaded
        assetImage.onload = () => {
          assetImage.width /= 2;
          assetImage.height /= 2;

          loadedAssets[assetName] = assetImage;
          assetDeferred.resolve();
        };
        //There was an error when trying to load the asset, return error
        assetImage.onerror = () => {
          assetDeferred.reject(key);
        };
        //Add the asset to the assets collection
        assetImage.src = assetUrl;
        assetPromises.push(assetDeferred.promise());
    });
    //Return promises collection
    return $.when.apply($, assetPromises);
  };

  //Return a asset from the assets collection
  assetFunctions.getAsset = (assetName) =>{
    return loadedAssets[assetName];
  };
  // Return an object exposed to the public
  return assetFunctions;
});
class Canvas { 
  
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.drawOffset = {
        x: 0,
        y: 0
    };

    this.createCanvas();
  }

  createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = "skiCanvas";
    canvas.width = this.width * window.devicePixelRatio;
    canvas.height = this.height * window.devicePixelRatio;
    canvas.style.width = this.width + 'px';
    canvas.style.height = this.height + 'px';

    this.ctx = canvas.getContext("2d");
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    document.body.appendChild(canvas);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);    
  }

  setDrawOffset(x, y) {
    this.drawOffset.x = x;
    this.drawOffset.y = y;
  }

  drawImage(image, x, y, width, height) {
    x -= this.drawOffset.x;
    y -= this.drawOffset.y;

    this.ctx.drawImage(image, x, y, width, height);
  }

  drawRect (fillStyle, path = []) {     
    const half = parseInt(path.length/2);
    let index = 0;
    path.map((point)=>{
      let alpha = (index < half) ? PATH_ALPHA_MAX : PATH_ALPHA_MIN;
      let style = `rgba(${fillStyle},${alpha})`;
        
      this.ctx.fillStyle = style;      
      this.ctx.fillRect(point.x, point.y, 1, 1);
      index ++;
    });      
    this.ctx.fill();      
  }
}
class DomManager{
  constructor(){    
  }
  
  addClass(container, className){    
    if(!$(container).hasClass(className)){
      $(container).addClass(className);
    }
  }

  removeClass(container, className){
    if($(container).hasClass(className)){
      $(container).removeClass(className);
    }
  }

  setContent(container, content){
    $(container).html(content);
  }
}
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

    //Buttons event handlers
    notificationManager.setEventListener(this);

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
 /*----------------------------------------------------------------------------+
 * Observable allow objects suscribe to events                                 +
 * and ge notified when the event occurs                                       +
 *----------------------------------------------------------------------------*/
 
class Observable{
  constructor(){
    this.observers = [];  
  }
 
  //Add event 
  add(observer) {
    this.observers.push(observer);
  }

  //Notify events
  notify(obj) {
    this.observers.forEach(function (observer) {
      observer.call(null, obj);  
    });
  }
}
const Store = singletonFactory('Store', () => {
  const storeFnc = {};
  storeFnc.set = (itemName, data) =>{
    const dataToStore = (typeof data === "string") ? data : JSON.stringify(data);    
    window.localStorage.setItem(itemName, data);    
  };

  storeFnc.get = (itemName, isObject = false) => {
    return (isObject === false) ? 
      window.localStorage.getItem(itemName): 
      JSON.parse(window.localStorage.getItem(itemName));
  };

  return storeFnc;

});
const randomInt = function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const intersectTwoRects = function(rect1, rect2) {
    return !(rect2.left > rect1.right ||
        rect2.right < rect1.left ||
        rect2.top > rect1.bottom ||
        rect2.bottom < rect1.top);
};

class Rect {    
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
}
/*---------------------------------------------------------------------------+
 * Element is a super class for the elements of the game                     +
 *--------------------------------------------------------------------------*/
class Element{
  constructor(x, y){    
    this.x = x;
    this.y = y;
  }

  getAssetName() {
    return this.assetName;
  }  

  //Positioning an element
  getPosition() {
    return {
      x: this.x,
      y: this.y
    };
  }

  getBounds(){
    const asset = AssetsManager.getAsset(this.assetName);
    const position = this.getPosition();
    return new Rect(
        position.x - asset.width / 2,
        position.y - asset.height / 2,
        position.x + asset.width / 2,
        position.y
      );
  }

  //Drawing the element in the canvas
  draw(canvas) {
    const asset = AssetsManager.getAsset(this.assetName);
    const drawX = this.x - asset.width / 2;
    const drawY = this.y - asset.height / 2;

    canvas.drawImage(asset, drawX, drawY, asset.width, asset.height);
  }
  
}
/*----------------------------------------------------------------------------+
 * Class Obstacle                                                             +
 *----------------------------------------------------------------------------+
 * Obstacle is an element of the game                                         +
 *---------------------------------------------------------------------------*/
 const assetTypes = [
    TREE,
    TREE_CLUSTER,
    ROCK1,
    ROCK2,
    JUMP_RUMP
];

 class Obstacle extends Element{
  constructor(x, y) {

    super(x, y);

    //Get asset name
    const assetIdx = randomInt(0, assetTypes.length - 1);
    this.assetName = assetTypes[assetIdx];
    this.canBeJumped = this.availableForJump();
    this.isRump = this.assetName === JUMP_RUMP;
  }

  availableForJump(){
   return (this.assetName !== TREE && this.assetName !== TREE_CLUSTER);   
  }
  
 }
/*----------------------------------------------------------------------------+
 * ObstacleManager controls the obstacles                                     +
 *--------------------------------------------------------------------------*/
class ObstacleManager {    

    constructor() {
        this.obstacles = [];
    }

    getObstacles() {
        return this.obstacles;
    }

    //Draw the obstacles collection in the canvas
    drawObstacles(canvas) {
        this.obstacles.forEach((obstacle) => {
            obstacle.draw(canvas);
        });
    }

    //Place initial obstacles at the begining of the game or when the game is restarted
    placeInitialObstacles() {
        if(this.obstacles.length > 0){
            this.obstacles = [];
        }
        
        const numberObstacles = Math.ceil((GAME_WIDTH / STARTING_OBSTACLE_REDUCER) * (GAME_HEIGHT / STARTING_OBSTACLE_REDUCER));

        const minX = 0 - GAME_WIDTH / 2;
        const maxX = GAME_WIDTH / 2;
        const minY = STARTING_OBSTACLE_GAP;
        const maxY = GAME_HEIGHT / 2;

        for(let i = 0; i < numberObstacles; i++) {
            this.placeRandomObstacle(minX, maxX, minY, maxY);
        }

        this.obstacles.sort((obstacle1, obstacle2) => {
            return obstacle1.getPosition().y - obstacle2.getPosition().y;
        });
    }

    //Adding a new obstacle to the collection
    placeNewObstacle(gameWindow, previousGameWindow) {
        const shouldPlaceObstacle = randomInt(1, NEW_OBSTACLE_CHANCE);
        if(shouldPlaceObstacle !== NEW_OBSTACLE_CHANCE || !previousGameWindow) {
            return;
        }

        if(gameWindow.left < previousGameWindow.left) {
            this.placeObstacleLeft(gameWindow);
        }
        else if(gameWindow.left > previousGameWindow.left) {
            this.placeObstacleRight(gameWindow);
        }

        if(gameWindow.top < previousGameWindow.top) {
            this.placeObstacleTop(gameWindow);
        }
        else if(gameWindow.top > previousGameWindow.top) {
            this.placeObstacleBottom(gameWindow);
        }
    }

    //Placing a new obstacle in the left of the canvas
    placeObstacleLeft(gameWindow) {
        this.placeRandomObstacle(gameWindow.left, gameWindow.left, gameWindow.top, gameWindow.bottom);
    }

    //Placing a new obstacle in the right of the canvas
    placeObstacleRight(gameWindow) {
        this.placeRandomObstacle(gameWindow.right, gameWindow.right, gameWindow.top, gameWindow.bottom);
    }

    //Placing a new obstacle in the top of the canvas
    placeObstacleTop(gameWindow) {
        this.placeRandomObstacle(gameWindow.left, gameWindow.right, gameWindow.top, gameWindow.top);
    }

    //Placing a new obstacle in the bottom of the canvas
    placeObstacleBottom(gameWindow) {
        this.placeRandomObstacle(gameWindow.left, gameWindow.right, gameWindow.bottom, gameWindow.bottom);
    }

    placeRandomObstacle(minX, maxX, minY, maxY) {
        const position = this.calculateOpenPosition(minX, maxX, minY, maxY);
        const newObstacle = new Obstacle(position.x, position.y);

        this.obstacles.push(newObstacle);
    }

    //Calculate the position for the new obstacle
    calculateOpenPosition(minX, maxX, minY, maxY) {
        const x = randomInt(minX, maxX);
        const y = randomInt(minY, maxY);

        const foundCollision = this.obstacles.find((obstacle) => {
            return (
                x > (obstacle.x - DISTANCE_BETWEEN_OBSTACLES) &&
                x < (obstacle.x + DISTANCE_BETWEEN_OBSTACLES) &&
                y > (obstacle.y - DISTANCE_BETWEEN_OBSTACLES) &&
                y < (obstacle.y + DISTANCE_BETWEEN_OBSTACLES)
            );
        });

        if(foundCollision) {
            return this.calculateOpenPosition(minX, maxX, minY, maxY);
        }
        else {
            return {
                x: x,
                y: y
            };
        }
    }
}
class Player{
  constructor(){    
  }

  init(){
    this.score = 0;
    this.time = 1;
    this.distance = 0;
    this.storedScore = parseInt(Store.get(SCORE_ITEM)) || 0;
  }  

  update(speed){
    const unitDistance = (speed / 60 / 60 / 100);
    this.distance += unitDistance;
    this.time += 0.0016; 
    this.score += parseInt(this.time);    
  }

  storeScore(){    
    if(this.score > this.storedScore){
      this.storedScore = this.score;
      Store.set(SCORE_ITEM, this.score);
    }
  }

  sumCredit(credit){
    this.score += credit;
  }

  checkAceleration(){
    return this.score > 0 && this.score % 1000 === 0;
  }

}
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
/*----------------------------------------------------------------------------+
 * RhinoDecorator decores the Rhino in the canvas                             +
 * when it runs and catches the skier for eating                              +
 *--------------------------------------------------------------------------*/
class RhinoDecorator{

  constructor() {        
  }

  setStates(){
    this.states = {
      [RHINO_STATES.INITIAL]: {
        name: RHINO_STATES.INITIAL,
        time: RHINO_TIME_APPEAR,
        asset: RHINO_DEFAULT
      },
      [RHINO_STATES.RUNNING]: {
        name: RHINO_STATES.RUNNING        
      },
      [RHINO_STATES.LIFT]: {
        name: RHINO_STATES.LIFT, 
        time: RHINO_TIME_LIFT, 
        asset: RHINO_LIFT
      },
      [RHINO_STATES.MOUTH_OPEN]: {
        name: RHINO_STATES.MOUTH_OPEN, 
        time: RHINO_TIME_MOUTH_OPEN, 
        asset: RHINO_LIFT_MOUTH_OPEN
      },
      [RHINO_STATES.EAT]: {
        name: RHINO_STATES.EAT, 
        time: RHINO_TIME_EAT, 
        assets: [RHINO_LIFT_EAT_1, RHINO_LIFT_EAT_2, RHINO_LIFT_EAT_3, RHINO_LIFT_EAT_4]
      }
    };
  }

  getAsset(){
    return this.assetState;
  }


  controlStates(){
    if(this.state.name === RHINO_STATES.INITIAL || this.state.name === RHINO_STATES.LIFT || 
      this.state.name === RHINO_STATES.MOUTH_OPEN){

      this.iterateState();

    }else{
      if(this.state.name === RHINO_STATES.RUNNING){
        this.assetState = (this.assetState === RHINO_RUN_LEFT) ? RHINO_RUN_LEFT_2: RHINO_RUN_LEFT;
      }else{
        this.eat();
      }
    }
  }

  iterateState(){
    if(this.timeState < this.state.time){
      this.timeState++;
      this.assetState = this.state.asset;
    }else{      
      this.nextState();
    }
  }

  nextState(){
    this.timeState = 1;
    switch(this.state.name){
        case RHINO_STATES.INITIAL:
          this.state = this.states[RHINO_STATES.RUNNING];
          break;
        case RHINO_STATES.RUNNING:
          this.state = this.states[RHINO_STATES.LIFT];
          break;
        case RHINO_STATES.LIFT:
          this.state = this.states[RHINO_STATES.MOUTH_OPEN];
          break;
        case RHINO_STATES.MOUTH_OPEN:
          this.state = this.states[RHINO_STATES.EAT];        
      }
  }

  eat(){
    const stateAssets = this.state.assets;
    const stateTime = this.state.time;

    if(this.timeEating <= stateAssets.length){
      if(this.timeState < stateTime){
        this.assetState = stateAssets[this.timeEating - 1];
        this.timeState ++;
      }else{
        this.timeState = 1;
        this.timeEating ++;
      }
    }else{
      this.finish = true;
    }
  }

  reset(){
    this.timeState = 1;
    this.timeEating = 1;
    this.finish = false;
    this.setStates();
    this.state = this.states[RHINO_STATES.INITIAL];
  }
  
}
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
    }
  }

  //Truncating the skier path
  truncatePath(maxLengthPath){
    if(this.path.length > maxLengthPath){
      this.path = this.path.slice(Math.max(this.path.length - maxLengthPath, 1));
    }
  }

  checkPathJumping(){
    if(this.isJumping === false){        
      this.reset();   
    }
  }

  //Reset the path when the skier changes the direction
  reset(){
    this.pathStep = 0;
    this.path = [];
    this.isJumping = false;
  }
  
}