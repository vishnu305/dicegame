document.querySelector("h1").addEventListener('click',function(){



var rv1 = Math.trunc(Math.random()*6)+1;
var rv2 = Math.trunc(Math.random()*6)+1;
console.log(rv1,rv2);
var image1="diceimages/dice"+rv1+".png";
var image2="diceimages/dice"+rv2+".png";
document.querySelector(".image1").setAttribute("src",image1);
document.querySelector(".image2").setAttribute("src",image2);
if (rv1>rv2){
  document.querySelector("h1").textContent="Player 1 Wins 🎉🎊🎇!";
}
else if(rv1<rv2){
  document.querySelector("h1").textContent="🎉🎊🎇 Player 2 Wins!";
}
else{
  document.querySelector("h1").textContent="Draw!"
}
})
