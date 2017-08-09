console.log ("hello world!")

// IGNORE! miscellaneous
//$ (document).ready(function() {
//     ("#jadeButton").on("click", function(){
//       alert: ("clickin");
//     })
// })


//BEGIN JQUERY!
$(document).ready(function() {

//A. Generate a random number between 18-120
    var random = Math.floor(Math.random() * 101 + 19);
      console.log(random);
    $('randomNumber').text(random);
      alert:(random);

//B.  Generate a random number for each gem between 1-12.
  var jadeNumb = Math.floor(Math.random()*11+1)
    console.log (jadeNumb)
  var rubyNumb = Math.floor(Math.random()*11+1)
    console.log (rubyNumb)
  var amberNumb = Math.floor(Math.random()*11+1)
    console.log (amberNumb)
  var sapphireNumb = Math.floor(Math.random()*11+1)
    console.log (sapphireNumb)

//C.  Score Board
  var userTotal = 0;
  var wins = 0;
  var losses = 0;
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

//D.  Reset the game.
  function reset (){
    random = Math.floor(Math.random() * 101 + 19);
    $('randomNumber').text(random);
    var jadeNumb = Math.floor(Math.random()*11+1)
    var rubyNumb = Math.floor(Math.random()*11+1)
    var amberNumb = Math.floor(Math.random()*11+1)
    var sapphireNumb = Math.floor(Math.random()*11+1)
    userTotal= 0;
    $('#playerTotal').text(userTotal);
  }

//E.  Update Score Board
  function winning (){
    wins++;
    $('#numberWins').text(wins);
    reset ();
  }
  function losing (){
    losses++;
    $('#numberLosses').text(losses);
    reset ();
  }

//F.  OnCLICK event on the gems
//(i.) JADE Button
$("#jadeButton").on("click", function(){
  console.log ("it's a click!");
  userTotal = userTotal + jadeNumb;
  console.log ("New userTotal= " + userTotal);
  $("#playerTotal").text(userTotal);
    if (userTotal === random){
      winning ();
    }
    else if (userTotal > random){
      losing ();
    }
})
//(ii.) RUBY Button
$("#rubyButton").on("click", function(){
  console.log ("it's a click!");
  userTotal = userTotal + rubyNumb;
  console.log ("New userTotal= " + userTotal);
  $("#playerTotal").text(userTotal);
    if (userTotal === random){
      winning ();
    }
    else if (userTotal > random){
      losing ();
    }
})

//(iii.) AMBER Button
$("#amberButton").on("click", function(){
  console.log ("it's a click!");
  userTotal = userTotal + amberNumb;
  console.log ("New userTotal= " + userTotal);
  $("#playerTotal").text(userTotal);
    if (userTotal === random){
      winning ();
    }
    else if (userTotal > random){
      losing ();
    }
})

//(iv.) SAPPHIRE Button
$("#sapphireButton").on("click", function(){
  console.log ("it's a click!");
  userTotal = userTotal + sapphireNumb;
  console.log ("New userTotal= " + userTotal);
  $("#playerTotal").text(userTotal);
    if (userTotal === random){
      winning ();
    }
    else if (userTotal > random){
      losing ();
    }
})



})
