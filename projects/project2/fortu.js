
function myFunction() {
  var x, y, fut;
  var x = document.getElementById("myText").value;
  var y = document.getElementById("myText1").value;
  var fut = 'Hello '+ '  ' + x + '  ' + y + ' nice to meet you.';
   document.getElementById("infData").innerHTML = fut;
}
function changen() {
  document.getElementById("pop").innerHTML = 'Hey Band!! How are you?';
}

function toggleTheme(value) {

var sheets = document.getElementsByTagName('link');
  
sheets[0].href = value;
}