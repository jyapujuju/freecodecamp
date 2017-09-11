
function dropElements(arr, func) {
  // Drop them elements.
  var result = [];
  for (var i = 0; i < arr.length; i++){
    if (func(arr[i]) == true){
      result = arr.slice(i,arr.length);
      break;
    }

  }
  if (i==0){
    return arr;
  }
  else{
      return result;
  }
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
