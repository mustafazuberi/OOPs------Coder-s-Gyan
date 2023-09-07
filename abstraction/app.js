class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.job = "";
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getJob() {
    return this.job;
  }

  setJob(job) {
    this.job = job;
  }
}

class House {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }

  getAddress() {
    return this.address;
  }

  getPrice() {
    return this.price;
  }

  getResidents() {
    return this.residents;
  }

  addResident(resident) {
    this.residents.push(resident);
  }
}

let Pedro = new Person("Pedro", 28);
let house = new House(
  "House no: R 606 ,Pak kausar town , Malir , Karachi",
  9000000,
  []
);
house.addResident(Pedro);
console.log(house.getResidents());
Pedro.setJob('React Developer')