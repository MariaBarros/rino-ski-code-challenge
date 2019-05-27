/*---------------------------------------------------------------------------+
 * Element is a super class for the elements of the game                     +
 *--------------------------------------------------------------------------*/
class Element{
  constructor(x, y){    
    this.x = x;
    this.y = y;
  }

  getAssetName() {
    return this.assetName;
  }  

  //Positioning an element
  getPosition() {
    return {
      x: this.x,
      y: this.y
    };
  }

  getBounds(){
    const asset = AssetsManager.getAsset(this.assetName);
    const position = this.getPosition();
    return new Rect(
        position.x - asset.width / 2,
        position.y - asset.height / 2,
        position.x + asset.width / 2,
        position.y
      );
  }

  //Drawing the element in the canvas
  draw(canvas) {
    const asset = AssetsManager.getAsset(this.assetName);
    const drawX = this.x - asset.width / 2;
    const drawY = this.y - asset.height / 2;

    canvas.drawImage(asset, drawX, drawY, asset.width, asset.height);
  }
  
}