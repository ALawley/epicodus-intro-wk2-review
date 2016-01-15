$(document).ready(function() {
  var pct = 0
  var florence = 0
  var vegas = 0
  var fiji = 0
  var mars = 0
  var age = parseInt($("input#age").val());

  $(".qpage form").submit(function(event) {
    // Begin question evaluation code
    // Q1
    alert("start pct = " + pct);
    alert("start florence = " + florence);
    alert("start vegas = " + vegas);
    alert("start fiji = " + fiji);
    alert("start mars = " + mars);
    var goals = $("select#goals").val();
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
    alert("q1 answer = " + goals);
    alert("q1 pct = " + pct);
    alert("q1 florence = " + florence);
    alert("q1 vegas = " + vegas);
    alert("q1 fiji = " + fiji);
    alert("q1 mars = " + mars);
    // Q2
    var spend = $("select#spend").val();
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
    alert("q2 answer = " + spend);
    alert("q2 pct = " + pct);
    alert("q2 florence = " + florence);
    alert("q2 vegas = " + vegas);
    alert("q2 fiji = " + fiji);
    alert("q2 mars = " + mars);
    // Q3
    var drink = $("select#drink").val();
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
    alert("q3 answer = " + drink);
    alert("q3 pct = " + pct);
    alert("q3 florence = " + florence);
    alert("q3 vegas = " + vegas);
    alert("q3 fiji = " + fiji);
    alert("q3 mars = " + mars);
    // Q4
    var unique = $("select#unique").val();
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
    alert("q4 answer = " + unique);
    alert("q4 pct = " + pct);
    alert("q4 florence = " + florence);
    alert("q4 vegas = " + vegas);
    alert("q4 fiji = " + fiji);
    alert("q4 mars = " + mars);
    //Q5
    // if (age < 18) {
    //   $(".minor").show();
    // } else if {
    //   (age <= 35) {
    //     pct +=1
    //     vegas +=1
    //     mars +=1
    //   }
    // } else {
    //   florence +=1
    //   fiji +=1
    // }
    // if (age <21 && age >=18) {
    //   vegas -=4
    // } else {}
    // end question evaluation code
    alert("pct = " + pct);
    alert("florence = " + florence);
    alert("vegas = " + vegas);
    alert("fiji = " + fiji);
    alert("mars = " + mars);

    // begin show results code
    if (florence >= fiji && florence >= vegas && florence >= pct && florence >= mars) {
      $(".qpage").hide();
      $(".results").show();
      $(".florence").show();
    } else if (fiji > florence && fiji >= vegas && fiji >= pct && fiji >= mars) {
      $(".qpage").hide();
      $(".results").show();
      $(".fiji").show();
    } else if (vegas > florence && vegas > fiji && vegas >= pct && vegas >= mars) {
      $(".qpage").hide();
      $(".results").show();
      $(".vegas").show();
    } else if (pct > florence && pct > fiji && pct > vegas && pct >= mars) {
      $(".qpage").hide();
      $(".results").show();
      $(".pct").show();
    } else {
      $(".qpage").hide();
      $(".results").show();
      $(".mars").show();
    }
    // end show results code
    event.preventDefault();
  });
});
