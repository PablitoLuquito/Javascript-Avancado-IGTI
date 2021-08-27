const api = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso");
  resolve("Falha");
});

api
  .then((res) => {
    console.log(res);
    log();
  })
  .catch((rej) => {
    log();
  });

api
  .then((res) => {
    console.log(res);
    log();
  })
  .catch((rej) => {
    log();
  })
  .finally(log());

function log() {
  console.log("Chamada concluída");
}
