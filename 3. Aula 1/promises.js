//EXEMPLO 1 - PARA CRIAÇÃO de PROMISE E EXECUÇÃO
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso P1."), 2000);
});

p1.then(
  (res) => {
    console.log(res);
  },
  (rej) => {}
);

new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso P1."), 2000);
}).then(
  (res) => {
    console.log(res);
  },
  (rej) => {}
);

//EXEMPLO 2 - CRIAÇÃO DE PROMISE E O USO DO CATCH
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Sucesso P2."), 2000);
});

p2.then((res) => {
  console.log(res);
});
p2.catch((rej) => {});

p2.then((res) => {
  console.log(res);
}).catch((rej) => {});

//EXEMPLO 3 - PROMISES COM O CATCH E O UNICO CATCH PARA TODAS AS REJEIÇÕES
const p3 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Sucesso P3.");
  } else {
    reject("Falha P3.");
  }
});

p3.then(console.log).catch(console.error);

//EXEMPLO 4 - ENCADEAMENTO DE THEN E O CATCH
const p4 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Sucesso P4");
  } else {
    reject("Falha P4");
  }
});

p4.then(function acao1(res) {
  console.log(`${res} da ação 1.`);
  return res;
})
  .then(function acao2(res) {
    console.log(`${res} da ação 2.`);
    return res;
  })
  .then(function acao3(res) {
    console.log(`${res} da ação 3.`);
    return res;
  })
  .catch(function error(rej) {
    console.log(rej);
  });

//EXEMPLO 5 - ENCADEAMENTO DE CATCHS
const p5 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Sucesso P5");
  } else {
    reject("Falha P5");
  }
});

p5.then(function acao1(res) {
  console.log(`${res} da ação 1.`);
  return res;
})
  .catch(function erro1(rej) {
    console.error("Erro no primeiro catch.");
    return rej;
  })
  .then(function acao2(res) {
    console.log(`${res} da ação 2.`);
    return res;
  })
  .then(function acao3(res) {
    console.log(`${res} da ação 3.`);
    return res;
  })
  .catch(function erro2(rej) {
    console.error(rej);
  });

//EXEMPLO 6 - ENCADEAMENTO DE CATCHS DIRETAMENTE A PRIMEIRA PROMISE, OS DOIS SÃO EXECUTADOS
const p6 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Sucesso P6");
  } else {
    reject("Falha P6");
  }
});

p6.catch(function erro1(rej) {
  console.error("Erro no primeiro catch P6.");
  return rej;
});
p6.catch(function erro2(rej) {
  console.error(rej);
});

p6.then(function acao1(res) {
  console.log(`${res} da ação 1.`);
  return res;
})
  .then(function acao2(res) {
    console.log(`${res} da ação 2.`);
    return res;
  })
  .then(function acao3(res) {
    console.log(`${res} da ação 3.`);
    return res;
  });

//EXEMPLO 7 - ENCADEAMENTO DE THENS E CATCHS COM EXCEÇÃO NO MEIO DO FLUXO
const p7 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Sucesso P7");
  } else {
    reject("Falha P7");
  }
});

p7.catch(function erro1(rej) {
  console.error("Erro no primeiro catch P7.");
  return rej;
});

p7.then(function acao1(res) {
  console.log("Promessa rejeitada P7 na ação 1");
  throw new Error("Erro");
})
  .catch(function erro2(rej) {
    console.error("Tratamento das rejeições em P7 ou ação 1.");
    return rej;
  })
  .then(function acao2(res) {
    console.log(`${res} da ação 2.`);
    return res;
  })
  .then(function acao3(res) {
    console.log(`${res} da ação 3.`);
    return res;
  })
  .catch(function erro3(rej) {
    console.error("Tratamento das rejeições em ação 2 e ação 3");
  });
