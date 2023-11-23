let a = [{name:"apple"},{name:"apple1"},{name:"apple2"}]
let final = a.filter((item)=>{
return (item.name=="apple")?false:true
})
console.log(final)

let new1 = [a,[...new Set(a)]]
console.log(new1)