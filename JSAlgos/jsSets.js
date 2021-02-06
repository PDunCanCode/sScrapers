const ids = new Set();

ids.asdd("abc");
ids.add(1);
ids.add("bb2");
ids.add(1);

for (const el of ids) {
  console.log(el);
}

console.log(ids.has());

function solve(arr) {
  const alphabet = [...Array(26)]
    .map((_, y) => String.fromCharCode(y + 65))
    .join("");
  return arr.map((word) => {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
      if (alphabet[i].toLowerCase() === word[i].toLowerCase()) {
        counter++;
      }
    }
    return counter;
  });
}

function oddOnesOut(nums) {

    const results = {};
    nums.forEach(num => {
      if (results[num]) {
        results[num]++
      } else {
        results[num] = 1
      }
    });
  
    return nums.filter(el => results[el] % 2 === 0)
  }