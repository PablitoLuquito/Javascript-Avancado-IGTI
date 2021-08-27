//ESCOPO DE BLOCO
if (true) {
  const message = "Olá!";
  console.log(message);
}
//console.log(message); //ReferenceError: message is not defined

for (const color of ["verde", "vermelho", "amarelo"]) {
  const message = "Olá!";
  console.log(color);
  console.log(message);
}
//console.log(color);
//console.log(message);

//EXEMPLO DE ESCOPO DE BLOCO COM VAR
if (true) {
  var number = 0;
  console.log(number);
}
console.log(number);

function exec() {
  var txt = "Escopo local com var";
  console.log(txt);
}
exec();
//console.log(txt);

//EXEMPLO DE ESCOPO LOCAL COM LET CONST
function exec2() {
  let count = 0;
  const test = 2;

  function exec3() {}

  console.log(count);
  console.log(test);
  console.log(exec3);
}

exec2();
//console.log(count);
//console.log(test);
//console.log(exec3);

//ESCOPO ANINHADO
function exec3() {
  const txt = "Escopo aninhado";
  if (true) {
    const name = "Carro";
    console.log(txt);
  }
  //console.log(name);
}
exec3();

//EXEMPLO ESCOPO GLOBAL
let gName = "Pablo";

console.log(gName);

//EXEMPLO HOISTING
printName();

function printName() {
  console.log(`Nome: ${gName}`);
}
