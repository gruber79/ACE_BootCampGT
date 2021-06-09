/**
function tellFortune(numKids, partner, geoLocation,  jobTitle ) {
    var future = 'You will be a ' + numKids + ' kids.' + ' with ' + partner + ' in ' + geoLocation + ' also you are an ' + jobTitle };
    console.log(future);
}
**/
var quotesArray = [
		'An exciting opportunity lies ahead',
    'A long time friend will bring wise advice in the coming week',
    'You will find great fortunes in unexpected places', 
	];
function presschenge(){
var randomNumber = Math.floor(Math.random()*quotesArray.length);
document.getElementById('press-quote').textContent = '“' + quotesArray[randomNumber].split(' — ')[0] + '” — ' + quotesArray[randomNumber].split(' — ')[1];
}; 