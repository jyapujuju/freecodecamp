
function pairElement(str) {
  var gnome=[];
  var pair =[];
  gnome = str.split('');
  gnome.forEach(function(nome){
    switch (nome){
      case "G":
        pair.push(["G","C"]);
        break;
      case "C":
        pair.push(["C","G"]);
        break;
      case "A":
        pair.push(["A","T"]);
        break;
       case "T":
        pair.push(["T","A"]);
        break;
    }

  });
  str = pair;
  return str;

}

pairElement("GCG");
