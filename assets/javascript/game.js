// Define global variables
// I need a target number variable to display to the page. Setting it to an empty string to be determined within a function that will be called later
var targetNumber = "";
// A counter variable that will contain user guesses
var counter = 0;
// An array that will contain the random values of each crystal
var crystalValues = [9, 6, 2, 5];
// Counters for wins and losses
var wins = 0;
var losses = 0;
// Grabbing the elements I will use to assign values
var red = $("#red-crystal");
var blue = $("#blue-crystal");
var green = $("#green-crystal");
var yellow = $("#yellow-crystal");
// Assigning those elements a class
red.addClass("crystal-image");
blue.addClass("crystal-image");
green.addClass("crystal-image");
yellow.addClass("crystal-image");

// Generate the targetNumber for the user to guess, which will be displayed in the "target-number" div
newTarget = function() {
    targetNumber = Math.floor(Math.random() * 50) + 51;
    $("#target-number").text(targetNumber);
};

// I need a function that loops through the crystalValues array and assigns a random unique value to each crystal
crystalValue = function() {
    for (var c = 0; c < crystalValues.length; c++) {
        red.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
    }
    for (var c = 0; c < crystalValues.length; c++) {
        blue.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
    }
    for (var c = 0; c < crystalValues.length; c++) {
        green.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
    }
    for (var c = 0; c < crystalValues.length; c++) {
        yellow.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
    }
};

// When the document is ready, run the newTarget and crystalValue function and allow the user to start clicking crystals
$(document).ready(function() {
    newTarget();
    crystalValue();
});
    

// Create an on-click function that cumulatively adds the value of any crystal clicked to the "score" div
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#score").text(counter);
    
    // Show alerts that let you know wether you win or lose
    if (counter === targetNumber) {
        alert("Winner, winner, chicken dinner!");
        // Add wins and losses to their appropriate divs
        wins++;
        $("#wins").text(wins);
        // Ask the user if they want to start a new game
        confirm("New game?");
        // If user clicks "OK", a new targetNumber is generated...
        if (confirm) {
            $("#target-number").text(targetNumber);
            // Score is set to 0...
            counter = 0;
            // And crystals obtain new values
            for (var c = 0; c < crystalValues.length; c++) {
                red.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
            }
            for (var c = 0; c < crystalValues.length; c++) {
                blue.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
            }
            for (var c = 0; c < crystalValues.length; c++) {
                green.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
            }
            for (var c = 0; c < crystalValues.length; c++) {
                yellow.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
            }
            // If user clicks "Cancel"...
            
            // Create a stop function that renders all clicks and functions useless
        }
    }
    else if (counter >= targetNumber) {
        alert("Lehoo... zeherrrr.");
        losses++;
        $("#losses").text(losses);
        confirm("New game?");
        if (confirm) {
            $("#target-number").text(targetNumber);
            // Score is set to 0...
            counter = 0;
            // And crystals obtain new values
            for (var c = 0; c < crystalValues.length; c++) {
                red.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
            }
            for (var c = 0; c < crystalValues.length; c++) {
                blue.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
            }
            for (var c = 0; c < crystalValues.length; c++) {
                green.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
            }
            for (var c = 0; c < crystalValues.length; c++) {
                yellow.attr("data-crystalValue", crystalValues[Math.floor(Math.random() * crystalValues.length)]);
            }
        }
    }
});