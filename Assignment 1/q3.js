var a = [2,4,8,9,10,2,5,10,12,89];

const removeDuplicates = (arr) => arr.filter((a, i) => arr.indexOf(a) === i).sort((a,b) => a - b);

console.log(removeDuplicates(a));