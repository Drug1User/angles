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