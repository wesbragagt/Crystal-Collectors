// A $( document ).ready() block.

$(document).ready(function () {

    var score = 0;
    var win = 0;
    var losses = 0;

    // Function Generate Random Number where alpha is the multiplication factor
    function generateNumber(alpha) {
        return Math.floor(Math.random() * alpha) + 2;
    }
    // assign to number and display it
    var number = generateNumber(100);
    console.log('computer picked ' + number);
    $('#random-number').text(number);

    // Create an array for the crystal values and a for loop that iterates through 4 random values and assigns them to crystalArray
    var crystalArray = [];
    for (var i = 0; i < 4; i++) {
        crystalArray.push(generateNumber(10))
    }
    console.log('values are ' + crystalArray);
    // Each Crystal gets assigned a value
    // create a variable gets the actual value

    var redNumber = crystalArray[0];
    $('#img1').val(redNumber);

    var blueNumber = crystalArray[1];
    $('#img2').val(blueNumber);

    var purpleNumber = crystalArray[2];
    $('#img3').val(purpleNumber);

    var greenNumber = crystalArray[3];
    $('#img4').val(greenNumber);

    //console test
    console.log('red is ' + redNumber);
    console.log('blue is ' + blueNumber);
    console.log('purple is ' + purpleNumber);
    console.log('green is ' + greenNumber);



    // Function on click
    $('.crystal').on('click', function () {
        score += parseInt($(this).val());

        // Display result score

        $('#score').text(score);
    });

});


// results panel displays total score
