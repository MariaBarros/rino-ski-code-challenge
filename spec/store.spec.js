describe("The store object", function() {  

  it("saving store, the store > 0", function() {
  	const score = 100;
    const SCORE_TEST_ITEM = 'score-test';
  	Store.set(SCORE_TEST_ITEM, score);
  	const scoreSaved = parseInt(Store.get(SCORE_TEST_ITEM));
    expect(scoreSaved>0).toBe(true);    
  });  

});