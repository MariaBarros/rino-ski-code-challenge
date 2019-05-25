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