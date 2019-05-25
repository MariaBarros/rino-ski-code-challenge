const Store = singletonFactory('Store', () => {
  const storeFnc = {};
  storeFnc.set = (itemName, data) =>{
    const dataToStore = (typeof data === "string") ? data : JSON.stringify(data);    
    window.localStorage.setItem(itemName, data);    
  };

  storeFnc.get = (itemName, isObject = false) => {
    return (isObject === false) ? 
      window.localStorage.getItem(itemName): 
      JSON.parse(window.localStorage.getItem(itemName));
  };

  return storeFnc;

});