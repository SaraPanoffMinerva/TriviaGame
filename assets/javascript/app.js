$(document).ready(function() {
});

//create timer countdown to begin when page is loaded
//randomly have questions populate in the p id "question" div
//create an array for the questions
//create array of corresponding answers to questions
//create a timed out alert
//calculate and write number of correct and number of wrong questions


//$("#quiz")

var questions =[
    {question:"Which Catholic Church holiday is Halloween linked to?",
    answer:"All Saints (Hallows) Day",
    allAnswers:["Feast of St. Michael's", "Channuka","Duali","All Saints (Hallows) Day"]
},{
    question:"What was the name of Dracula’s sidekick?",
    answer:"Renfield",
    allAnswers:["Tangina", "Quint", "Norma Bates", "Renfield"]
},{
    question:"Who was the first actor to play Wolf Man?",
    answer:"Lon Chaney",
    allAnswers:["Bela Lugosi","Lon Chaney","Brad Pitt", "Vincent Price"]
},{
    question:"Out of which vegetable were Jack O’ Lanterns originally made?",
    answer:"Turnips",
    allAnswers:["Turnips","Pumpkins","Beets","Acorn Squash"]
}
]

for( var i =0; i < questions.length; i++){
$("#question").append("<h4>"+questions[i].question+"<h4>");
for( var j =0; j < questions[1].allAnswers.length; j++){
    $("#question").append("<button class=button>"+questions[i].allAnswers[j]+"</button>" )
}
    //for( var j =0; j < questions[i].allAnswers.length; j++){
      //  console.log(questions.allAnswers[1])
   // }
    //console.log(questions.allAnswers[i])
}

//(document)onclick("button"){
   // var whichButton$("")
//}
var count = 30
timer = setInterval(function() {
    $("#timer").html(count--);
    if(count == 0) {
        setInterval(timesUp)
        clearInterval(timesUp)
        };
}, 1000);

//var timesUp = setInterval(function(){alert("time up")}, 1000)

var timesUp = function ()
{ alert("times up")}


//-------------------------------------------------------


//$("#question").html("In which country did Halloween originate?");

$("btn0").on("click", function (){
});
$("btn1").on("click", function (){
});
$("btn2").on("click", function (){
});
$("btn3").on("click", function (){
});


function buildQuiz(){
}

function
    showResults(){}

buildQuiz();

//$("#timer").startTimer({
    //onComplete: function(element){
      //element.addClass('is-complete');
  //  },
   // loop: true,
 //   loopInterval: 3,
 // });