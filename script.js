var leftPlayer = document.getElementById("leftPlayer");
var gameArea = document.getElementById("gameArea");
var rightPlayer = document.getElementById("rightPlayer");
var startBtn = document.getElementsByClassName("startBtn");
var container = document.querySelector(".gameArea")
var startBtn = document.querySelector(".startBtn")


audio= new Audio("audio.mp3")

// Write the start button code and wrap it everything in it
startBtn.addEventListener("click", startGame)
function startGame() {
    console.log("Button is pressed");
    startBtn.classList.add("visible");
    leftPlayer.classList.remove("visible");


    // Create the Player2 As Computer
    var rightPlayer = document.createElement("img");
    rightPlayer.setAttribute("class", "rightPlayer");
    rightPlayer.setAttribute("src", "./pl2.png");
    var contHeight = container.offsetHeight;
    var contWidth = container.offsetWidth;
    setInterval(() => {
        var randTop = Math.random() * (contHeight - 100);
        var randLeft = Math.random() * (contWidth - 100);
        rightPlayer.style.position = "absolute";
        rightPlayer.style.top = randTop + "px";
        //   rightPlayer.style.levft= randLeft + "px";

        // make bulletfire from computer
        var bullet = document.createElement("div");
        bullet.classList.add("bulletsRight")
        gameArea.appendChild(bullet);

        var moveBullet = setInterval(() => {
            
            var compEnemy=document.getElementsByClassName("rightPlayer");
            for (var i = 0; i < compEnemy.length; i++) {
                var enemy = compEnemy[i];

                var enemyBound=enemy.getBoundingClientRect();
                var bulletBound=bullet.getBoundingClientRect();

                if (
                    bulletBound.top>enemyBound.top&&
                    bulletBound.left>enemyBound.left)
                     {

                    console.log("Player is finish")

                }
                
            }
            var bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("right"));
            bullet.style.top = randTop + "px";
            bullet.style.right = bulletLeft + 3 + "px";

        }, 1);
    }, 1000);

    gameArea.appendChild(rightPlayer)





    //This code for making the controls of the player 
    window.addEventListener("keydown", (e) => {
        // For moving the Top To Bottom 
        var top = parseInt(window.getComputedStyle(leftPlayer).getPropertyValue("top"));
        if (e.key == "ArrowUp" && top > 3) {
            leftPlayer.style.top = top - 10 + "px";

            audio.play();
            
        }
        else if (e.key == "ArrowDown" && top <= 390) {
            leftPlayer.style.top = top + 10 + "px";
            audio.play();
        }
        // For moving Left to Right
        // var left=parseInt(window.getComputedStyle(leftPlayer).getPropertyValue("left"));
        // if (e.key== "ArrowLeft" && left > 3) {
        //     leftPlayer.style.left= left - 10 +"px";  
        // }
        // else if (e.key== "ArrowRight" && left<=990) {
        //     leftPlayer.style.left= left+10 +"px";   
        // }



        //this is for startBtn

        // This code for bullets
        if (e.key == "ArrowUp" || e.keyCode == 32 || e.key == "ArrowDown") {
            var bullet = document.createElement("div");
            bullet.classList.add("bullets")
            gameArea.appendChild(bullet);

            var moveBullet = setInterval(() => {
                var bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));
                bullet.style.top = top + "px";
                bullet.style.left = bulletLeft + 3 + "px";
                

            }, 1);
        }
    })
    // Write the code for 
}