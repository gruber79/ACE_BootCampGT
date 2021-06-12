var z = new Date().getFullYear();
function year(){
  var edad,birth;
  var birth = document.getElementById("text").value;
  var edad = (z - birth);
  if (birth > 1900){
    document.getElementById("val").innerHTML = '<big>I will be ' + (edad+4) + ' or ' + (edad+5) + ' years old in july <strong>' + (z+5) + '</strong></big>';
    document.getElementById("valo").innerHTML = '';   
}
}

