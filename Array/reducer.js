var ab = [30,20,30,40]
let init = 0
let  final =ab.reduce((prev,item,index,arr)=>{
     console.log(prev,item)
  return  prev+1
   
},init)

console.log(final)