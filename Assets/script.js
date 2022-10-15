var timeDisplayEl = $('#currentDay');
var nineAM = $('#morning');
// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
  // check the time badge and do function

  var currentHour = moment().format('k') 
  var badgeHour = ($("div#badge").text().trim());
  switch (true) {
      case ( currentHour < badgeHour):
        future();
        console.log('futurecase');
        break;
      case ( currentHour == badgeHour):
        present();
        console.log('presentcase');
        break;
      case ( currentHour > badgeHour):
        past();
        console.log('pastcase');
        break;
      
    }
}
// change the Highlight of the schedule bar to the current hour
function present () {
  nineAM.removeClass('future').removeClass('past').addClass('present');
  console.log('present');
}

// change the Highlight of the schedule bar to a past hour
function past () {
  nineAM.removeClass('present').removeClass('future').addClass('past');
  console.log('past');

}

// change the Highlight of the schedule bar to a future hour
function future () {
  nineAM.removeClass('past').removeClass('present').addClass('future');
  console.log('future');

}

  // timer
    setInterval(displayTime, 1000);
