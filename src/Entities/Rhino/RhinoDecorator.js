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