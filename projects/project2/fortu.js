
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
function cssChange() {
  document.getElementById("stud").innerHtml = '<link rel="stylesheet" type="text/css" href="style1.css"/>';
}
function cssChange1() {
  document.getElementById("stud").innerHtml = '<link rel="stylesheet" type="text/css" href="style2.css"/>';
}
function cssChange2() {
  document.getElementById("stud").innerHtml = '<link rel="stylesheet" type="text/css" href="style3.css"/>';
}
function cssChange3() {
  document.getElementById("stud").innerHtml = '<link rel="stylesheet" type="text/css" href="style4.css"/>';
} 