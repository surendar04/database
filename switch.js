let operator="/"
let vikram=3
let vedha=9
switch(operator){
    case "+":
       operation= vikram+vedha
        console.log(operation)
    break;

    case "-":
        if(vedha>vikram){
            operation=vedha-vikram       
        }
        else{

            operation= vikram-vedha
        }
            console.log(operation)
    break;

    case "*":
       operation= vikram*vedha
        console.log(operation)
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
            console.log(operation)

        }
    break;

    default:
        console.log("enter something")
    break;
}
