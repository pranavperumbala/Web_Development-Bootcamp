var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomDiceImage="dice" + randomNumber1 + ".png";
var randomImageSource="images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2 ="images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2)
{
  var msg="Player1 Wins";

}
else if(randomNumber1<randomNumber2){

  msg="Player2 Wins";

}else if(randomNumber1===randomNumber2){

  msg="Draw!";

}

document.querySelector("h1").innerHTML=msg;
