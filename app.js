const myArray = [["Dogs", 56], ["Blue", 12]];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }

  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(11);

  function compareString(e,f){
    if(e === f){
        console.log('The same');
    } else{
        console.log('Not the same');
    }
}
compareString('Go', 'Go');
function compareString(a,b){
    if(a === b){
        console.log('The same');
    } else{
        console.log('Not the same');
    }
}
compareString('Go', 'stop');