
var count = 15
var money = 0
var treasureSpot = Math.floor(Math.random() * 25)
var bomb = Math.floor(Math.random() * 25)
while (bomb === treasureSpot) {
  var treasureSpot = Math.floor(Math.random() * 25)
}
const treasure = (location) => {
  console.log("treasure", treasureSpot, "bomb", bomb);
  count-=1
  console.log(count);
  document.getElementById("clicks").innerHTML = count

  if(location === treasureSpot) {
    document.getElementById(location).innerHTML = '<img src="./fav/winner.png">'
    setTimeout(function () {
    alert("WINNER WINNER CHICKEN DINNER")
  }, 350);
  for (let i = 0; i < 25; i++)    {
    document.getElementById(i).style.pointerEvents = 'none';
  }

  } else if(location === bomb){
      document.getElementById(location).innerHTML = '<img src="./fav/death.png">'
    setTimeout(function () {
      alert("Better Luck Next Time")
    }, 350);
    for (let i = 0; i < 25; i++)    {
            document.getElementById(i).style.pointerEvents = 'none';
    }

  } else {
    document.getElementById(location).innerHTML = '<img src="./fav/money.png">'
    money = money + 500
    document.getElementById("cash").innerHTML = money
    console.log(money);
    document.getElementById(location).style.pointerEvents = "none"
  }
  if(count == 0 ) {
    setTimeout(function () {
      alert("Got some cash, but no Chicken Dinner!!")
    }, 350);
    for (let i = 0; i < 25; i++)    {
            document.getElementById(i).style.pointerEvents = 'none';
    }
   }


}
