// A $( document ).ready() block.

$(document).ready(function () {
    var number = 0;
    var score = 0;

    var win = 0;
    var losses = 0;

    var redNumber;
    var blueNumber;
    var purpleNumber;
    var greenNumber;

    var crystalArray = [];

    $('#win').text(win);
    $('#losses').text(losses);


    // function reset to reset the score and pick another number

    function reset() {
        number = 0;
        score = 0;

        $('#img1, #img2, #img3, #img4').empty();
        console.clear();

        console.log('set score to ' + score);
        $('#score').text(score);
        $('#win').text(win);
        $('#losses').text(losses);

        number = generateNumber(120);
        console.log('computer picked ' + number);
        $('#random-number').text(number);

        // Function Generate Random Number where alpha is the multiplication factor
        function generateNumber(alpha) {
            return Math.floor(Math.random() * alpha) + 1;
        }

        // Create an array for the crystal values and a for loop that iterates through 4 random values and assigns them to crystalArray
        // crystalArray = [];
        for (var i = 0; i < 4; i++) {

            crystalArray.unshift(generateNumber(12))
        }
        console.log('values are ' + crystalArray);
        // Each Crystal gets assigned a value
        // create a variable gets the actual value

        redNumber = crystalArray[0];
        $('#img1').val(redNumber);

        blueNumber = crystalArray[1];
        $('#img2').val(blueNumber);

        purpleNumber = crystalArray[2];
        $('#img3').val(purpleNumber);

        greenNumber = crystalArray[3];
        $('#img4').val(greenNumber);

        //console test
        console.log('red is ' + redNumber);
        console.log('blue is ' + blueNumber);
        console.log('purple is ' + purpleNumber);
        console.log('green is ' + greenNumber);
        console.log('score is ' + score);
        console.log('win is ' + win);
        console.log('losses are ' + losses);



        // Function on click

        $('.crystal').on('click', function () {

            score += parseInt($(this).val());
            $('#score').text(score);




            if (score === number) {
                win++;
                reset();
            }
            else if (score > number) {
                losses++;
                reset();
            }
            else { return }

        });






    }
    reset();






});



