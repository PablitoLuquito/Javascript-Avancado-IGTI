const tipoLogradouro = {
  A: "Área",
  AER: "Aeroporto",
  AL: "Alameda",
  AV: "Avenida",
  BC: "Beco",
  R: "Rua",
};

console.log(Object.entries(tipoLogradouro));

console.log(Object.values(tipoLogradouro));

let endereco = { logradouro: "Brasil" };

console.log(Object.getOwnPropertyDescriptor(endereco, "logradouro"));
