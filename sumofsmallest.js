//

function smallestCommons(arr) {
  var count = 1;
  var gcd =1;
  var b=[];
  var higher;
  var lower;
  var limit;
  var flag;
  if (arr[0]<arr[1]){
    higher = arr[1];
    lower = arr[0];
  }
  else {
    higher = arr[0];
    lower = arr[1];
  }
  limit = higher-lower+1;
  for(var i=lower;i<=higher;i++){
    gcd = gcd * i;
  }

  for (var k=1; k<gcd; k++){
     for ( var j=lower; j<=higher; j++){
       if ( k%j==0){
         flag ++;
       }
       else {
         flag = 0;
       }
     }
     if (flag == limit){
         break;
     }
  }
  return k;

}


smallestCommons([5,1]);
