
let n = 5;

for(i = 1; i<=n; i++) {
let bag = "";

for(j = 1; j <= n-i; j++) {
    bag = bag + " ";
}

for(j = 1; j <= i; j++) {
    bag = bag + j;
}
console.log(bag);
}