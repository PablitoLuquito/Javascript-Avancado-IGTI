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
  *carGenerator() {
    const brands = Object.values(this.allModel);
    let currentBrandIndex = 0;

    while (currentBrandIndex < brands.length) {
      yield* brands[currentBrandIndex];
      currentBrandIndex++;
    }
  },
};

/*let itA = carModelAll.carGenerator();

for (const car of itA) {
  console.log(car);
}*/

for (const car of carModelAll.carGenerator()) {
  console.log(car);
}

//DESTRUCTING
itB = carModelAll.carGenerator();

console.log([...itB]);
