window.onload = function(){
    const canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    // let centerY = height * .5,
    //     centerX = width * .5,
    //     radious = 200,
    //     speed = 0.025,
    //     angle = 0;
    
    // render();
    
    // function render(){
    //     context.clearRect(0,0, width, height);
        
    //     let x = centerX + Math.cos(angle) * radious,
    //     y = centerY + Math.sin(angle) * radious;
        
    //     context.beginPath();
    //     context.arc(x, y, 10, 0, Math.PI * 2, false);
    //     context.fill();

    //     angle += speed;
    //     requestAnimationFrame(render);
    // }

    let centerY = height * .5,
        centerX = width * .5,
        radious = 200,
        speed = 0.025,
        noOfObject = 480,
        slice = Math.PI * 2 / noOfObject;
    
    for (let i = 0; i < noOfObject; i++) {
        let angle = i * slice,
        x = centerX + Math.cos(angle) * radious,
        y = centerY + Math.sin(angle) * radious;
        
        context.beginPath();
        context.arc(x, y, 2, 0, Math.PI * 2, false);
        context.fill();
    }
}