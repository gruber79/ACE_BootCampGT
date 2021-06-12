var z = new Date().getFullYear();
function year(){
  var edad,birth;
  var birth = document.getElementById("text").value;
  var edad = (z - birth);
    document.getElementById("val").innerHTML = 'I will be ' + (edad+10) + ' years old in ' + (z+10);
    document.getElementById("valo").innerHTML = '';
}

function year1() {
  var edad, valor, max;
  var supply = document.getElementById("text1").value;
  var valor = ((supply*365)/7.57);
  var max = Math.trunc(valor);
  document.getElementById("val1").innerHTML = 'I will need ' + max + ' gallons of water every year';
  document.getElementById("valo1").innerHTML = '';    
}

