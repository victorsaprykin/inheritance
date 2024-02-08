"use strict";

class First {
  constructor(mark, model) {
    this.mark = mark;
    this.model = model;
  }

  hello() {
    console.log("Привет я метод родителя!");
  }
}

class Second extends First {
  constructor(mark, model) {
    super(mark, model);
  }

  hello() {
    super.hello();
    console.log("А я наследуемый метод!");
  }
}

const auto = new Second("Toyota", "Carina");

console.log(auto);
auto.hello();
