// A $( document ).ready() block.

$(document).ready(function () {

    // Function Generate Random Number 
    var generateNumber = function (alpha) {
        return Math.floor(Math.random() * alpha) + 1;
    }
    // assign to number and display it
    var number = generateNumber(100);
    console.log('computer picked ' + number);
    $('#random-number').text(number);

    // Create an array for the crystal values
    var crystalArray = [];
    for (var i = 0; i < 4; i++) {
        crystalArray.push(generateNumber(17))
    }
    console.log(crystalArray);
    // Each Crystal gets assigned a value
    var red = crystalArray[0]
    var blue = crystalArray[1]
    var purple = crystalArray[2]
    var green = crystalArray[3]

    console.log('red crystal value is ' + red);
    console.log('blue crystal value is ' + blue);
    console.log('purple crystal value is ' + purple);
    console.log('green crystal value is ' + green);




















});






// results panel displays total score
