let ttlr = 5;
let ttlc = 5;

for (let i = 1; i <= ttlr; i++) {
  var bag = "";

  for (let j = 1; j <= ttlc; j++) {
    if (i == 1 || i == ttlr || j == 1 || j == ttlc) {
      bag = bag + "*";
    } else {
      bag = bag + " ";
    }
  }

  console.log(bag);
}
