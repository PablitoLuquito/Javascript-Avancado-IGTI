const entity = {
  car: {
    model: "Palio",
    owner: {
      name: "Lucas",
      age: 19,
      lastName: "Silva",
    },
    brand: "Fiat",
  },
};

if (entity.car && entity.car.owner && entity.car.owner.lastName) {
  console.log(entity.car.owner.lastName);
}

let lastName = entity.car.owner && entity.car.owner.lastName;
console.log(lastName);

let lastName2 = entity.car?.owner?.lastName;
console.log(lastName2);
