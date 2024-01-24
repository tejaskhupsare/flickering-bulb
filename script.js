let counter = 0;

function Fun() {
  let bulb = document.querySelector(".bulb");

  if (counter % 2 == 0) {
    bulb.setAttribute("src", "./images/lightbulb-on.png");

    counter++;

  } else if (counter % 2 !== 0) {
    bulb.setAttribute("src", "./images/lightbulb-off.png");

    counter--;

  }
}

//.......

setInterval(Fun, 1000);











