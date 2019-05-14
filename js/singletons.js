/*---------------------------------------------------------------------------+
 * Singleton Factory                                                          +
 *----------------------------------------------------------------------------+
 * A Singleton only allows for a single instantiation.                        +
 * The Singleton restricts clients from creating multiple objects,            +
 * after the first object created, it will return instances of itself.        +
 *---------------------------------------------------------------------------*/
let singletonFactory = (function() {
  let singletons = {};
  function createSingleton(name, definition) {
    if (typeof singletons[name] === 'object') {
      return singletons[name];
    }
    singletons[name] = definition();
    return singletons[name];
  }
  return createSingleton;
}());


/*---------------------------------------------------------------------------+
 * Singleton pattern for loaging assets                                      +
 *--------------------------------------------------------------------------*/
let assetsObject = singletonFactory('assetsObject', function () {
  let assetFunctions = {}; 
  let loadedAssets = []; 

  //Load assets, return promises
  assetFunctions.load = function(assets){
    let assetPromises = [];    
    //Generatin a promise for each asset
    _.each(assets, function(asset, assetName) {
        let assetImage = new Image(),
          assetDeferred = new $.Deferred();
        //The asset was loaded
        assetImage.onload = function() {
          assetImage.width /= 2;
          assetImage.height /= 2;

          loadedAssets[assetName] = assetImage;
          assetDeferred.resolve();
        };
        //There was an error when trying to load the asset, return error
        assetImage.onerror=function(){                    
          assetDeferred.reject(asset)
        }
        //Add the asset to the assets collection
        assetImage.src = asset;
        assetPromises.push(assetDeferred.promise());
    });
    //Return promises collection
    return $.when.apply($, assetPromises);
  };

  //Return a asset from the assets collection
  assetFunctions.getAsset = function(assetName){    
    return loadedAssets[assetName];
  };
  // Return an object exposed to the public
  return assetFunctions;
});

/*---------------------------------------------------------------------------+
 * Singleton pattern for the game's canvas                                   +
 *--------------------------------------------------------------------------*/
let canvasObj = singletonFactory('canvasObj', function(){
  let el = $('<canvas></canvas>'),
    gameWidth = window.innerWidth,
    gameHeight = window.innerHeight - 40,
    devicePixelRatio = window.devicePixelRatio,
    ctx = el[0].getContext('2d'),
    canvasMethods = {};    
    
    //Canvas dimension
    el.attr('width', gameWidth * devicePixelRatio)
      .attr('height', gameHeight * devicePixelRatio);  

    //Save the game's canvas
    canvasMethods.save = function(){
      ctx.save();
    };

    //Clear the game's canvas
    canvasMethods.clearRect = function(){
      // Retina support
      ctx.scale(devicePixelRatio, devicePixelRatio);
      ctx.clearRect(0, 0, gameWidth, gameHeight);
    };

    //Restore the game's canvas
    canvasMethods.restore = function(){
      ctx.restore();
    };

    //Draw images into the game's canvas
    canvasMethods.drawImage = function(image, x, y){        
      ctx.drawImage(image, x, y, image.width, image.height);
    };

    // Return an object exposed to the public
    return{
      element: el,      
      width: gameWidth,
      height: gameHeight,
      save: canvasMethods.save,
      clearRect: canvasMethods.clearRect,
      restore: canvasMethods.restore,
      drawImage: canvasMethods.drawImage
    };
});