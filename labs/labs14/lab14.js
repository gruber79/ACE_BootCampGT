
function cash_register() {
  var a, b, c, d, e, f, g, h, x;
  var a = document.getElementById("text").value;
  var b = document.getElementById("text1").value;
  var c = document.getElementById("text2").value;
  var d = document.getElementById("text3").value;
  var e = document.getElementById("text4").value;
  var f = document.getElementById("text5").value;
  var g = document.getElementById("text6").value;
  var h = document.getElementById("text7").value;
  
  var x = (a*145)+(b*45)+(c*25)+(d*5)+(e*8)+(f*4)+(g*115)+(h*15);

    document.getElementById("val").innerHTML = 'The total price of the shopping cart is:<big> $' + x + '<big>';
    
}
