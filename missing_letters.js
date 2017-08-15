function fearNotLetter(str) {
  var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for(var i = 0;i<str.length;i++){
    if (str[0] != "a")
      return undefined;
    else if(alpha[i]!=str[i])
      str = alpha[i];

  }
  return str;
}

fearNotLetter("bce");
  
