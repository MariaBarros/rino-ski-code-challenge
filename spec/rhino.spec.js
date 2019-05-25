describe("The rinho object", function() {  
  let rino = new Rhino();
  
  rino.init();

  it("the rinho initial asset is rhino_default and the state name is 'initial'", function() {  	
    rino.decorator.controlStates();
  	rino.setAsset();    
    expect(rino.assetName === RHINO_DEFAULT).toBe(true);        
    expect(rino.decorator.state.name === RHINO_STATES.INITIAL).toBe(true);    
  });  

});