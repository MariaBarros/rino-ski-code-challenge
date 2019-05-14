$(document).ready(function() {
    //The game's assets
    let assets = {
        'skierCrash' : 'img/skier_crash.png',
        'skierLeft' : 'img/skier_left.png',
        'skierLeftDown' : 'img/skier_left_down.png',
        'skierDown' : 'img/skier_down.png',
        'skierRightDown' : 'img/skier_right_down.png',
        'skierRight' : 'img/skier_right.png',
        'tree' : 'img/tree_1.png',
        'skier_jump_1':'img/skier_jump_1.png',
        'skier_jump_2':'img/skier_jump_2.png',
        'skier_jump_3':'img/skier_jump_3.png',
        'skier_jump_4':'img/skier_jump_4.png',
        'skier_jump_5':'img/skier_jump_5.png',
        'treeCluster' : 'img/tree_cluster.png',
        'rock1' : 'img/rock_1.png',
        'rock2' : 'img/rock_2.png',
        'rhino_default': 'img/rhino_default.png',
        'rhino_lift': 'img/rhino_lift.png',
        'rhino_lift_eat_1': 'img/rhino_lift_eat_1.png',
        'rhino_lift_eat_2': 'img/rhino_lift_eat_2.png',
        'rhino_lift_eat_3': 'img/rhino_lift_eat_3.png',
        'rhino_lift_eat_4': 'img/rhino_lift_eat_4.png',
        'rhino_lift_mouth_open': 'img/rhino_lift_mouth_open.png',
        'rhino_run_left': 'img/rhino_run_left.png',
        'rhino_run_left_2': 'img/rhino_run_left_2.png'
    };    

    //Generating the game's canvas trough the singleton canvasObj
    canvasObj.place = function(){    
        //Style for the canvas
        this.element.css({
            width: `${this.width} px`,
            height: `${this.height} px`
        });
        $('body').append(this.element);    
    };
    //Place the canvas object
    canvasObj.place();
    

    //Controling the HTML elements for showing messages
    canvasObj.gameOverContanier = $('#messagegameOver');
    canvasObj.pauseContainer =  $('#messageOnPause');  
    canvasObj.loadingContainer =  $('#loading');  
    canvasObj.panelContainer =  $('#panel');  

    canvasObj.showMessage = function(paused, gameOver){        
        if(gameOver === true){                            
            this.gameOverContanier.addClass('show');
        }
        if(paused === true && gameOver === false){
            this.pauseContainer.removeClass("hide").addClass("show")            
        }        
    };    

    canvasObj.showData = function(score, speed){  
        $("#score").html(`Your Score: ${score}`);        
        $("#speed").html(`Speed: ${speed}`);        
    };

   
    //Showing message while loading assets
    canvasObj.loadingContainer.addClass("show");

    assetsObject.load(assets).then(function(){

        //Hide the loading message
        canvasObj.loadingContainer.addClass("hide");
        canvasObj.panelContainer.addClass("show");

        //Instanciate a new game object
        let game = new Game();

        //Setup keyHandler
        $(window).keydown(function(event) {            
            switch(event.which) {
                case 27: //Escape. The player paused the game
                  game.setPause(true);
                  break;
                case 32: //The skier jumps
                  game.skierJump();
                  break;
                case 37: //The skier goes to left
                  game.moveSkierLeft();          
                break;
                case 39: //The skier goes to right
                  game.moveSkierRight();
                break;
                case 38: //The skier goes up
                  game.moveSkierUp();                        
                break;
                case 40: //The skier goes down
                  game.moveSkierDown();          
                break;
              }
            event.preventDefault();
        });

        $("#play").click(function(){
            canvasObj.pauseContainer.removeClass("show");
            game.setPause(false);
        });

        $("#restart").click(function(){               
            canvasObj.gameOverContanier.removeClass("show");
            game.init();
        });     

        //Init the game
        game.init();        

     }, function(err){

        //There was at least one error when trying to load the assets
        console.log(`error when trying to load ${err}`);

     });
    
});