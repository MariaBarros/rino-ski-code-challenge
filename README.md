# Rhino Ski Code Challenge
This is my version of Rhino Ski Game

## The codebase for refactoring
 The codebase for refactoring is not maintainable, not testable, and not scalable. It hasn't any clear pattern nor comments. The ``js code`` included in the *index.html* is not minified, the project hasn't automated tasks for linting, concatenation, minification and test of code.

 ### The bug in the game
 When the skier crashes into an obstacle and the player press the left arrow key, the screen turns completely white. If we look at the console we'll see the message: "Cannot read property 'width' of undefined" in the line 213 of the games.js file when the game is executing the "checkIfSkierHitObstacle" function. The followig flow explains the bug:
1. Once the skier crashed => ``skierDirection = 0`` (*skierDirection* variable value is 0)
2. When the player press the left key => ``skierDirection = -1`` (*skierDirection* variable is -1).
3. Next, in the *"checkIfSkierHitObstacle"* function, the game tries to calculate the skier position to determine if the skier hit an obstacle, but the ``skierImage is undefined`` because ``skierAssetName is undefined``.

### The interface
 The style is very important in a game. This project only has a minimum *CSS* file. The player cannot see when the game starts or finishes, the interface doesn't show the player's score, nor the game's rules. So, the communication between the game and the player is very very poor.
 

## The structure of my version

### New features in this version
1. Jumps: The skier jumps just for fun buy if the skier jumps over a ramp, the player obtains 100 points extra.
2. Speed: The speed grows along the time. Skier is getting faster as the game progresses.
3. Feed the hungry Rhino. When the skier skys for too long, a yeti appears and catch the skier for eating.
4. Score. The score is stored using localStorage allowing that this data persists across browser refreshes.
5. Welcome message: when the game is loaded, a welcome message appears that shows the game rules and allows begining the game.
6. Skier expression: when the skier jumps, he says Yeah!
7. Pause: the game can be paused when the player press the ESC key. The app show a message saying that the game is paused and shows the player score at that moment.
7. Reset: once the game is over, it can be reseted.