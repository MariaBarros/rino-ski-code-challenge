class Canvas { 
  
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.drawOffset = {
        x: 0,
        y: 0
    };

    this.createCanvas();
  }

  createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = "skiCanvas";
    canvas.width = this.width * window.devicePixelRatio;
    canvas.height = this.height * window.devicePixelRatio;
    canvas.style.width = this.width + 'px';
    canvas.style.height = this.height + 'px';

    this.ctx = canvas.getContext("2d");
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    document.body.appendChild(canvas);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);    
  }

  setDrawOffset(x, y) {
    this.drawOffset.x = x;
    this.drawOffset.y = y;
  }

  drawImage(image, x, y, width, height) {
    x -= this.drawOffset.x;
    y -= this.drawOffset.y;

    this.ctx.drawImage(image, x, y, width, height);
  }

  drawRect (fillStyle, path = []) {     
    const half = parseInt(path.length/2);
    let index = 0;
    path.map((point)=>{
      let alpha = (index < half) ? PATH_ALPHA_MAX : PATH_ALPHA_MIN;
      let style = `rgba(${fillStyle},${alpha})`;
        
      this.ctx.fillStyle = style;      
      this.ctx.fillRect(point.x, point.y, 1, 1);
      index ++;
    });      
    this.ctx.fill();      
  }
}