const wholeNumbers=[1,2,3,4,5,6,7,8,9]
console.log(wholeNumbers.length)

console.log(wholeNumbers.lastIndexOf(1))
//concate is used to add the value in the end the function
console.log(wholeNumbers.concat([3,55,66]))

//push is used to add the new assigned values to function
console.log(wholeNumbers.push([1,6,8]))
console.log(wholeNumbers)
console.clear()

const words=["a","g","h","k","t"]
let findLength=words.length-3
console.log(words[findLength])

console.log(words.at(-1))

console.log(words.copyWithin(0,2,3))

console.log(words.join("+"))

console.log(words.reverse())

console.log(words.shift())

console.log(words.slice(1,3))

console.log(words.sort())

console.log(words.pop())
