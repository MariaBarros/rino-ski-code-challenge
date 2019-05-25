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