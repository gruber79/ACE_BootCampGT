function  cash_register(){
  var a,b,c,d,e,f,g,h,i;
  a = document.getElementById("text").value;
  b = document.getElementById("text1").value;
  c = document.getElementById("text2").value;
  d = document.getElementById("text3").value;
  f = document.getElementById("text4").value;
  g = document.getElementById("text5").value;
  h = document.getElementById("text6").value;
  i = document.getElementById("text7").value;
  a = (a*145);  b = (b*45);  c = (c*25);  d = (d*5);
  f = (f*8);   g = (g*4);   h = (h*115);  i = (i*15);
  value = (a+b+c+d+f+g+h+i);
  document.getElementById("val").innerHTML = 'The total price of the shopping cart is: <big>' + value + '</big>';
}

