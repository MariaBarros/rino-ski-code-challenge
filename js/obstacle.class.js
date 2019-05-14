/*----------------------------------------------------------------------------+
 * Class Obstacle                                                             +
 *----------------------------------------------------------------------------+
 * We need place different obstacles while the gamer is playing               +
 *---------------------------------------------------------------------------*/

 class Obstacle{
  constructor() {
    let obstacleTypes = ['tree', 'treeCluster', 'rock1', 'rock2'],
        obstacleIndex = _.random(0, obstacleTypes.length - 1);

    this.type = obstacleTypes[obstacleIndex];
    this.validPosition = false;
    this.canBeJumped = (this.type === 'rock1') || (this.type === 'rock2');
  }

  setImage(value){
    this.image = value;
  }

  getRect() {
    let obstacleImage = this.image;
    return {
        left: this.x,
        right: this.x + obstacleImage.width,
        top: this.y,
        bottom: this.y + obstacleImage.height
    };
  };

  isIntersected(rect){
    let obstacleRect = this.getRect();
    return !(obstacleRect.left > rect.right ||
            obstacleRect.right < rect.left ||
            obstacleRect.top > rect.bottom ||
            obstacleRect.bottom < rect.top); 
  }

  calculatePosition(obstacles){
    let areaWidth = this.obstaclesArea.width,
      areaHeight = this.obstaclesArea.height,
      x = _.random(areaWidth.min, areaWidth.max),
      y = _.random(areaHeight.min, areaHeight.max);


    let foundCollision = _.find(obstacles, function(obstacle) {
      return obstacle.isCollisioned(x,y);
    });    

    if(!foundCollision) {            
        this.x = x;
        this.y = y + this.image.height;            
        this.validPosition = true;        
    }    
  }

  isCollisioned(x,y){
    return x > (this.x - 50) && x < (this.x + 50) && y > (this.y - 50) && y < (this.y + 50);
  };

  updatePosition(skier){      
    switch(skier.direction){      
      case 2: //LeftDown
        this.x = this.x + skier.speed + (this.image.width / 2);
        this.y = this.y - skier.speed - (this.image.height / 2);    
        break;
      case 3: //Down        
        this.y = this.y - skier.speed - (this.image.height / 2);    
        break;
      case 4: //RightDown
        this.x = this.x -  skier.speed  - (this.image.width / 2);
        this.y = this.y -  skier.speed - (this.image.height / 2);    
        break;      
    };    
  };

  moveRigth(speed){
    this.x += speed;
  }

  moveLeft(speed){
    this.x -= speed;
  }

  moveDown(speed){
    this.y += speed;
  }

  isDead(obstaclesArea){
    let x = this.x - (this.image.width/2),
        y = this.y  - (this.image.height/2),        
        areaWidth = obstaclesArea.width,
        areaHeight = obstaclesArea.height;

    let dead = x < -100 || x > areaWidth.max || y < -100 || y > areaHeight.max;    
    return dead;
  };
 }