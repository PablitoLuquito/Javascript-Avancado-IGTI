//Usar no console do navegador
const urls = [
  `https://jsonplaceholder.typicode.com/todos/1`,
  `https://jsonplaceholder.typicode.com/todos/2`,
  `https://jsonplaceholder.typicode.com/todos/3`,
];

async function getTodo() {
  await urls.forEach(async (url, idx) => {
    let todo = await fetch(url);
    console.log(`Retorno Todo ${idx + 1}:`, todo);
  });
  console.log("Concluido");
}

getTodo();

async function getTodo2() {
  for (const [idx, url] of urls.entries()) {
    const todo = await fetch(url);
    console.log(`Retorno Todo ${idx + 1}:`, todo);
  }
  console.log("Concluido");
}

getTodo2();
