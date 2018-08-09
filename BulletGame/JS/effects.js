$(document).ready(function() {

    const RADIUS = 4;
    const RAD = 4;

    function degToRad(degrees) {
      var result = Math.PI / 180 * degrees;
      return result;
    }
    var invincible = false
    var quadrant;
    var bullets = []
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
   
    var bullet = canvas.getContext("2d");
    var x = 740;
    var y = 803;
    var d = 720;
    var g = 516;
    var lives = 5;
    var levelUp = 0;
    var level = 0;
    var colors = ["#F03C69", "#00fff2", "#fff98c", "#cd9bff", "#6dff68", "#ff8438"]
    var color = colors[Math.floor(Math.random() * colors.length)]
    var player = {x: x, y: y, radius: RADIUS, type:"Player", collidableWith: "enemy" };
    var frames = 0;
    var directions = ['+', '-','+', '-','+', '-', '0']
    var speeds = [.5, 1, 1.5, 2, 2.5, 3]
    
  
       
     
    function canvasDraw() {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0066ff";
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.radius, 0, degToRad(360), true);
        ctx.fill();
        
        }
    canvasDraw();
    placeBullets();
    // pointer lock object forking for cross browser

    canvas.requestPointerLock = canvas.requestPointerLock ||
                                canvas.mozRequestPointerLock;

    document.exitPointerLock = document.exitPointerLock ||
                               document.mozExitPointerLock;

    canvas.onclick = function() {
      canvas.requestPointerLock();
    };

    // pointer lock event listeners

    // Hook pointer lock state change events for different browsers
    document.addEventListener('pointerlockchange', lockChangeAlert, false);
    document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

    function lockChangeAlert() {
      if (document.pointerLockElement === canvas ||
          document.mozPointerLockElement === canvas) {
        console.log('The pointer lock status is now locked');
        document.addEventListener('mousemove', updatePosition, true);
      
            setTimeout(function(){
                   window.requestAnimationFrame(moveBullet);},2500)
        
      } else {
        console.log('The pointer lock status is now unlocked');
        document.removeEventListener('mousemove', updatePosition, true);
        
      }
    }

    var tracker = document.getElementById('tracker');

    var animation;
    function updatePosition(e) {
      player.x += e.movementX;
      player.y += e.movementY;
      if (player.x > canvas.width + RADIUS) {
        player.x = canvas.width;
      }
      if (player.y > canvas.height + RADIUS) {
        player.y = canvas.height;
      }
      if (player.x < -RADIUS) {
        player.x = RADIUS;
      }
      if (player.y < -RADIUS) {
        player.y = RADIUS;
      }
      tracker.textContent = "X position: " + player.x + ", Y position: " + player.y + ",  Score: " + frames + ", lives: " + lives;

    this.newPos = function() {
        this.player.x += this.speedX;
        this.player.y += this.speedY;
    }

      if (!animation) {
        animation = requestAnimationFrame(function() {
          animation = null;
          canvasDraw();
          placeBullets();
        });
      }
    }
    

    function updateHitbox(){
        let health = document.getElementById("health")

                for (i=0; i<bullets.length; i++){
                        var distance = Math.sqrt( Math.pow((bullets[i].x - player.x), 2) + Math.pow((bullets[i].y - player.y),2) );
                        // Math.sqrt(((bullets[i].x **2) + (bullets[i].y **2))-((player.x **2)+(player.y**2)));
                        console.log("DISTANCE " + distance);
                        if (distance < bullets[i].radius + player.radius && invincible == false ) {
                            console.log(bullets[i].radius + player.radius);
                            console.log("DISTANCE " + distance);
                            ctx.fillStyle = "white";
                            ctx.fill();
                            health.value -= 100;
                            invincible = true;
                            bullets.splice(i,1);
                        }
                        if (health.value == 0){
                            health.value += 100;
                            lives --;
                        }
                        if (lives == 0){
                            alert("Game Over\n\nScore:" + frames + "\n\n Level: " +levelUp);
                            window.location.reload();
                            health.value = 0;
                           
                           
                           
                        
                        
                    }
                }
            }
    if (invincible == true){
        setTimeout(function(){
            invincible = false
        }, 300)
  
    }
    // setTimeout(function(){
    //     window.requestAnimationFrame(moveBullet);},2500)

        for(i = 0; i<= 10; i++){
            makeBullet();
        }
    function moveBullet(){
        placeBullets();
        for(i = 0; i<bullets.length; i++){
            bullet.clearRect(0, 0, canvas.width, canvas.height)
            if (bullets[i].xMove == "+"){
                bullets[i].x += bullets[i].position * bullets[i].xSpeed;
            }
            if (bullets[i].yMove == "+"){
                bullets[i].y += bullets[i].position * bullets[i].ySpeed;
            }
            if (bullets[i].xMove == "-"){
                bullets[i].x -= bullets[i].position * bullets[i].xSpeed;
            }
            if (bullets[i].yMove == "-"){
                bullets[i].y -= bullets[i].position * bullets[i].ySpeed;
            }
            if (bullets[i].xMove == "0"){
                bullets[i].x += 0
                bullets[i].y * .5
            }
            if (bullets[i].yMove == "0"){
                bullets[i].y += 0
                bullets[i].x *.5
            }
            if (bullets[i].x <= 0 || bullets[i].x >= 1500 || bullets[i].y <= 0 || bullets[i].y >= 1125 ||
                (bullets[i].xMove =="0" && bullets[i].yMove =="0")||bullets[i].position >= .8||bullets[i].position <= .15||((bullets[i].xMove =="0" || bullets[i].yMove =="0")&& i/2 ===0)){
                bullets.splice(i, 1);
            }
        }
        window.requestAnimationFrame(moveBullet);

        canvasDraw();
        placeBullets();
        updateHitbox();
        frames = frames + 1;
        level= level + 1;
       
    }
    $("#score").html('Score = '+ frames)
    if (level === 625){
        levelUp += 1
        level = 0
    }


    function placeBullets(){

        for(i = 0; i<bullets.length; i++){
          
            bullet.beginPath();
            bullet.arc(bullets[i].x, bullets[i].y, bullets[i].radius, 0, 2 * Math.PI, false)
            bullet.fillStyle = color
            bullet.fill();

           
            
           
         if (frames >=600 ){
            bullet.fillStyle = "white"
            bullet.fill();
        }
        if (frames >=1200 ){
            bullet.fillStyle = "blue"
            bullet.fill();
        }
        }
    }
    function makeBullet(){
        var bulletClone = {
            x: d,
            y: g,
            radius: Math.random() * 50,
            xMove: directions[Math.floor(Math.random() * directions.length)],
            yMove: directions[Math.floor(Math.random() * directions.length)],
            xSpeed: speeds[Math.floor(Math.random() * speeds.length)],
            ySpeed: speeds[Math.floor(Math.random() * speeds.length)],
            position: Math.random(),
            type: "enemy",
            collidableWith: player.type
        }
        bullets.push(bulletClone);
    }
    setInterval(function(){
        if (level ==1){
            for (i= 0; i<=5; i++){
                makeBullet()
            } 
            } 
    }, 800)
    setInterval(function(){
        if (level ==2){
            for (i= 0; i<=5; i++){
                makeBullet()
            } 
            } 
    }, 600)
    setInterval(function(){
        if (level ==3){
            for (i= 0; i<=5; i++){
                makeBullet()
            } 
            } 
    }, 400)
    setInterval(function(){
        if (level ==4){
            for (i= 0; i<=5; i++){
                makeBullet()
            } 
            } 
    }, 200)
    setInterval(function(){
        if (level ==5){
            for (i= 0; i<=5; i++){
                makeBullet()
            } 
            } 
    }, 50)
    setInterval(function(){
        if (level ==6){
                alert("dam bro");
                window.location.reload(); 
            } 
    }, 10)
    //////////////////////////////////////////////


    setInterval(function(){
        d= Math.random()/Math.random() *500
        g = Math.random()/Math.random() * 500
    })
        setInterval(function(){
            console.log(invincible)
            if (invincible = true){
                invincible = false
            }
        }, 1000)
        
})