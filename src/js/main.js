var MAX_SECONDS = 1296000;


function stringToAngle(angleString) {
  var result = angleString.match(/(\d+) (\d+) ((?:\d+\.\d+)|(?:\d+))/);
  if (!result) return null;
  return {
    degrees: parseInt(result[1]),
    minutes: parseInt(result[2]),
    seconds: parseFloat(result[3]),
  };
}


function angleToSeconds(angle) {
  return 60 * 60 * angle.degrees + 60 * angle.minutes + angle.seconds;
}


function secondsToAngle(seconds) {
  seconds = (seconds % MAX_SECONDS + MAX_SECONDS) % MAX_SECONDS;
  var degrees = parseInt(seconds / 3600);
  var minutes = parseInt((seconds - degrees * 3600) / 60);
  return {
    degrees: degrees,
    minutes: minutes,
    seconds: parseFloat(seconds - degrees * 3600 - minutes * 60),
  };
}

function angleToString(angle) {
  return angle.degrees + ' ' + angle.minutes + ' ' + angle.seconds.toFixed(2);
}


var HANDLERS = {
  sum(seconds1, seconds2) {
    return seconds1 + seconds2;
  },
  sub(seconds1, seconds2) {
    return seconds1 - seconds2;
  },
};


document.addEventListener("DOMContentLoaded", function(event) {
  var form = document.getElementById("angles-form");
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var data = Object.fromEntries((new FormData(this)).entries());
    var seconds1 = angleToSeconds(stringToAngle(data.angle1));
    var seconds2 = angleToSeconds(stringToAngle(data.angle2));
    var resultSeconds = HANDLERS[data.operation](seconds1, seconds2);
    var result = angleToString(secondsToAngle(resultSeconds));
    var resultEl = document.getElementById("result");
    resultEl.textContent = result;
  });
});
