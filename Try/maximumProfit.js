let stock = [8,7, 5, 3, 6, 14]
let finalProfit = []
for(let i = 0; i<stock.length;i++){
    for(let j = i; j<stock.length;j++){
        if(stock[j]>stock[i]){
            finalProfit.push(stock[j]-stock[i])
        }
    }
}
let maxum = 0
finalProfit.map((item)=>{
    if(item>maxum){
        maxum=item
    }
})
console.log(finalProfit,"final = ",maxum)