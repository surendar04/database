//task1

function storeAndPrintArray(arr1,arr2){
      let array3=[true,false]
    console.log(arr1)
    let newArray=arr1.concat(arr2,array3)
    console.log(newArray)

    let length=arr1.push(arr2,array3)
    console.log(length)
    console.log(arr1)
 for(i=0;i<arr1.length;i++){
    console.log(arr1[i])    

 }
}
function reversed(arr1){
    let newArray=[]
     for(i=arr1.length-1;i>-1;i--){
        console.log(arr1[i])
        newArray.push(arr1[i])
    
     }

     let index = arr1.length - 1
    //  while(true){
    //     if(arr1[index] == undefined){
    //         return newArray
    //     }
    //     newArray.push(arr1[index])
    //     index--
    //  }

    return newArray 
}
const sumOftheArray  = (arr) =>{
    let sum=0
    for(i=0;i<arr.length;i++){
        if(typeof(arr[i])=="number"){

            sum=sum+arr[i]
        }
        
    }
    return sum
}    
let arr1 = [12,3,'bs',4,54]
let arr2 = ['a','s','f']
// storeAndPrintArray(arr1,arr2)
// let result=reversed(arr1)
 let result=sumOftheArray(arr1)
console.log(result)