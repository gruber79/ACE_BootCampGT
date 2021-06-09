function getFortune() {

    // Get random item from array
    var randomFortune = fortunesArray[ Math.floor(
        Math.random()*fortunesArray.length )
    ];

    // Log random item to the console 
console.log(randomFortune);