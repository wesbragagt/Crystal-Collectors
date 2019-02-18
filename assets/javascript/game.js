// A $( document ).ready() block.
var number = 0;
var score = 0;
var win = 0;
var message = '';
var losses = 0;
var redNumber;
var blueNumber;
var purpleNumber;
var greenNumber;

$(document).ready(function () {

    // function reset to reset the score and pick another number
    reset();
});


// Function on click

$('.crystal').on('click', function () {

    console.log($(this).val());
    score += parseInt($(this).val());
    $('#score').text(score);
    if (score === number) {
        message = 'such a smart ass!'
        win++;
        reset();
    }
    else if (score > number) {
        message = 'Come on, you can do better.'
        losses++;
        reset();
    }
    else { return }

});


function reset() {
    score = 0;
    number = generateNumberBetween(120);
    var crystalArray = [];
    $('#message').text(message);
    $('#win').text(win);
    $('#losses').text(losses);

    $('#img1, #img2, #img3, #img4').empty();
    console.clear();

    console.log('set score to ' + score);
    $('#score').text(score);
    $('#win').text(win);
    $('#losses').text(losses);


    console.log('computer picked ' + number);
    $('#random-number').text(number);



    // Generate 4 random values that will be pushed into crystalArray
    for (var i = 0; i < 4; i++) {

        crystalArray.push(generateNumberCrystals(12))
    }

    // Each Crystal gets assigned a value


    redNumber = crystalArray[0];
    $('#img1').val(redNumber);
    console.log('RED: ', redNumber)

    blueNumber = crystalArray[1];
    $('#img2').val(blueNumber);
    console.log('BLUE', blueNumber);


    purpleNumber = crystalArray[2];
    $('#img3').val(purpleNumber);
    console.log('PURPLE', purpleNumber);


    greenNumber = crystalArray[3];
    $('#img4').val(greenNumber);
    console.log('GREEN', greenNumber);




}

// Function Generate Random Number where alpha is the multiplication factor
function generateNumberCrystals(alpha) {
    return Math.floor(Math.random() * alpha) + 1;
}

function generateNumberBetween(beta) {
    return Math.floor(Math.random() * beta) + 19;
}