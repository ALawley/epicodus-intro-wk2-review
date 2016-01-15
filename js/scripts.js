$(document).ready(function() {
  var pct = 0
  var florence = 0
  var vegas = 0
  var fiji = 0
  var mars = 0

  $(".qpage form").submit(function(event) {
    var goals = $("input.goals").val();
    if (goals === "qgoals1") {
      pct +=2
      fiji +=1
    } else if (goals === "qgoals2") {
      fiji +=2
    } else if (goals === "qgoals3") {
      vegas +=2
    } else if (goals === "qgoals4") {
      pct +=1
      mars +=1
    } else if (goals === "qgoals5") {
      mars +=2
    } else if (goals === "qgoals6") {
      florence +=2
    } else { alert("We're sorry, something went wrong. Please answer the first question.");
    }
    event.preventDefault();
  });
});
