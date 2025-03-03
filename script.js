var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
console.log(canvas)

// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(300,300,100,100);


// 

// //line
// c.beginPath();
// c.moveTo(100,200);
// c.lineTo(250,450);
// c.lineTo(100,150);
// c.strokeStyle = "red";
// c.stroke();

// //arc/circle
// //c.beginPath();
// //c.arc(300,300,100,0,Math.PI*2,false);
// //c.strokeStyle = 'rgba(0,0,255,0.7)';
// //c.stroke();

// for (var i = 0; i < 500; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
    
//     // Generate random colors
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//     var alpha = 0.7; // Adjust transparency if needed

//     c.beginPath();
//     c.arc(x, y, 100, 0, Math.PI * 2, false);
//     c.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
//     c.stroke();
// }


// Circle constructor function
 function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = `rgb(${Math.floor(Math.random() * 256)}, 
                       ${Math.floor(Math.random() * 256)}, 
                       ${Math.floor(Math.random() * 256)})`;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color; // Use solid fill color
        c.fill(); // Fill the circle with color
        c.lineWidth = 0.5; 
        c.strokeStyle = "#000"; // Add black stroke for contrast
        c.stroke();
    };

   this.update = function () {
      // Bounce off walls
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
      }
       if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
           this.dy = -this.dy;
       }

      // Move circle
       this.x += this.dx;
       this.y += this.dy;

      this.draw();
   };
 }

 // Create a moving circle
 var circlearray = [];
  for (var i=0;i<50;i++){
     var x =Math.random() *(innerWidth - radius*2)+radius;
     var y = Math.random() * (innerHeight-radius*2)+radius;
     //var dx = Math.random() - 0.5;
     //var dy= Math.random() - 0.5;
     var dx = 2;
     var dy = 2;
     var radius = 30;
     circlearray.push(new Circle(x,y,radius,dx,dy));
  }

 function animate() {
     requestAnimationFrame(animate);
 
     c.clearRect(0, 0, innerWidth, innerHeight);

     for(var i =0 ;i< circlearray.length ; i++){
         circlearray[i].update();
     }
    
 }

 animate();
