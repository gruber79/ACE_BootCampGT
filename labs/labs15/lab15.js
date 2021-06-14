var x = document.getElementById("myAudio"); 
function playAudio1() { 
  x.play(); 
} 
var y = document.getElementById("myAudio1"); 
function playAudio() { 
  y.play(); 
} 

var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 20) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.right = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}