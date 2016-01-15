$(document).ready(function() {
  var pct = 0
  var florence = 0
  var vegas = 0
  var fiji = 0
  var mars = 0
  var age = parseInt($("input#age").val());

  // Begin question evaluation code
  // Q1
  $(".qpage form").submit(function(event) {
    var goals = $("input.goals").val();
    if (goals === "goals1") {
      pct +=2
      fiji +=1
    } else if (goals === "goals2") {
      fiji +=2
    } else if (goals === "goals3") {
      vegas +=2
    } else if (goals === "goals4") {
      pct +=1
      mars +=1
    } else if (goals === "goals5") {
      mars +=2
    } else if (goals === "goals6") {
      florence +=2
    } else { alert("We're sorry, something went wrong. Please answer the first question.");
    }
    // Q2
    var spend = $("input.spend").val();
    if (spend === "spend1") {
      pct +=2
      mars -=2
    } else if (spend === "spend2") {
      florence +=2
      vegas +=1
      mars -=1
    } else if (spend === "spend3") {
      fiji +=2
      florence +=1
    } else if (spend === "spend4") {
      mars +=2
      vegas +=1
    } else { alert("We're sorry, something went wrong. Please answer the second question.");
    }
    // Q3
    var drink = $("input.drink").val();
    if (drink === "drink1") {
      florence +=2
    } else if (drink === "drink2") {
      mars +=1
    } else if (drink === "drink3") {
      fiji +=1
    } else if (drink === "drink4") {
      pct +=1
    } else if (drink === "drink5") {
      vegas +=2
    } else { alert("We're sorry, something went wrong. Please refresh and answer the third question.");
    }
    // Q4
    var unique = $("input.unique").val();
    if (unique === "unique1") {
      mars += 2
      pct += 1
    } else if (unique === "unique2") {
      florence +=1
      fiji +=1
    } else if (unique === "unique3") {
      vegas +=1
      mars -=2
    } else { alert("We're sorry, something went wrong. Please refresh and answer the fourth question.");
    }
    //Q5
    if (age < 18) {
      $(".Minor").show();
    } else if {
      (age <= 35) {
        pct +=1
        vegas +=1
        mars +=1
      }
    } else {
      florence +=1
      fiji +=1
    }
    if (age <21 && age >=18) {
      vegas -=4
    }
    event.preventDefault();
  });
});
