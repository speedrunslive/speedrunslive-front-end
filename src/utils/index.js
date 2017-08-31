export function jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}

export function createPage(html, state) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>SpeedRunsLive</title>
      <link rel="stylesheet" href="/bundle.css" />
    </head>
    <body>
      <div id="root">${html}</div>
      <script>window.__REDUX_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}</script>
      <script src="/bundle.js"></script>
    </body>
  </html>
  `
}

/**
 * Convert HTML entities to characters
 * @param {String} text - string to decode
 */
export function decodeHtmlEntities(text) {
	return text.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
}


export function convertSecondsToTimeString(seconds){
  let time = createTimeObject(seconds);
  let timestring ='';
  let total = 0;
  for (var timespan in time){
    if (total >= 3) break;
    if(isPositiveInt(time[timespan])){
        timestring += time[timespan] + dePluralize(timespan,time[timespan]) + ' ';
        total++;
    }
  }
    return timestring;
}

function createTimeObject(seconds){
  const YEAR = 31536000;  
  const WEEK = 604800;  
  const DAY = 86400;
  const HOUR = 3600;  
  const MINUTE = 60;

  return {
      yrs: Math.floor(seconds / YEAR),
      wks: Math.floor((seconds % YEAR)/ WEEK),
      days: Math.floor(((seconds % YEAR) % WEEK) / DAY),
      hrs: Math.floor((((seconds % YEAR) % WEEK) % DAY) / HOUR),
      mins: Math.floor(((((seconds % YEAR) % WEEK) % DAY) % HOUR) / MINUTE),
      secs: ((((seconds % YEAR) % WEEK) % DAY) % HOUR) % MINUTE
  };
}

function isPositiveInt(input){
    return Number.isInteger(input) && input > 0;
}

function dePluralize(text, num){
    if (num <= 1) return text.slice(0,-1);
    return text;
}

export function numberToMonth(monthNum) {
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if (monthNum < 0 || monthNum > months.length) return monthNum;
  return months[--monthNum];
}

export function convertSecondsToRaceTime(seconds) {
  const HOUR = 3600;  
  const MINUTE = 60;

  var hours = Math.floor(seconds / HOUR);
  var minutes = Math.floor((seconds % HOUR) / MINUTE);
  seconds = Math.floor((seconds % HOUR) % MINUTE);

  hours = (hours >= 100) ? hours : hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

/**
 * Add ordinal indicator to a number. Example 1 -> 1st
 * @param {Number} number - number to add ordinal indicator to
 */
export function addOrdinalIndicator(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  if (lastDigit == 1 && lastTwoDigits != 11) { return number + "st"; }
  if (lastDigit == 2 && lastTwoDigits != 12) { return number + "nd"; }
  if (lastDigit == 3 && lastTwoDigits != 13) { return number + "rd"; }
  return number + "th";
}

export function getCssClassForRank(place) {
  var rankColor = '';
  if (place === 3) {rankColor = 'third-place';}
  else if (place === 2) {rankColor = 'second-place';}
  else if (place === 1) {rankColor = 'first-place';}
  else {rankColor = 'loser-place';}
  return rankColor;
}