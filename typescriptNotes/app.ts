function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Logging - Human")
class Human {
  name = "Paul";

  constructor() {
    console.log("Make a new Person");
  }
}

const pers = new Human();

console.log(pers);
