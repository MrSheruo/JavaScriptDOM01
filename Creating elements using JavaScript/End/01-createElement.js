const div = document.createElement("div");

const body = document.querySelector("body");

// body.appendChild(div);

const divInsideBody = body.appendChild(div);

console.log(divInsideBody);

// div.innerText = `<h1>hero</h1>`;

// div.innerHTML = `<h1>hero</h1>`;
