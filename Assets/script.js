var timeDisplayEl = $('#currentDay');
var nineAM = $('#morning');
// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
  
  // check the time badge and set the bar colors
  var currentHour = moment().format('k') 
  var badgeHour = ($("div#badge").text().trim());
  console.log(currentHour);
    if (badgeHour>currentHour) {
      nineAM.removeClass('present').removeClass('future').addClass('past');
    } else if (badgeHour==currentHour) {
      nineAM.removeClass('future').removeClass('past').addClass('present');
    } else if (badgeHour>currentHour) {
      nineAM.removeClass('past').removeClass('present').addClass('future');
    }
    
}
//   // change the Highlight of the schedule bar to the current hour
//   function present () {
//     present();
//   }
  
//   // change the Highlight of the schedule bar to a past hour
//   function past () {
//     past();
//   }
  
//   // change the Highlight of the schedule bar to a future hour
//   function future () {
//   future();
// }

// timer
   setInterval(displayTime, 1000);
