function cartProduct(setA, setB) {
  const product = [];
  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl];
    }
    for (const setBEl of setB) {
      product.push([...setAEl, setBEl]);
    }
  }
  return product;
}

function cartesian(...sets) {
  let tempProduct = sets[0];
  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }
}

const colors = ["blue", "red"];
const sizes = ["m", "l", "xl"];
const styles = ["vneck", "buttonUp"];

function getPermutations(options) {
  const permutations = [];
  if (options.length === 1) {
    return [options];
  }
  const partialPermutations = getPermutations(options.slice(1));

  const firstOption = options[0];
  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];

    for (let j = 0; j <= partialPermutation; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      permutations.push(
        permutationInFront.concat([firstOption], permutationAfter)
      );
    }
  }
  return permutations;
}
