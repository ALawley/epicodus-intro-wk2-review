$(document).ready(function() {
  var pct = 0
  var florence = 0
  var vegas = 0
  var fiji = 0
  var mars = 0

  $(".qpage form").submit(function(event) {
    // Begin question evaluation code

    // Q1
    var goals = $('input:radio[name="goalsradio"]:checked').val();
    if (goals === "goals1") {
      pct +=2
      fiji +=1
    } else if (goals === "goals2") {
      fiji +=2
    } else if (goals === "goals3") {
      vegas +=2
      pct -=1
      mars -=1
    } else if (goals === "goals4") {
      pct +=1
      mars +=1
    } else if (goals === "goals5") {
      mars +=2
    } else if (goals === "goals6") {
      florence +=2
    } else {
      alert("We're sorry, something went wrong. Please answer the first question.");
      return;
    }
    // Q2
    var spend = $('input:radio[name="spendradio"]:checked').val();
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
    } else {
      alert("We're sorry, something went wrong. Please answer the second question.");
      return;
    }
    // Q3
    var drink = $('input:radio[name="drinkradio"]:checked').val();
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
    } else {
      alert("We're sorry, something went wrong. Please answer the third question.");
      return;
    }
    // Q4
    var unique = $('input:radio[name="uniqueradio"]:checked').val();
    if (unique === "unique1") {
      mars += 2
      pct += 1
    } else if (unique === "unique2") {
      florence +=1
      fiji +=1
    } else if (unique === "unique3") {
      vegas +=1
      mars -=2
    } else {
      alert("We're sorry, something went wrong. Please answer the fourth question.");
      return;
    }
    // Q5
    var age = parseInt($("input#age").val());
    if (isNaN(age)) {
      alert("We're sorry, something went wrong. Please input your age");
      return;
    }
    if (age <= 35) {
        pct +=1
        vegas +=1
        mars +=1
    } else if (age > 35) {
      florence +=1
      fiji +=1
    } else {}

    if (age <21 && age >=18) {
      vegas -=4
    } else {}

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
    } else if (mars > florence && mars > fiji && mars > vegas && mars > pct){
      $(".qpage").hide();
      $(".results").show();
      $(".mars").show();
    } else {
      $(".qpage").hide();
      $(".results").show();
      $(".minor").show();
    }
    // makes sure minors won't get other results
    if (age < 18) {
      $(".qpage").hide();
      $(".results").show();
      $(".florence").hide();
      $(".fiji").hide();
      $(".vegas").hide();
      $(".pct").hide();
      $(".mars").hide();
      $(".minor").show();
    }
    // end show results code
    event.preventDefault();
  });
  $("button.return").click(function(event) {
    $(".results").hide();
    $(".florence").hide();
    $(".fiji").hide();
    $(".vegas").hide();
    $(".pct").hide();
    $(".mars").hide();
    $(".minor").hide();
    $(".qpage").show();

    event.preventDefault();
  });
});
