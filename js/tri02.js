window.onload = function(){
    const canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        baseRadious = 200,
        baseAlpha = 0.5,
        offset = 100,
        offsetAlpha = 0.5,
        speed = 0.025,
        angle = 0;
    
    render();
    
    function render(){
        let radious = baseRadious + Math.sin(angle) * offset;
        let alpha = baseAlpha + Math.sin(angle) * offsetAlpha;
        
        context.fillStyle = "rgba(0,0,128,"+alpha+")";
        context.clearRect(0,0, width, height);
        context.beginPath();
        context.arc(centerX, centerY, radious, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;
        requestAnimationFrame(render);
    }
}