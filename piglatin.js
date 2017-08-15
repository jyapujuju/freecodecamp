function translatePigLatin(str) {
  var arr = [];
  var j = 0;
  var endpart=[];
  var temps;

   if(str.charAt(0)== 'a' || str.charAt(0)== 'e' || str.charAt(0)== 'i' || str.charAt(0)== 'o' || str.charAt(0)== 'u' ){
    str = str + "way";
  }
  else{
    cstr = str.split("");
    for(var i=0;i<cstr.length; i++){
      if(str.charAt(i)== 'a' || str.charAt(i)== 'e' || str.charAt(i)== 'i' || str.charAt(i)== 'o' || str.charAt(i)== 'u' ){
          break;
        }
       if( cstr[i] != 'a' || cstr[i] != 'e' || cstr[i] != 'i' || cstr[i] != 'o' || cstr[i] != 'u' ){
          temps = cstr.shift();
          endpart.push(temps);
        }
    }
    str= cstr.join('') + endpart.join('') + 'ay';
  }

  return str;
}

translatePigLatin("glove");
