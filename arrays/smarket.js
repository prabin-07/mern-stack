function tBill(tot){
    let sum = 0;
    for(let i=0;i<tot.length;i++){
        sum+=tot[i];
    }
    console.log("Total Bill:",sum);

    for(let i=0;i<=tot.length-1;i++){
        for(let j=i+1;j<tot.length;j++){
            if(tot[i]>tot[j]){
                let temp = tot[i];
                tot[i] = tot[j];
                tot[j] = temp;
            }
        }
    }
    console.log("Highest-Priced item: ",tot[tot.length-1]);
    console.log("Lowest-Priced item: ",tot[0]);
}

let prices = [150,250,100,300,200];
tBill(prices);