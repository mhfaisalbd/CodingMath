window.onload = function(){
    const canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    let centerY = height /2,
        centerX = width /2,
        angle = 0;
    
    render();
    
    function render(){
        context.clearRect(0,0, width, height);
       
        context.save();
        context.translate(centerX, centerY);
        context.rotate(angle);

        context.beginPath();
        context.moveTo(20, 0);
        context.lineTo(-20, 0);
        context.moveTo(20, 0);
        context.lineTo(10, -10);
        context.moveTo(20, 0);
        context.lineTo(10, 10);

        context.stroke();
        context.restore();
       
        requestAnimationFrame(render);

        document.body.addEventListener("mousemove", function (event) {
            let dy = event.clientY - centerY,
                dx = event.clientX - centerY;
            angle = Math.atan2(dy , dx);
        });
    }
}