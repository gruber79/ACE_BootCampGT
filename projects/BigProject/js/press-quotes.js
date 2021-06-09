/**
'Humans Have Been Sharing Food With Animals for Centuries. Why Is That? — New York Times',
'Would You Spend $899 for a Kitty Scratcher? — News Chant',
'This is a web page that is designed for you to learn a little more about cats. — by Galo TL',
'More than 100 cats rescued from ‘filthy, poor conditions’ at New Jersey home. — NEW YORK DAILY NEWS',
'Cats Domesticated Themselves, Ancient DNA Shows. — NATIONAL GEOGRAPHIC',
**/

var quotesArray = [
		'Humans Have Been Sharing Food With Animals for Centuries. Why Is That? — New York Times',
		'Would You Spend $899 for a Kitty Scratcher? — News Chant',
		'This is a web page that is designed for you to learn a little more about cats. — by Galo TL',
		'More than 100 cats rescued from ‘filthy, poor conditions’ at New Jersey home. — NEW YORK DAILY NEWS',
		'Cats Domesticated Themselves, Ancient DNA Shows. — NATIONAL GEOGRAPHIC',
	];
function presschenge(){
var randomNumber = Math.floor(Math.random()*quotesArray.length);
document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '” — ' + quotesArray[randomNumber].split(' — ')[1];
}; 
	//console.log( 	quotesArray[randomNumber].split(' — ')[0] );
