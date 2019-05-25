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
const Assets = singletonFactory('Assets', () => {
  const assetFunctions = {}; 
  let loadedAssets = []; 

  //Load assets, return promises
  assetFunctions.load = (assets) =>{
    let assetPromises = [];    
    //Generating a promise for each asset
    Object.keys(assets).forEach((key) =>{    
        let assetImage = new Image(),
          assetName = key,
          assetUrl = assets[key],
          assetDeferred = new $.Deferred();
        //The asset was loaded
        assetImage.onload = () => {
          assetImage.width /= 2;
          assetImage.height /= 2;

          loadedAssets[assetName] = assetImage;
          assetDeferred.resolve();
        };
        //There was an error when trying to load the asset, return error
        assetImage.onerror = () => {
          assetDeferred.reject(key);
        };
        //Add the asset to the assets collection
        assetImage.src = assetUrl;
        assetPromises.push(assetDeferred.promise());
    });
    //Return promises collection
    return $.when.apply($, assetPromises);
  };

  //Return a asset from the assets collection
  assetFunctions.getAsset = (assetName) =>{
    return loadedAssets[assetName];
  };
  // Return an object exposed to the public
  return assetFunctions;
});