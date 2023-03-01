const snailSort = (array) => {
  // inner square, next circle of spiral
  const snailCore = array
    .slice(1, array.length - 1)
    .map((row) => row.slice(1, row.length - 1));

  const snailShell = [
    // first row
    array[0],
    // right column
    array.slice(1, array.length - 1).map((row) => row[row.length - 1]),
    // last row
    array.length > 1 ? array[array.length - 1].reverse() : [],
    // left column
    array
      .slice(1, array.length - 1)
      .reverse()
      .map((row) => row[0]),
    // recursion with inner square of array (next circle of spiral)
    snailCore.length > 0 ? snailSort(snailCore) : [],
  ].flat();

  return snailShell;
};
const ar = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
console.log(snailSort(ar));

module.exports = {
  snailSort,
};
