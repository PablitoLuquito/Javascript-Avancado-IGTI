let arr = [1, 2, [3, 4]];

console.log(arr.flat());

let arr2 = [1, 2, [3, 4, [5, 6]]];

console.log(arr2.flat(1));

console.log(arr2.flat(2));

let arr3 = [1, 2, [3, 4, [5, 6, [7, 8, 9, 10]]]];

console.log(arr3.flat(Infinity));

let arr4 = [1, 2, 3, , 5];

console.log(arr4);
console.log(arr4.flat());
