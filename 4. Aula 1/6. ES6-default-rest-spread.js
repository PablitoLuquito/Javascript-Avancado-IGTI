//ES5
var soma = function (a, b) {
  if (a === undefined) a = 1;
  if (b === undefined) b = 1;
  return a + b;
};
console.log(soma());

//ES6
let soma2 = (a = 1, b = 1) => a + b;
console.log(soma2());

//REST
function soma3(...valores) {
  return valores.reduce((anterior, atual) => {
    return anterior + atual;
  });
}

console.log(soma3(10, 10, 10, 10, 10, 10, 10, 10));

//SPREAD
function soma4(a, b, c) {
  return a + b + c;
}

let numeros = [1, 2, 3];

console.log(soma4(...numeros));
