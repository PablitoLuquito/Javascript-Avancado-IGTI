const carModel = ["Onix", "T-Cross", "HB20", "Palio"];
/*
//FOR
for (let i = 0; i < carModel.length; i++) {
  console.log(carModel[i]);
}
console.log(`------------------------------`);
//WHILE - Laço de repetição
let i = 0;
while (i < carModel.length) {
  console.log(carModel[i]);
  i++;
}
console.log(`------------------------------`);
//FOR-OF
for (const car of carModel) {
  console.log(car);
}
console.log(`------------------------------`);*/
const carModelAll = {
  allModel: {
    Fiat: ["Palio", "Cronos", "Toro"],
    Volkswagen: ["Gol", "Up", "Nivus", "Tiguan"],
    Chevrolet: ["Onix", "Tracker", "Corsa"],
  },
  [Symbol.iterator]() {
    let currentModelIndex = 0;
    let currentBrandIndex = 0;
    const brands = Object.values(this.allModel);
    return {
      next() {
        //Lista de todos os modelos da marca
        const models = brands[currentBrandIndex];
        //Verifico se já navegou em todos os modelos da marca e passa para a próxima
        if (!(currentModelIndex < models.length)) {
          currentBrandIndex++;
          currentModelIndex = 0;
        }
        //Verifica se já navegou em todas as marcas
        if (!(currentBrandIndex < brands.length)) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: brands[currentBrandIndex][currentModelIndex++],
          done: false,
        };
      },
    };
  },
};

for (const car of carModelAll) {
  console.log(car);
}
