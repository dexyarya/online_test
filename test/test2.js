// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning
// 2. even number at the end of array
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  return [].concat(
    arr2.filter((a) => {
      return a % 2 !== 0 && a > 1 && a < 9 && a !== 5;
    }),
    arr1,
    arr2.filter((b) => {
      return b % 2 == 0 && b > 2 && b < 10 && b !== 6;
    })
  );
}

console.log(result(arr1, arr2));
