const names = ["Garen", "Lux", "Teemo"];

const body = document.querySelector("body");

const ulNames = document.createElement("ul");

ulNames.setAttribute("class", "container");

names.map((name) => {
  const li = document.createElement("li");
  li.innerText = name;
  ulNames.appendChild(li);
});

body.appendChild(ulNames);