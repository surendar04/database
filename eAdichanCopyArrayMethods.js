let eAdichanCopyPop =(arr)=> arr[arr.length-1]

let eAdichanCopyLength=(arr)=>{
    let i = 1
    while(true){
        if(arr[i]==undefined){
            return i 
        }
        i++
    }
}

let eAdichanCopyReverse=(arr)=>{
      let reversedArray=[]
    for(i=eAdichanCopyLength(arr)-1;i>=0;i--){       
        reversedArray.push(arr[i])
    }
    return reversedArray
}

let eAdichanCopyJoint=(...arr)=>{
    let newArray=[]
    arr.forEach((v)=>{
        v.forEach((v2)=>{
                newArray.push(v2)
        })
    })
    return newArray

    }

let values=[true,false]
let values2=["removeMe","a","b","v",3,"b","g","h","k","e","l"]
let values3 = [007]
let result=eAdichanCopyJoint(values,values2,values3)
console.log(result)



