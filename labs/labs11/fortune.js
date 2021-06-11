function myFunction() {
  var x = document.getElementById("myText").value;
  var y = document.getElementById("myText1").value;
  var z = document.getElementById("myText2").value;
  var w = document.getElementById("myText3").value;
  var future = 'You are an ' + w + ' living in ' + z + ', you are also married with ' + y + ' and have ' + x
  + ' Childrens.';
   document.getElementById("fortune").innerHTML = future;
  var down= ' '; 
  var up = ' ';
  document.getElementById("val").innerHTML = up ;
  document.getElementById("valer").innerHTML = down ;
}