var timer = 30;
var newtarget = 0; 
var score = 0;
/*making bubble*/
function makeBubble(){
    var bub = "";

for(var i =1; i<=102; i++){
    var rn= Math.floor(Math.random()*10)
    bub += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#bottom_panel").innerHTML = bub;
}
/*making timer*/

function makeTimer(){
    var timeval =setInterval(function(){
        if (timer>=0){
            document.querySelector("#time").textContent = timer;
            timer--;
        }
        else{
            clearInterval(timeval);
            document.querySelector("#bottom_panel").innerHTML = `GAME OVER`;
        }
    },1000);

}
/*making the taget*/
function makeTarget(){
    newtarget = Math.floor(Math.random()*10)
    document.querySelector("#target").textContent  = newtarget;
}
/*score board*/
function scoreBoard(){
    score +=10;
    document.querySelector("#score").textContent = score;
}
document.querySelector("#bottom_panel").addEventListener("click",function(a){
    var clickbubble = (Number(a.target.textContent));
    if(clickbubble === newtarget){
        scoreBoard();
        makeTarget();
        makeBubble();        
    }
});
    
makeBubble();
makeTimer();
makeTarget();


