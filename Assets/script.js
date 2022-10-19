var timeDisplayEl = $('#currentDay');
var nineAM = $('#9am');
var tenAM = $('#10am');
var elevenAM = $('#11am');
var twelvePM = $('#12pm');
var onePM = $('#1pm');
var twoPM = $('#2pm');
var threePM = $('#3pm');
var fourPM = $('#4pm');
var fivePM = $('#5pm');


// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
} 
  // check the time badge and set the bar colors
function renderBars() {
  var currentHour = moment().format('k') 
  // var badgeHour = ($("div#badge").text().trim());

// scripts for each of the time blocks
    if (9<currentHour) {
          nineAM.removeClass('present').removeClass('future').addClass('past');
      } else if (9==currentHour) {
          nineAM.removeClass('future').removeClass('past').addClass('present');
      } else if (9>currentHour) {
          nineAM.removeClass('past').removeClass('present').addClass('future');
      }

    if (10<currentHour) {
          tenAM.removeClass('present').removeClass('future').addClass('past');
      } else if (10==currentHour) {
          tenAM.removeClass('future').removeClass('past').addClass('present');
      } else if (10>currentHour) {
          tenAM.removeClass('past').removeClass('present').addClass('future');
      }
      
    if (11<currentHour) {
          elevenAM.removeClass('present').removeClass('future').addClass('past');
      } else if (11==currentHour) {
          elevenAM.removeClass('future').removeClass('past').addClass('present');
      } else if (11>currentHour) {
          elevenAM.removeClass('past').removeClass('present').addClass('future');
      }

    if (12<currentHour) {
          twelvePM.removeClass('present').removeClass('future').addClass('past');
      } else if (12==currentHour) {
          twelvePM.removeClass('future').removeClass('past').addClass('present');
      } else if (12>currentHour) {
          twelvePM.removeClass('past').removeClass('present').addClass('future');
      }

    if (13<currentHour) {
            onePM.removeClass('present').removeClass('future').addClass('past');
        } else if (13==currentHour) {
            onePM.removeClass('future').removeClass('past').addClass('present');
        } else if (13>currentHour) {
            onePM.removeClass('past').removeClass('present').addClass('future');
        }

    if (14<currentHour) {
            twoPM.removeClass('present').removeClass('future').addClass('past');
        } else if (14==currentHour) {
            twoPM.removeClass('future').removeClass('past').addClass('present');
        } else if (14>currentHour) {
            twoPM.removeClass('past').removeClass('present').addClass('future');
        }

    if (15<currentHour) {
            threePM.removeClass('present').removeClass('future').addClass('past');
        } else if (15==currentHour) {
            threePM.removeClass('future').removeClass('past').addClass('present');
        } else if (15>currentHour) {
            threePM.removeClass('past').removeClass('present').addClass('future');
        }

    if (16<currentHour) {
            fourPM.removeClass('present').removeClass('future').addClass('past');
        } else if (16==currentHour) {
            fourPM.removeClass('future').removeClass('past').addClass('present');
        } else if (16>currentHour) {
            fourPM.removeClass('past').removeClass('present').addClass('future');
        }

    if (17<currentHour) {
            fivePM.removeClass('present').removeClass('future').addClass('past');
        } else if (17==currentHour) {
            fivePM.removeClass('future').removeClass('past').addClass('present');
        } else if (17>currentHour) {
            fivePM.removeClass('past').removeClass('present').addClass('future');
        }
}   

// functionality of save buttons
$('.9amSave').click(function() {
    localStorage.setItem("9am", (document.getElementById('9am').value));
});
$('.10amSave').click(function() {
    localStorage.setItem("10am", (document.getElementById('10am').value));
});
$('.11amSave').click(function() {
    localStorage.setItem("11am", (document.getElementById('11am').value));
});
$('.12pmSave').click(function() {
    localStorage.setItem("12pm", (document.getElementById('12pm').value));
});
$('.1pmSave').click(function() {
    localStorage.setItem("1pm", (document.getElementById('1pm').value));
});
$('.2pmSave').click(function() {
    localStorage.setItem("2pm", (document.getElementById('2pm').value));
});
$('.3pmSave').click(function() {
    localStorage.setItem("3pm", (document.getElementById('3pm').value));
});
$('.4pmSave').click(function() {
    localStorage.setItem("4pm", (document.getElementById('4pm').value));
});
$('.5pmSave').click(function() {
    localStorage.setItem("5pm", (document.getElementById('5pm').value));
});

// get saved items from local storage on page load
window.onload = () => {
    load();
}
function load() {
    document.getElementById('9am').value = localStorage.getItem('9am');
    document.getElementById('10am').value = localStorage.getItem('10am');
    document.getElementById('11am').value = localStorage.getItem('11am');
    document.getElementById('12pm').value = localStorage.getItem('12pm');
    document.getElementById('1pm').value = localStorage.getItem('1pm');
    document.getElementById('2pm').value = localStorage.getItem('2pm');
    document.getElementById('3pm').value = localStorage.getItem('3pm');
    document.getElementById('4pm').value = localStorage.getItem('4pm');
    document.getElementById('5pm').value = localStorage.getItem('5pm');

}
// timers
   setInterval(displayTime, 1000);
   setInterval(renderBars, 1000);