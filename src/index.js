$(document).ready(()=>{
    
    let notificationManager = new NotificationManager();
    notificationManager.loading();    
    
    //Load assets
    AssetsManager.load(ASSETS).then(() => {              

        notificationManager.loaded();        

        let game = new Game(notificationManager);        

        game.init();
        game.run();

     }, (err)=>{
        //There was at least one error when trying to load the assets
        notificationManager.showError(`Error when trying to load ${err}`);        
     });
    
});