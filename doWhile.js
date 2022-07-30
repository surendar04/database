let order=15
let total=0
while(order>0){
   console.log(order)
   total += order 
   order--
}
console.log(`total is : ${total}`)


console.clear()

let num=1
let final=0
while(num<=10){

         if(num%2==0){
             console.log(`${num} the number is even`);
     
            }
        else{
             console.log(`${num} the number is odd`);
            }
        num++ 
        final +=num          
    }
 console.log(`total is :${final}`)