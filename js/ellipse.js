window.onload = function(){
    const canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        radiousX = 200,
        radiousY = 100,
        speed = 0.09,
        angle = 0;
    
    render();
    
    function render(){
        context.clearRect(0,0, width, height);
        
        let x = centerX + Math.cos(angle) * radiousX,
        y = centerY + Math.sin(angle) * radiousY;
        
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;
        requestAnimationFrame(render);
    }
}