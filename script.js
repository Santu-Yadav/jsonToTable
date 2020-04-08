let btnGet = document.querySelector("button");
let myTable = document.querySelector("#table");

let employees = [
  {
    id: 1,
    name: "Oli Bob",
    progress: 12,
    gender: "male",
    rating: 1,
    col: "red",
    dob: "",
    car: 1,
    lucky_no: 5,
    cheese: "Cheader",
  },
  {
    id: 2,
    name: "Mary May",
    progress: 1,
    gender: "female",
    rating: 2,
    col: "blue",
    dob: "14/05/1982",
    car: true,
    lucky_no: 10,
    cheese: "Gouda",
  },
  {
    id: 3,
    name: "Christine Lobowski",
    progress: 42,
    gender: "female",
    rating: 0,
    col: "green",
    dob: "22/05/1982",
    car: "true",
    lucky_no: 12,
    cheese: "Manchego",
  },
  {
    id: 4,
    name: "Brendon Philips",
    progress: 100,
    gender: "male",
    rating: 1,
    col: "orange",
    dob: "01/08/1980",
    car: "true",
    lucky_no: 18,
    cheese: "Brie",
  },
  {
    id: 5,
    name: "Margret Marmajuke",
    progress: 16,
    gender: "female",
    rating: 5,
    col: "yellow",
    dob: "31/01/1999",
    car: "true",
    lucky_no: 33,
    cheese: "Cheader",
  },
];

let headers = [
  "Id",
  "Name",
  "Progress",
  "Gender",
  "Rating",
  "Color",
  "DOB",
  "Car",
  "Lucky_no",
  "Cheese",
];

btnGet.addEventListener("click", () => {
  let table = document.createElement("table");
  let headerRow = document.createElement("tr");

  headers.forEach((headerText) => {
    let header = document.createElement("th");
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });

  table.appendChild(headerRow);

  employees.forEach((emp) => {
    let row = document.createElement("tr");

    Object.values(emp).forEach((text) => {
      let cell = document.createElement("td");
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  myTable.appendChild(table);
});
