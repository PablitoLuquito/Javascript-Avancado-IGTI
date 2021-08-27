//ES5
if (true) {
  var v = "Aula";
}
console.log(v);

//ES6
if (true) {
  let x = "Aula";
}
//console.log(x);

const PI = 3.141595;

console.log(PI);

//PI = 3.15; //TypeError: Assignment to constant variable.

const Aluno = {
  nome: "Pablo",
  sobrenome: "Marinho",
};

console.log(Aluno.nome);

Aluno.nome = "André";

console.log(Aluno.nome);

//Aluno = { nome: "Julia", sobrenome: "Silva" }; //TypeError: Assignment to constant variable.
