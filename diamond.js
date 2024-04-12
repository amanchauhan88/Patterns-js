let n = 4;

for(let i = 1; i <= n; i++){
    let bag = "";
    for(let j = 1; j <= (n-i); j++){
      
            bag = bag + " ";
    }
    for(let j = 1; j <= (2*i)-1; j++){
        bag = bag + "*";
    }



    console.log(bag);
}
for(let i = n; i >= 1; i--){
    let bag = "";
    for(let j = 1; j <= (n-i); j++){
      
            bag = bag + " ";
    }
    for(let j = 1; j <= (2*i)-1; j++){
        bag = bag + "*";
    }



    console.log(bag);
}