
    var randomNumber1=Math.floor(Math.random()*6)+1;
    var randomNumber2=Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
    if(randomNumber1===randomNumber2){
        document.querySelector(".result").innerHTML="DRAW";
    }
    else if(randomNumber1>randomNumber2){
        document.querySelector(".result").innerHTML="PLAYER 1 WINS!!!";
    }
    else{
        document.querySelector(".result").innerHTML="PLAYER 2 WINS!!!";
    }
