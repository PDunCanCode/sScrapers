const name = "Paul";
let age = 38;
const hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return "Name is" + userName + "age is" + userAge + "hobbies: " + userHasHobby;
}

const summarizeArrow = (userName, userAge, UserHasHobby) => {};

const add = (a, b) => {
  return a + b;
};
console.log(add(1, 4));

// Objects & Methods

const person = {
  name: "Paul",
  age: 38,
  greet() {
    console.log("Hi, Im " + this.name);
  },
};

const hobbies = ["LeetCode", "Audiobooks"];

console.log(hobbies.map((hobby) => "Hobby: " + hobby));

console.log(hobbies);

const copiedArray = [...hobbies];

const toArray = (...args) => {
  return args;
};

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done.");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);
