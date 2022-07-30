//if statements
const score=30

if(score>=50){
    console.log("you have passed the exam");
    console.log("congratulation");
}
else{
    console.log("sorry ,you have failed the exam");
}

console.clear()

//else if statements

const mark=100

if(mark<=35){
    console.log("poor student");
}
else if(mark<=50){
    console.log("average student");
}
else if(mark<=70){
    console.log("good student");
}
else{
    console.log("excellent student");
    
}

console.clear();

//program task

const number=6

 if(number==0){
     console.log("the given number is zero");
    }
    else{
        if(number%2==0){
        console.log("the number is even");
    }
        else{
        console.log("the number is odd");
    }
    }
// const kutravali = "varun"
// let   Case= 3
// if(kutravali=="varun"){
//     if (Case==1){
//         console.log(" nee oru kutravali")
//     }
// }
// else{
//     console.log(kutravali+ "nirabaradhi")
// }
// console.log(name)

let std = "sekar"
let result = null
if(std=="varun"){
    result = "good boy"
}
else if (std=="surendar"){
    result =  "average boy"
}
else if(std=="surya"){
    result =  "bad boy"
}
else if(std=="gnana sekar"){
    result =  "kaji boy"
}
else{
    result =  "who the hell are you"
}
console.log(`Result  ${result}`)


const num1=30
const num2=500
const num3=600

if((num1==num2) && (num2==num3)){
    console.log("all are equal")
    
}
else{
    if(num1<=num2){
        if(num2<=num3){
            console.log(num3)
        }
        else{
            console.log(num2)
        }
    } 
    else{
        console.log(num1)
    }
}    



const diapper=450
const perdayUsage=4
const Quantity=10
const days=30
 
 let dayscount=(days*perdayUsage)
 let perday=(dayscount/Quantity)*450
 console.log(perday)

