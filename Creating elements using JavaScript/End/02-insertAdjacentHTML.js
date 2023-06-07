const names = ["Garen", "Lux", "Teemo"];

const body = document.querySelector("body");
// body.insertAdjacentHTML(
//   "beforeend",
//   `
//     <h2>hello there</h2>
//     <h1>Hello, World!</h1>

// `
// );
names.map((name) => {
  body.insertAdjacentHTML(
    `beforeend`,
    `
    <div>
    <h2>hello ${name}</h2>
    </div>
  `
  );
});

("beforebegin"); //Inserts the HTML content as a sibling immediately before the element.
("afterbegin"); //Inserts the HTML content as the first child of the element.
("beforeend"); //Inserts the HTML content as the last child of the element.
("afterend"); //Inserts the HTML content as a sibling immediately after the element.
