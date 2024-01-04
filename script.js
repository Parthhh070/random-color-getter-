let button = document.querySelector("button");

button.addEventListener("click", () => {
  let h1 = document.querySelector("h1");
  let randomcolor = getrandomcolor();
  h1.innerText = randomcolor;

  let div = document.querySelector(".clr");

  div.style.backgroundColor = randomcolor;

  console.log("color updated!");
});

function getrandomcolor() {
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);

  let color = `rgb(${R},${G},${B} )`;
  return color;
}
