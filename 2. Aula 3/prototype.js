function Pessoa(nome) {
  if (!nome) this.nome = "Fulano";
  else this.nome = nome;

  this.dizerOla = () => console.log(`${this.nome} diz: Olá!`);
}

let pessoaA = new Pessoa("Alberto");

Pessoa.digaOla = function () {
  console.log(`Olá, meu nome é: ${this.nome}`);
};

let pessoaB = new Pessoa("Maria");

console.log(`---------------------------------`);
try {
  pessoaA.digaOla();
} catch (error) {
  console.log("Falha no pessoaA.digaOla.");
}

try {
  pessoaB.digaOla();
} catch (error) {
  console.log(`Falha no pessoaB.digaOla.`);
}
console.log(`---------------------------------`);

pessoaB.digaOla = function () {
  console.log(`Oi, meu nome é: ${this.nome}.`);
};
try {
  pessoaA.digaOla();
} catch (error) {
  console.log("Falha no pessoaA.digaOla.");
}

try {
  pessoaB.digaOla();
} catch (error) {
  console.log(`Falha no pessoaB.digaOla.`);
}

Pessoa.prototype.digaOla = function () {
  console.log(`Olá, eu sou a: ${this.nome}.`);
};

let pessoaC = new Pessoa("Ana");

console.log(`---------------------------------`);
try {
  pessoaA.digaOla();
} catch (error) {
  console.log("Falha no pessoaA.digaOla.");
}

try {
  pessoaB.digaOla();
} catch (error) {
  console.log(`Falha no pessoaB.digaOla.`);
}

try {
  pessoaC.digaOla();
} catch (error) {
  console.log(`Falha no pessoaC.digaOla.`);
}

Pessoa.prototype.dizerOla = function () {
  console.log(`${this.nome} vou dizer outro olá.`);
};

pessoaB.dizerOla = function () {
  console.log(`${this.nome}: consigo dizer outro olá.`);
};

console.log(`---------------------------------`);
try {
  pessoaA.dizerOla();
} catch (error) {
  console.log("Falha no pessoaA.dizerOla.");
}

try {
  pessoaB.dizerOla();
} catch (error) {
  console.log(`Falha no pessoaB.dizerOla.`);
}

try {
  pessoaC.dizerOla();
} catch (error) {
  console.log(`Falha no pessoaC.dizerOla.`);
}
