 /*----------------------------------------------------------------------------+
 * Observable allow objects suscribe to events                                 +
 * and ge notified when the event occurs                                       +
 *----------------------------------------------------------------------------*/
 
class Observable{
  constructor(){
    this.observers = [];  
  }
 
  //Add event 
  add(observer) {
    this.observers.push(observer);
  }

  //Notify events
  notify(obj) {
    this.observers.forEach(function (observer) {
      observer.call(null, obj);  
    });
  }
}