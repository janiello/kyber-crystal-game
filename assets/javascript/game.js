
// Define variables.
var targetNumber = Math.round(Math.random() * 50) + 50;
var counter = 0;
var crystalValues = [9, 6, 2, 5]

// Generate the targetNumber for the user to guess, which will be displayed in the "target-number" div.
$("#target-number").text(targetNumber);
    
// I need a for loop that will assign a random number from the array above to each crystal.
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

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#score").text(counter);
});