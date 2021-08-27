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

const chassi = entity.car.chassi || "9B123456789123";

console.log(chassi);

let request = {
  header: {
    type: "",
    timeout: 0,
    active: false,
  },
};

console.log(request.header.type || "GET");
console.log(request.header.timeout || 300);
console.log(request.header.active || true);

console.log(request.header.type ?? "GET");
console.log(request.header.timeout ?? 300);
console.log(request.header.active ?? true);
