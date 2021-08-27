const api = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) resolve("Sucesso");
  resolve("Falha");
});

async function request() {
  try {
    const retorno = await api;
    console.log(retorno);
  } catch {
    console.log(error);
  }
}

request();
