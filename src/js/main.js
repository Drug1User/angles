function parseAngleString(angleString) {
  var result = angleString.match(/(\d+) (\d+) ((?:\d+\.\d+)|(?:\d+))/);
  if (!result) {
    return null;
  } else {
    var degrees = parseInt(result[1]);
    var minutes = parseInt(result[2]);
    var seconds = parseFloat(result[3]);
    var angle = [degrees, minutes, seconds];
    return angle;
  }
}


function angleToSeconds(degrees, minutes, seconds) {
  return 60 * 60 * degrees + 60 * minutes + seconds;
}


function secondsToAngle(seconds) {
  var degrees = parseInt(seconds / 3600);
  var minutes = parseInt((seconds - degrees * 3600) / 60);
  seconds = parseFloat(seconds - degrees * 3600 - minutes * 60);
  var angle = [degrees, minutes, seconds];
  return angle;
}


document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Page loaded!");
});
