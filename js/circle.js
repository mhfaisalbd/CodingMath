window.onload = function(){
    const canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        radious = 200,
        speed = 0.025,
        angle = 0;
    
    render();
    
    function render(){
        context.clearRect(0,0, width, height);
        
        let x = centerX + Math.cos(angle) * radious,
        y = centerY + Math.sin(angle) * radious;
        
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;
        requestAnimationFrame(render);
    }
}