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

console.clear()

function powerstar(a,b){
         
  if(b==0){
      b=2
    console.log("instead of 0 using 2")
    }
   
  let division=(a/b)
  return division
}
// console.log(powerstar(5,0))


function arthimeticFight(operator,vikram,vedha){
  switch(operator){
    case "+":
      operation= vikram+vedha
    break;

    case "-":
      if(vedha>vikram){
        operation=vedha-vikram       
      }
      else{

        operation= vikram-vedha
      }
  break;

    case "*":
          operation= vikram*vedha
        break;

    case "/":
        if(vedha==0){
          console.log("this cannot be used")
        }
        else if(vikram==0){
            console.log("this cannot be used")
        
          }
        else{
          operation= vikram/vedha
        }
        break;

    default:
        console.log("enter something")
        break;
}
return operation
}
let fight= arthimeticFight("+",5,9)
console.log(fight)