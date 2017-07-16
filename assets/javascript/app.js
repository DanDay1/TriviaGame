$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    var questionsLeft = 2;
    var clock = 30;

    
    

 
  // $('#clock').html(clock);
// }



    // $("#game").hide();
    $("#questionOne").hide();
    $("#questionTwo").hide();
    $("#end").hide();

    var scoreboard = function() {

    setClock(clock.count, 1000);
  	clock--;

    // clock = setInterval(thirtySeconds, 1000);

    var html = "<h2>The Greatest Quiz on Earth!</h2>" +
        "<p>correct: " + correct + "</p>" +
        "<p>incorrect: " + incorrect + "</p>" +
        "<p>questions left: " + questionsLeft + "</p>" +
        "<p>clock: " + clock + "</p>";

    $("#game").html(html);

}


    $(".btn").click(function() {
        $("#preGame").hide();
        // $("#game").show();
        $("#questionOne").show();
        console.log("test");

        scoreboard();

        decrement();

        });

        $(".q1wrong").click(function() {
            console.log("wrong");
            incorrect = incorrect + 1;
            console.log(incorrect);
            questionsLeft = questionsLeft - 1;
            scoreboard();
            $("#questionTwo").show();
            $("#questionOne").hide();
        });
        $(".q1right").click(function() {
            console.log("right");
            correct = correct + 1;
            console.log(correct);
            questionsLeft = questionsLeft - 1;
            scoreboard();
            $("#QuestionTwo").show();
            $("#questionOne").hide();
        });
        
        $(".q2wrong").click(function() {
            console.log("wrong");
            incorrect = incorrect + 1;
            console.log(incorrect);
    		questionsLeft = questionsLeft - 1;
            scoreboard();
            $("#end").show();
            $("#questionOne").hide();
            $("#questionTwo").hide();
        });
        $(".q2right").click(function() {
            console.log("right");
            correct = correct + 1;
            console.log(incorrect);
            questionsLeft = questionsLeft - 1;
            scoreboard();
            $("#end").show();
            $("#questionOne").hide();
            $("#questionTwo").hide();

        });

    

});

// $(".btn").on("click", function()

// $('#header').show();
// $('#container').show();
// $('#done').show();
// Initializes timer
//   interval = setInterval(decrement, 1000)

//   function decrement () {
// timer--;
// $('#timer').html(timer);
// if (timer === 0) {
//   clearInterval(interval);
//   $('#container').hide();
//   $('#resultsScreen').show();
//   setTimeout(resetGame, 1000 * 3);
// };

// });


//           var correct = 0;
//           var incorrect = 0;
//           var questionsLeft = 8;
//           var clock = 30;



// setTimeout(thirtySeconds, 1000 * 30);

// function fiveSeconds() {
//     $("#time-left").append("<h2>Times Up</h2>");
//     console.log("10 seconds left");
// }

// scoreBoard function() {

//     if (answer = correct) {
//         correct = correct + 1;

//         trumpet.play();
//         restart();
//     } else if (clock = 0) {
//         incorrect = incorrect + 1;

//         trombone.play();
//         restart();
//     }
// }


// function q1() {

//     var html


// "<h1>The Greatest Quiz on Earth!</h1>" +
// "<h2>What was the name of the Barnum & Bailey Circus’ first elephant?</h2>" +
// "<ul>" +
// "<li><img src='assets/images/elephant.jpe'>Dumbo</li>" +
// "<li>Jumbo</li>" +
// "<li>Fungo</li>" +
// "<li>Hathi</li>" +
// "</ul>";

// <p>"What was the name of the Barnum & Bailey Circus’ first elephant?"</p> ["A: Dumbo", "B: Jumbo", "C: Fungo", "D: Hathi", "B: Jumbo"];

//     $("#game").html(html);

//     console.log("Jumbo")
// }

// var q2 = "What year was Cirque du Soleil founded?" ["A: 1932", "B: 1960", "C: 1973", "D: 1984", "D: 1984"];

// var q3 = "Which American composer was famous for writing circus music?" ["A: Karl L. King", "B: John Philip Sousa", "C: E.E. Bagley", "D: Henry Fillmore"];

// // $(".btn").on("click", function(q1) {
// $(".btn").on("click", function() {
//         q1();

//         $('ul#services l1').click(function() {
//             console.log("answer 1");

//         });

//         $('ul#services l2').click(function() {
//             console.log("answer 2");

//         });
//     });





// var questionArray = ["John Ringling North II, the great nephew of the Ringling Brothers, currently owns which circus:", "Which American composer was famous for writing circus music?" "What was the name of the Ringling Brothers’ first elephant?"];

// var answerArray = ["A: Cirque du Soleil", "B: The Kelly Miller Circus", "C: The Big Apple Circus", "D: Circus Smirkus", "B The Kelly Miller Circus"],["A: Karl L. King", "B: John Philip Sousa", "C: E.E. Bagley", "D: Henry Fillmore", "A: Karl L. King"],["A: Dumbo", "B: Jumbo", "C: Fungo", "D: Hathi", "B: Jumbo"];

// for (i = 0; i < questionArray; i++) { 

//     Questions go here;

//     for (j = 0; j < questionArray; j++) {

//     	Answer goes here