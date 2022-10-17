var timeDisplayEl = $('#currentDay');
var nineAM = $('#9am');
var tenAM = $('#10am');
var elevenAM = $('#11am');
var twelvePM = $('#12pm');

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
} 
  // check the time badge and set the bar colors
function renderBars() {
  var currentHour = moment().format('k') 
  // var badgeHour = ($("div#badge").text().trim());
  // console.log(currentHour);

    if (22>currentHour) {
          nineAM.removeClass('present').removeClass('future').addClass('past');
      } else if (22==currentHour) {
          nineAM.removeClass('future').removeClass('past').addClass('present');
      } else if (22>currentHour) {
          nineAM.removeClass('past').removeClass('present').addClass('future');
      }
    if (20>currentHour) {
          tenAM.removeClass('present').removeClass('future').addClass('past');
      } else if (20==currentHour) {
          tenAM.removeClass('future').removeClass('past').addClass('present');
      } else if (20>currentHour) {
          tenAM.removeClass('past').removeClass('present').addClass('future');
      }
    if (21>currentHour) {
          elevenAM.removeClass('present').removeClass('future').addClass('past');
      } else if (21==currentHour) {
          elevenAM.removeClass('future').removeClass('past').addClass('present');
      } else if (21>currentHour) {
          elevenAM.removeClass('past').removeClass('present').addClass('future');
      }
    if (21>currentHour) {
          twelvePM.removeClass('present').removeClass('future').addClass('past');
      } else if (21==currentHour) {
          twelvePM.removeClass('future').removeClass('past').addClass('present');
      } else if (21>currentHour) {
          twelvePM.removeClass('past').removeClass('present').addClass('future');
      }

}   

// timer
   setInterval(displayTime, 1000);
   setInterval(renderBars, 1000);