function findDuplicates(array) {
  // write your code here.
  const set = new Set(array)
  const duplicates = array.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
  });
    return duplicates
  
}

console.log(findDuplicates([1, 2, 3, 1, 5, 6, 7, 8, 5, 2]))
// => [1, 5, 2]

console.log(findDuplicates([3, 501, 17, 23, -43, 67, 5, 888, -402, 235, 77, 99, 311, 1, -43]))
// => [-43]

module.exports = findDuplicates

