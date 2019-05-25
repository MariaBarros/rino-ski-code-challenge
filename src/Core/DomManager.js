class DomManager{
  constructor(){    
  }
  
  addClass(container, className){    
    if(!$(container).hasClass(className)){
      $(container).addClass(className);
    }
  }

  removeClass(container, className){
    if($(container).hasClass(className)){
      $(container).removeClass(className);
    }
  }

  setContent(container, content){
    $(container).html(content);
  }
}