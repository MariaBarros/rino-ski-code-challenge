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