class Animal {
  constructor(name) {
    this.name = name;
  }

  eats() {
    console.log(this.name + " eats food.");
  }
}

class Alligator extends Animal {
  eats() {
    console.log(this.name + " eats fishes.");
  }
}

const murphy = new Alligator("pedro");
