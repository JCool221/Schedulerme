var timeDisplayEl = $('#currentDay');
var nineAM = $('#morning');

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
  // check the time badge and do function
  console.log(moment().format('k'));
    if (moment().format('k') == 16) {
      console.log('yay');
    } else {
      console.log('boo');
    }
}

// change the Highlight of the schedule bar to the current hour
function Now () {
  nineAM.removeClass('future ').addClass('present');
}

// change the Highlight of the schedule bar to a past hour
function past () {
  nineAM.removeClass('present').addClass('past');
}

// change the Highlight of the schedule bar to a future hour
function future () {
  nineAM.removeClass('past').addClass('future');
}

function currentHour () {
  console.log(hourHolderEl);
}
var hourNow = $('#hourHolder').text();
  // timer
    setInterval(displayTime, 1000);
