// window.onload = function(){
//     // const canvas = document.getElementById('canvas'),
//     //     context = canvas.getContext('2d'),
//     //     width = canvas.width = window.innerWidth,
//     //     height = canvas.height = window.innerHeight;

//     // for (let i = 0; i < 100; i++) {
//     //     context.beginPath();
//     //     context.moveTo(Math.random() * width, Math.random() * height);
//     //     context.lineTo(Math.random() * width, Math.random() * height);
//     //     context.stroke();
//     // }

// }
let v1 = vector.create(100, 20);

let v2 = vector.create(110, 90);

let v3 = v1.add(v2);

console.log(v1.getX());
console.log(v1.getY());
console.log(v1.getAngle());
console.log(v1.getLength());

window.onload = function(){
    const canvas1 = document.getElementById('canvas1'),
        context1 = canvas1.getContext('2d'),
        canvas2 = document.getElementById('canvas2'),
        context2 = canvas2.getContext('2d'),
        canvas3 = document.getElementById('canvas3'),
        context3 = canvas3.getContext('2d'),
        width = canvas1.width = canvas2.width = canvas3.width = window.innerWidth,
        height = canvas1.height = canvas2.height = canvas3.height = window.innerHeight;

    let centerY = height /2,
        centerX = width /2,
        angle = 0;
    
    render();
    
    function render(){
        context1.clearRect(0,0, width, height);
        context2.clearRect(0,0, width, height);
        context3.clearRect(0,0, width, height);
       
        context1.save();
        context1.translate(centerX, centerY);
        context1.scale(1,-1);
        context1.rotate(v1.getAngle());
        
        context2.save();
        context2.translate(centerX+v1.getX(), centerY-v1.getY());
        context2.scale(1,-1);
        context2.rotate(v2.getAngle());

        context3.save();
        context3.translate(centerX, centerY);
        context3.scale(1,-1);
        context3.rotate(v3.getAngle());

        context1.beginPath();
        context1.moveTo(v1.getLength(), 0);
        context1.lineTo(0, 0);
        context1.moveTo(v1.getLength(), 0);
        context1.lineTo(v1.getLength() -5, -5);
        context1.moveTo(v1.getLength(), 0);
        context1.lineTo(v1.getLength()-5, 5);

        context2.beginPath();
        context2.moveTo(v2.getLength(), 0);
        context2.lineTo(0, 0);
        context2.moveTo(v2.getLength(), 0);
        context2.lineTo(v2.getLength() -5, -5);
        context2.moveTo(v2.getLength(), 0);
        context2.lineTo(v2.getLength()-5, 5);

        context3.beginPath();
        context3.moveTo(v3.getLength(), 0);
        context3.lineTo(0, 0);
        context3.moveTo(v3.getLength(), 0);
        context3.lineTo(v3.getLength() -5, -5);
        context3.moveTo(v3.getLength(), 0);
        context3.lineTo(v3.getLength()-5, 5);


        context1.stroke();
        context2.stroke();
        context3.stroke();
    }
}
