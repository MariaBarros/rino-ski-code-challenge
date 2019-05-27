# Rhino Ski Code Challenge
This is my version of Rhino Ski Game

## The codebase for refactoring
 The codebase for refactoring is not maintainable, not testable, and not scalable. It hasn't any clear pattern nor comments. The ``js code`` included in the *index.html* is not minified, the project hasn't automated tasks for linting, concatenation, minification and test of code.

 ### The bug in the game
 When the skier crashes into an obstacle and the player press the left arrow key, the screen turns completely white. If we look at the console we'll see the message: "Cannot read property 'width' of undefined" in the line 213 of the games.js file when the game is executing the "checkIfSkierHitObstacle" function. The followig flow explains the bug:
1. Once the skier crashed => ``skierDirection = 0`` (*skierDirection* variable value is 0)
2. When the player press the left key => ``skierDirection = -1`` (*skierDirection* variable is -1).
3. Next, in the *"checkIfSkierHitObstacle"* function, the game tries to calculate the skier position to determine if the skier hit an obstacle, but the ``skierImage is undefined`` because ``skierAssetName is undefined``.

For fixing this bug we have to limit the ``skierDirection`` value between [0-5].

### The interface
The styling is very important for games. This project only has a minimum *CSS* file. The player cannot see when the game starts or finishes. The interface doesn't show the player's score, nor the game's rules. So, the communication between the game and the player is very very poor.
 

## The structure of my version
In order to build the project into a clear structure, I'll organize the files as follow:
* **dist** directory: this directory contains the files for the deployed version.
* **spec** directory: this directory contains the tests files and the configuration file for the tool selected for the automated tests.
* **src** directory: this directory contains the project's code.
* Gruntfile.js: the configuration file for the Grunt tasks.
* index.html: The project's main file.
* testRunner.html: the html interface for the tests.

## The tools and dependencies
* **Grunt**, the JavaScript task runner: I use this tool to automatically perform the following tasks: minification, compilation saas, and linting.
* **Jasmine**: the behavior-driven development framework for JavaScript unit Testing.
* **Sass**, the CSS preprocessor: Sass provides clenear and easier rules to the project, and adds features that aren’t available in regular CSS such the color manage, custom functions, etc. 

#### For the tasks I run in this project, I included the following dependencies:
* *grunt-contrib-jshint*:  to ensure that the code adheres to best practices, or it doesn't result in unexpected behaviors.
* *grunt-contrib-concat*: for to concat all de .js files in the project.
* *grunt-contrib-uglify-es*: for minifying the project code.
* *grunt-contrib-sass*: for to compile Sass to CSS.
* *grunt-contrib-cssmin*: for minifying the project css file.
* *grunt-contrib-watch*: for checking the code at every change I perform.

## The code

The code is organized into three directories: Code, Entities and Sass.

I've designed the code following different patterns. Patterns can be categorized into three groups: *creational patterns*, *structural patterns*, and *behavioral patterns*. In terms of creational pattern, I used: *prototype*, *factory method*, and *singleton*; in terms of structural pattern, I used: *decorator* and *facade*; and, in terms of behavioral patterns, I used: *iterator* and *observer*.

### The code explanation

#### Defining entities
The skier, the rhino, and obstacles are elements in the game that can be placed, moved, and drawn in the canvas. That's why I defined the class Element. So, ***Skier***, ***Rhino*** and ***Obstacle*** inherit from ***Element***.

##### The Obstacles
In the game, several obstacles are placed while the skier is skying. So, the project needs an entity that places initial obstacles at the beginning of the game, places new objects and calculates the position in the canvas of each of them. That's why ***ObstacleManager*** class is needed.

##### The Skier

The ***Skier*** entity has methods and properties for moving the skier in different directions, and checking if the skier collisions with an obstacle. This entity uses ***SkierDecorator*** and ***Observable*** classes. The first one decorates the skier in the canvas when he jumps or he makes a path in the snow, and the second one communicates that the skier jumps an obstacle that can be jumped (a ramp), and when this occurs *an event is triggered* (in this project, that event is defined in the ***Game*** *class*).

##### The Rhino
The ***Rhino*** entity has methods and properties to appears in a given time, catches the skier and eats him. This entity uses ***RhinoDecorator*** for controlling the rhino estates defined as follow: *initial*, *running*, *lift*, *mouth open*, and *eat*.

##### The Player
The ***Player*** is who plays the game. This entity has properties and methods for updating the player score. Player class calls ***Store*** object defined as a singleton for managing the data stored through localStorage.

#### Defining the Game Core
The ***Game*** class has properties and methods for controlling the game. This class instantiates an object ***Canvas*** class, an object of ***Skier*** class, an object of ***Rhino*** class, an object of ***ObstaclesManager*** class, and an object of ***Player*** class.

The ***Game*** class controls the game state: running, in pause, game over; it defines the actions for the player events (key press) and notifies the player when the game is paused or the game is over. It also defines an observable event for the skier object (in this case, the skier jumps over a ramp, and then the score is updated).

The Canvas object creates and clear the canvas, and also draws images and illustrates paths.

The game needs to show a few data like the speed game, the player score, to show a welcome message at the beginning of the game, or to show a message when the game is paused or the game is over. That's why I use the ***NotificationManager*** class as argument of the ***Game*** class constructor.

***NotificationManager*** inherits from ***DomManager*** that controls the style and the content of the HTML containers. NotificationManager controls the load of the game assets and shows the game state.

#### Init the game
Lastly, index.js inits the game. First, it instantiates a NotificationManager object. Then, it shows the message "Loading game..." until the game assets are loaded. When the assets are loaded, an object game is instantiated and the game starts.


### New features in this version
1. Jumps: The skier jumps just for fun buy if the skier jumps over a ramp, the player obtains 100 points extra.
2. Speed: The speed grows along the time. Skier is getting faster as the game progresses.
3. Feed the hungry Rhino. When the skier skys for too long, a yeti appears and catch the skier for eating.
4. Score. The score is stored using localStorage allowing that this data persists across browser refreshes.
5. Welcome message: when the game is loaded, a welcome message appears that shows the game rules and allows begining the game.
6. Skier expression: when the skier jumps, he says Yeah!
7. Pause: the game can be paused when the player press the ESC key. The app show a message saying that the game is paused and shows the player score at that moment.
7. Reset: once the game is over, it can be reseted.


### Testing the code
In order to test the code I've written some tests. These tests are hosted in the spec directory. I you want to see the result of these tests you can type - for example - ``http://localhost:5000/testRunner.html `` in your browser.