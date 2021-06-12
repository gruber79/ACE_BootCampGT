
function calculate(){ 
var r, h, valume ; 
var r = document.getElementById("text").value; 
var h = document.getElementById("text1").value;
var volume = Math.trunc(3.14*r*r*h); 
document.getElementById("vol").innerHTML = 'The cylinder valume is: ' + volume;
}
function operations(){
var h, r, v
var h = prompt('Enter the height of the Cylinder in "cm"')
var r = prompt('Enter the Radio of the Cylinder in "cm"')
var v = Math.trunc(3.14*(r**2)*h)
document.getElementById("vol2").innerHTML = '<strong><big> V = π*r^2*h </big></strong><br>';
document.getElementById("vol").innerHTML = 'Result V='+ v;
}





