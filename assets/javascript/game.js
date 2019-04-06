// Define global variables.
var targetNumber = Math.round(Math.random() * 50) + 50;
var counter = 0;
var crystalValues = [9, 6, 2, 5];
var wins = 1;
var losses = 1;

// Generate the targetNumber for the user to guess, which will be displayed in the "target-number" div.
$("#target-number").text(targetNumber);
    
// I need a for loop that will assign a random number from the array above to each crystal. ASK ABOUT THIS!!!!!!!!!!!!!!!!!!!!!!
for (var c = 0; c < crystalValues.length; c++) {
    var red = $("#red-crystal");
    red.addClass("crystal-image");
    red.attr("data-crystalValue", crystalValues[c]);
}
for (var c = 0; c < crystalValues.length; c++) {
    var blue = $("#blue-crystal");
    blue.addClass("crystal-image");
    blue.attr("data-crystalValue", crystalValues[c]);
}
for (var c = 0; c < crystalValues.length; c++) {
    var green = $("#green-crystal");
    green.addClass("crystal-image");
    green.attr("data-crystalValue", crystalValues[c]);
}
for (var c = 0; c < crystalValues.length; c++) {
    var yellow = $("#yellow-crystal");
    yellow.addClass("crystal-image");
    yellow.attr("data-crystalValue", crystalValues[c]);
}

// Create an on-click function that cumulatively adds the value of any crystal clicked to the "score" div.
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#score").text(counter);
    
    // Show alerts that let you know wether you win or lose.
    if (counter === targetNumber) {
        alert("Winner, winner, chicken dinner!");
        // Add wins and losses to their appropriate divs.
        $("#wins").text(wins++);
        // Ask the user if they want to start a new game.
        confirm("New game?");
        // If user clicks "OK", a new number is generated... 
        

        // Score is set to 0...

        
        // And crystals obtain new values.

    }
    else if (counter >= targetNumber) {
        alert("Lehoo... zeherrrr.");
        $("#losses").text(losses++);
        confirm("New game?");
    }
    
    // Create a stop function that renders all clicks and functions useless.
});