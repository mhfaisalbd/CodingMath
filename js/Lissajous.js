window.onload = function(){
    const canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        radiousX = 200,
        radiousY = 100,
        speedX = 0.050,
        speedY = 0.067,
        angleX = 0;
        angleY = 0;
    
    render();
    
    function render(){
        context.clearRect(0,0, width, height);
        
        let x = centerX + Math.cos(angleX) * radiousX,
        y = centerY + Math.sin(angleY) * radiousY;
        
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        angleX += speedX;
        angleY += speedY;
        requestAnimationFrame(render);
    }
}