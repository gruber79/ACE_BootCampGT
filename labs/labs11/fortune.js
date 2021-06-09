/**
function tellFortune(numKids, partner, geoLocation,  jobTitle ) {
    var future = 'You will be a ' + numKids + ' kids.' + ' with ' + partner + ' in ' + geoLocation + ' also you are an ' + jobTitle };
    console.log(future);
}
**/
    // Create array
var fortunesArray = [
        "An exciting opportunity lies ahead",
        "A long time friend will bring wise advice in the coming week",
        "You will find great fortunes in unexpected places" 
];
function getFortune() {
    // Get random item from array
    var randomFortune = fortunesArray[ Math.floor(
        Math.random()*fortunesArray.length )
    ];

    // Log random item to the console 
console.log(randomFortune);
    // Create a variable for the fortune-holder element in the html
var fortuneHolder = document.getElementById("fortune-holder");

    // Put the randomFortune value into the fortune-holder element
fortuneHolder.innerHTML = randomFortune;

}
// Remove animation class (if it has it)
fortuneHolder.classList.remove("fade-animation");

// Trigger the element to be redrawn
void fortuneHolder.offsetWidth;

// Re-add the animation class
fortuneHolder.classList.add("fade-animation");









 
function questionsForusers(){
  var userInfo=[];
  var chil=prompt("Number of Children");
  var part=prompt("Partner name");
  var loc=prompt("geografi location");
  var job=prompt("job Title");
  //var userInfo=[fnam,lnam,age];
  chil+part+loc+job

}



