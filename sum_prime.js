function sumPrimes(num) {
  var sum = 2;
  var prime;
  for( var i=2;i<=num;i++){

    for( var j=2; j<i;j++){
      if(i%j == 0){
        prime = false;
        break;
      }
      else{
        prime = true;
      }

    }
    if(prime == true){
     sum = sum +i;
    }
  }

  return sum;
}

sumPrimes(10);
