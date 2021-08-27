//EXEMPLO FUNÇÃO GERADORA
function getID(range) {
  let i = 0;
  while (i < range) {
    i++;
    return i;
  }
}

function* getID(range) {
  let i = 0;
  while (i < range) {
    i++;
    yield i;
  }
}

let it = getID(3);

console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//FOR - OF
let it2 = getID(3);
for (const item of it2) {
  console.log(item);
}
console.log("----------------------------------");

function* getUniqueID() {
  let i = 0;
  while (true) {
    i++;
    yield `id-${i}`;
  }
}

const cars = {};
const idCarsGenerator = getUniqueID();

function addCar(car) {
  const id = idCarsGenerator.next().value;
  cars[id] = { id, car };
}

addCar("Palio");
addCar("Fox");
addCar("Mobi");
addCar("HB20");
addCar("BMW");
addCar("Ferrari");
addCar("Tiguan");

console.log(cars);
