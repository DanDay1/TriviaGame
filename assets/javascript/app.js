$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    var questionsLeft = 8;
    var clock;


    var second = 30;


    // $('#clock').html(clock);
    // }




    // $("#game").hide();
    $("#questionOne").hide();
    $("#questionTwo").hide();
    $("#questionThree").hide();
    $("#questionFour").hide();
    $("#questionFive").hide();
    $("#questionSix").hide();
    $("#questionSeven").hide();
    $("#questionEight").hide();

    $("#end").hide();
    $("#rightAnswer").hide();
    $("#q1wrongAnswer").hide();
    $("#q1rightAnswer").hide();
    $("#q2wrongAnswer").hide();
    $("#q2rightAnswer").hide();
    $("#q3wrongAnswer").hide();
    $("#q3rightAnswer").hide();
    $("#q4wrongAnswer").hide();
    $("#q4rightAnswer").hide();
    $("#q5wrongAnswer").hide();
    $("#q5rightAnswer").hide();
    $("#q6wrongAnswer").hide();
    $("#q6rightAnswer").hide();
    $("#q7wrongAnswer").hide();
    $("#q7rightAnswer").hide();
    $("#q8wrongAnswer").hide();
    $("#q8rightAnswer").hide();
    // $("#clockCount").hide().


    var timer = function() {
        if (second > 0) {
            second--;
        }
        console.log(second);
        $("#countdown").html(second);

        if (second === 0) {
            $("#questionTwo").hide();
            $("#end").show();

        }
    }


    var scoreboard = function() {
    	console.log("scoreboard");




        //  setClock(clock.count, 1000);
        // clock--;

        var html = "<h2>The Greatest Quiz on Earth!</h2>" +
            "<p>correct: " + correct + "</p>" +
            "<p>incorrect: " + incorrect + "</p>" +
            "<p>questions left: " + questionsLeft + "</p>";


        $("#game").html(html);

    }

    var badGuess = function() {
        console.log("wrong");
        incorrect = incorrect + 1;
        console.log(incorrect);
        questionsLeft = questionsLeft - 1;
        scoreboard();
        clearInterval(clock);
        // second = 30;
        // clock = setInterval(timer, 1000);

    }

    var goodGuess = function() {
        console.log("right");
        correct = correct + 1;
        console.log(correct);
        questionsLeft = questionsLeft - 1;
        scoreboard();
        clearInterval(clock);
        // second = 30;
        // clock = setInterval(timer, 1000);

    }

    var resetClock = function() {
    	console.log("reset clock");
    	second = 30;
    	clearInterval(clock);
        clock = setInterval(timer, 1000);
    }


    $("#start").click(function() {
    	console.log("start");
        $("#preGame").hide();
        // $("#game").show();
        $("#questionOne").show();
        // $("#clockCount").show();
        console.log("test");
        // clearInterval(clock);
        // clock = setInterval(timer, 1000);
        resetClock();
        scoreboard();

        // decrement();

    });

    $(".q1wrong").click(function() {
        badGuess();
        $("#q1wrongAnswer").show();
        $("#questionOne").hide();
    });
    $(".q1right").click(function() {
        goodGuess();
        $("#q1rightAnswer").show();
        $("#questionOne").hide();
    });
    $(".toq2").click(function() {
        $("#q1rightAnswer").hide();
        $("#q1wrongAnswer").hide();
        $("#questionTwo").show();
        resetClock();
    });


    $(".q2wrong").click(function() {
        badGuess();
        $("#q2wrongAnswer").show();
        $("#questionTwo").hide();
    });
    $(".q2right").click(function() {
        goodGuess();
        $("#q2rightAnswer").show();
        $("#questionTwo").hide();
    });
    $(".toq3").click(function() {
        $("#q2rightAnswer").hide();
        $("#q2wrongAnswer").hide();
        $("#questionThree").show();
        resetClock();
    });

$(".q3wrong").click(function() {
        badGuess();
        $("#q3wrongAnswer").show();
        $("#questionThree").hide();
    });
    $(".q3right").click(function() {
        goodGuess();
        $("#q3rightAnswer").show();
        $("#questionThree").hide();
    });
    $(".toq4").click(function() {
        $("#q3rightAnswer").hide();
        $("#q3wrongAnswer").hide();
        $("#questionFour").show();
        resetClock();
    });

    $(".q4wrong").click(function() {
        badGuess();
        $("#q4wrongAnswer").show();
        $("#questionFour").hide();
    });
    $(".q4right").click(function() {
        goodGuess();
        $("#q4rightAnswer").show();
        $("#questionFour").hide();
    });
    $(".toq5").click(function() {
        $("#q4rightAnswer").hide();
        $("#q4wrongAnswer").hide();
        $("#questionFive").show();
        resetClock();
    });
    $(".q5wrong").click(function() {
        badGuess();
        $("#q5wrongAnswer").show();
        $("#questionFive").hide();
    });
    $(".q5right").click(function() {
        goodGuess();
        $("#q5rightAnswer").show();
        $("#questionFive").hide();
    });
    $(".toq6").click(function() {
        $("#q5rightAnswer").hide();
        $("#q5wrongAnswer").hide();
        $("#questionSix").show();
        resetClock();
    });

    $(".q6wrong").click(function() {
        badGuess();
        $("#q6wrongAnswer").show();
        $("#questionSix").hide();
    });
    $(".q6right").click(function() {
        goodGuess();
        $("#q6rightAnswer").show();
        $("#questionSix").hide();
    });
    $(".toq7").click(function() {
        $("#q6rightAnswer").hide();
        $("#q6wrongAnswer").hide();
        $("#questionSeven").show();
        resetClock();
    });

    $(".q7wrong").click(function() {
        badGuess();
        $("#q7wrongAnswer").show();
        $("#questionSeven").hide();
    });
    $(".q7right").click(function() {
        goodGuess();
        $("#q7rightAnswer").show();
        $("#questionSeven").hide();
    });
    $(".toq8").click(function() {
        $("#q7rightAnswer").hide();
        $("#q7wrongAnswer").hide();
        $("#questionEight").show();
        resetClock();
    });

    $(".q8wrong").click(function() {
        badGuess();
        $("#q8wrongAnswer").show();
        $("#questionEight").hide();
    });
    $(".q8right").click(function() {
        goodGuess();
        $("#q8rightAnswer").show();
        $("#questionEight").hide();
    });
    $("toEnd").click(function() {
        $("#q8rightAnswer").hide();
        $("#q8wrongAnswer").hide();
        $("#end").show();
        resetClock();
    });




});