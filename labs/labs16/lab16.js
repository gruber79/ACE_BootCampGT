$( "#go" ).click(function() {
  $( ".block" ).animate({ left: "+=100px" }, 2000 );
});
 
$( "#stop" ).click(function() {
  $( ".block" ).stop();
});

$( "#back" ).click(function() {
  $( ".block" ).animate({ left: "-=100px" }, 2000 );
});