


for (var i = 0; i <= 8; i++) {
    var bag = "";

  for (var j = 1; j <= 8; j++) {
    
        
    if ((i + j) % 2 == 0) {
        bag = bag + "X"+" ";
      
    }

    // If the sum of cell coordinates is odd then
    else {
        bag = bag + "O"+" ";
      
    }
  }
  console.log(bag);
}
