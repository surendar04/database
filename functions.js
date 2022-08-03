function add(a,b){ 

  if (typeof(a)==typeof(3)){
  let sum=(a+b)
  return sum
  }
}
let result=add(5,6) 
console.log(result)




// program to show the change in global variable
var a = "hello";

function greet() {
    a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3

console.clear()




class Arithemecti {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  addition(){
    return this.a + this.b
  }

 subration(){
  return this.a - this.b

  }
}
let math = new Arithemecti(1,5)
console.log(math.subration())
Math






