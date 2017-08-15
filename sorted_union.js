function uniteUnique(arr) {
  var x;
  arr = Array.prototype.slice.call(arguments);
  var arg_arr = arr.reduce(function (a, b){
    return a.concat(b);
  });
  var newarr= arg_arr;
  for (var i = 0; i < arg_arr.length; i++){
    for (var j = 0; j < arg_arr.length; j++){
      if(arg_arr[j] == arg_arr[i] && i != j){
        arg_arr.splice(j,1);

      }

    }
  }
  return newarr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
