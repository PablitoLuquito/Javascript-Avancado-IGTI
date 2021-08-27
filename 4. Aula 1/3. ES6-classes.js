//ES5
function CarroES5(marca) {
  this.marca = marca;
}
CarroES5.prototype.getMarca = function a() {};

//ES6
/*class Carro {
  constructor(marca) {
    this.marca = marca;
  }
  getMarca() {
    return this.marca;
  }
}*/

class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  getMarca() {
    return this.marca;
  }
  getModelo() {
    return this.modelo;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, estepe) {
    super(marca, modelo);
    this.estepe = estepe;
  }
  getInfo() {
    return console.log(
      `Marca: ${super.getMarca()}, Modelo: ${super.getModelo()}`
    );
  }
}
