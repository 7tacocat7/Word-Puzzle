$(document).ready(function() {
  var string = "Believe you can and you're halfway there. Theodore Roosevelt";
  var stringArray = string.split("");
  for(var index =0; index < stringArray.length; index +=1){
    if(stringArray[index]==="a"){
      stringArray[index] = "-";
    }
    else if(stringArray[index]==="e"){
      stringArray[index] = "-";
    }
    else if(stringArray[index]==="i"){
      stringArray[index] = "-";
    }
    else if(stringArray[index]==="o"){
      stringArray[index] = "-";
    }
    else if(stringArray[index]==="u"){
      stringArray[index] = "-";
    }
  }
  var stringArray2 = stringArray.join(" ");
  alert(stringArray2);
});
