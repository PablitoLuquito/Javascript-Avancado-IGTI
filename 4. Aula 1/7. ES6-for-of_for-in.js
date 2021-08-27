let numeros = [1, 2, 3];

for (let numero of numeros) {
  console.log(numero);
}

for (let numero in numeros) {
  console.log(numero);
}

const Aluno = {
  nome: "Pedro",
  idade: 27,
  curso: "Matemática",
  [Symbol.iterator]: function* () {
    yield this.nome;
    yield this.idade;
    yield this.curso;
  },
};

for (let prop of Aluno) {
  console.log(prop);
}

for (let prop in Aluno) {
  console.log(prop);
}
