let a = [4,23,4,88,33,12,4]
let max=0
let min=9999999999999999999999999999999999
a.map((item)=>{
if(item>max){
    max=item
}
if(min>item){
    min=item
}
})

console.log(max,min)