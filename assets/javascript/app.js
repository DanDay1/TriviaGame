$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    var questionsLeft = 2;
    var clock;


    var second = 30;


    // $('#clock').html(clock);
    // }




    // $("#game").hide();
    $("#questionOne").hide();
    $("#questionTwo").hide();
    $("#end").hide();


    var timer = function() {
        second--;
        console.log(second);
        $("#countdown").html(second);

    // var html = "<p>Time: " + second + "</p>";
    // $("#countdown").html(html);

    }


    var scoreboard = function() {




        //  setClock(clock.count, 1000);
        // clock--;

        var html = "<h2>The Greatest Quiz on Earth!</h2>" +
            "<p>correct: " + correct + "</p>" +
            "<p>incorrect: " + incorrect + "</p>" +
            "<p>questions left: " + questionsLeft + "</p>";
            

        $("#game").html(html);

    }


    $("#start").click(function() {
        $("#preGame").hide();
        // $("#game").show();
        $("#questionOne").show();
        console.log("test");
        clearInterval(clock)
        clock = setInterval(timer, 1000);
        scoreboard();

        // decrement();

    });

    $(".q1wrong").click(function() {
        console.log("wrong");
        incorrect = incorrect + 1;
        console.log(incorrect);
        questionsLeft = questionsLeft - 1;
        scoreboard();
        clearInterval(clock)
        clock = setInterval(timer, 1000);
        $("#questionTwo").show();
        $("#questionOne").hide();
    });
    $(".q1right").click(function() {
        console.log("right");
        correct = correct + 1;
        console.log(correct);
        questionsLeft = questionsLeft - 1;
        scoreboard();
        clearInterval(clock)
        clock = setInterval(timer, 1000);
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

