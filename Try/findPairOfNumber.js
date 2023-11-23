
let number = 7
let a = [3,4,1,4,6]
let pairs = []

for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
        if(a[i]+a[j]==number){
            pairs.push([a[i],a[j]])
        }
    } 
}
let finalArray = [...new Set(pairs)]
console.log(finalArray)
//remove duplicates
let f = finalArray.filter((item,pos)=>{
    console.log(finalArray.indexOf(item)+"==-1",pos)
    return finalArray.indexOf(item)==pos
})
console.log(uniqBy(finalArray, JSON.stringify))