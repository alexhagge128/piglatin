var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }
  else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (year < 0) {
      alert("No negative numbers please");
    }
    else if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
      $("#result").show();
    }
    else {
      $(".not").text("");
      $("#result").show();
    }

    event.preventDefault();
  });
});
