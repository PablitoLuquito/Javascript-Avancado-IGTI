//ES5
var carros = ["Uno", "Gol"];

var car1 = carros[0];
var car2 = carros[1];

//ES6
let [a, b] = ["Uno", "Gol", "Onix"];

console.log(a);
console.log(b);

//SWAP
[a, b] = [b, a];

console.log(a);
console.log(b);

const c1 = { modelo: "Onix", ano: 2019 };

const { modelo, ano } = c1;

console.log(modelo);
console.log(ano);

const printCarInfo = ({ modelo, ano }) =>
  console.log(`Modelo: ${modelo}, Ano: ${ano}`);

printCarInfo(c1);
