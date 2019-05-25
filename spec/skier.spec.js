describe("The skier object", function() {
  let skier = new Skier();  
  skier.init();    

  it("the initial position has to be === {0,0}", function() {  	
    let skierPosition = skier.x === 0 && skier.y === 0;

    expect(skierPosition).toBe(true);
  });

  it("jumps when the player press the space key and the skier is going down", function() {  	
  	skier.turnDown();
  	skier.jump();    

    expect(skier.isJumping()).toBe(true);
  });

  it("doesn't jump when the player press the space key and the skier is not going down", function() {    	
  	skier.turnRight();
    skier.decorator.isJumping = false;
  	skier.jump();
    let skierJumping = skier.isJumping() === true;

    expect(skierJumping).toBe(false);
  });  

});