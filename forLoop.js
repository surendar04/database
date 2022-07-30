let total=0
for(let i = 0;i<10;i ++){
    if(i%2==0){
        console.log("the given number is even")
    }
    else{
        console.log("the given number is odd")
    }
    i++
    total +=i
} 
   console.log(`total is ${total}`)

console.clear()
   
 let password="varun"
//  alpha ="a b c d e f g h i j k l m n o p q r s t u v w x y z".split(' ')
 alpha =["a" ,"b" ,"c"]
//  console.log(alpha)
 passwordDemo = ""

 let temp = ""
 alpha.forEach((element,index)=> {

    for(let i = 0; i<= index ;i++){
        temp += element
        console.log(temp)       
    }
});


    // if(password === passwordDemo){
    //     console.log(`your password is ${i}`)
    //     break;        
    // }
