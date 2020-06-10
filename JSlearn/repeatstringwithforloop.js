function repeatString(str, num) {
    var finalString = '';
    if (num <= 0) {
      return finalString;
    }
    for (var i =1; i <= num; i++) {
      finalString += str;
    }
    return finalString;
  }
  
  
  // tests
  console.log(repeatString('car', 4));
  console.log(repeatString('bar', 3));