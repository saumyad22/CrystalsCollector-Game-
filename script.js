$(document).ready(function() {
var wins = 0;
var losses = 0;
var userScore = 0;
var randomNum;
var num1,num2,num3,num4;


 
 

$("#total").text(userScore);
reset();

function reset(){
  
  randomNum = Math.floor(Math.random()*101+19);
  $("#numdisplay").html(randomNum);
  console.log(randomNum);


num1 = Math.floor(Math.random()*11+1);
num2 = Math.floor(Math.random()*11+1);
 num3 = Math.floor(Math.random()*11+1);
 num4 = Math.floor(Math.random()*11+1);
console.log(num1, num2, num3, num4);
 

  	
  	userScore = 0;
$("#total").text(userScore);
}




$("#one").on("click", function(){
      

	 userScore = userScore + num1;

	  $("#total").text(userScore);

    if(userScore == randomNum){

    	wins++;
    	$("#win").html(wins);

     $("#total").text(userScore);
     reset();
     
    }


    else if(userScore > randomNum){
    	losses++;

    	$("#lose").html(losses);

     $("#total").text(userScore);
      
       reset();

    }

 console.log(userScore);

});

$("#two").on("click", function(){
   

   userScore = userScore + num2;

	  $("#total").text(userScore);

    if(userScore == randomNum){

    	wins++;
    	$("#win").html(wins);

     $("#total").text(userScore);

      reset();
    }

    else if(userScore > randomNum){
    	losses++;

    	$("#lose").html(losses);

     $("#total").text(userScore);
       reset();

    }
 console.log(userScore);


});

$("#three").on("click", function(){
   

   userScore = userScore + num3;

	  $("#total").text(userScore);

    if(userScore == randomNum){

    	wins++;
    	$("#win").html(wins);

     $("#total").text(userScore);
      reset();
    }

    else if(userScore > randomNum){
    	losses++;

    	$("#lose").html(losses);

     $("#total").text(userScore);
       reset();

    }
 console.log(userScore);

});

$("#four").on("click", function(){
   

   userScore = userScore + num4;

	  $("#total").text(userScore);

    if(userScore == randomNum){

    	wins++;
    	$("#win").html(wins);

     $("#total").text(userScore);
      reset();
    }

    else if(userScore > randomNum){
    	losses++;

    	$("#lose").html(losses);

     $("#total").text(userScore);
       reset();

    }
 console.log(userScore);

});


});