interface Named {
    readonly name: string;
}


interface Greetable extends Named {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Paul");
