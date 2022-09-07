// let array=[1,2,3,4,5,6,7,8,9,10]

// console.log(array.reduce((a,b,i) => a + i + b, ''));

// console.clear()

let array2=[["name","varun"],["age",20],["qualification","BCA"],["martialstatus","single"]]

console.log(array2.reduce((a, [key, val]) => ({...a, [key] : val}), {}))

// let output=array2.map(([key, val])=> ({[key] : val}))
// console.log(output.reduce((a,b) => ({...a, ...b}), {}));