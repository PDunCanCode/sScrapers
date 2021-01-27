function findElement(arr, element, comparatorFn) {
  let index = 0;
  for (const item of arr) {
    if (
      typeof element === "object" &&
      element !== null &&
      comparatorFn(element, item)
    ) {
      return index;
    }
    if (item == element) {
      return index;
    }
    index++;
  }
}

const arr = [5, 3, 10, -10, 33, 51];

arr.findIndex((el) => el === 5);
console.log(el)

console.log(findElement(arr, 10));

const objects = [
  { name: "Paul", age: 38 },
  { name: "Boo", age: 11 },
  function (el, it) {
    return el.name === it.name;
  },
];
