//ES5
var soma = function (a, b) {
  return a + b;
};
console.log(soma(9, 46));

function soma2(a, b) {
  return a + b;
}
console.log(soma2(5, 5));

//ES6
let soma3 = (a, b) => {
  return a + b;
};
console.log(soma3(10, 15));

let soma4 = (a, b) => a + b;
console.log(soma4(7, 6));

let log = () => {
  console.log("Error");
};
log();

const Aluno = {
  nome: "Ana",
  getAluno: function () {
    return console.log(this);
  },
};
Aluno.getAluno();

const Aluno2 = {
  nome: "Ana",
  getAluno: () => {
    return console.log(this);
  },
};
Aluno2.getAluno();
