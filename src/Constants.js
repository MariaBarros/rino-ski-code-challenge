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