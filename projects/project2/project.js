// JavaScript Document
window.onload = preload();
function start(){
	preoload();
	//pics();
}
function preload (arrayOfImages){
	$(arrayOfImages).each(function(){
		$('<img/>')[0].src = this;
	});
}
preload ([
'images/gta.png',
'images/duty.png',
'images/assassin.png',
'images/back.png',
]);