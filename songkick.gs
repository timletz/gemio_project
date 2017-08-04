var songkickKey = "REPLACE_ME";

function getEventsFromAddress(address)
{
  var loc = addressToLocation(address);
  var event_data = getEventsFromLatLong(loc.lat, loc.lng);
  return event_data;
}

function getEventsFromLatLong(lat, long)
{
  var requestURL = 'http://api.songkick.com/api/3.0/events.json?location=geo:%f,%f&apikey=%s'.format(lat, long, songkickKey);
  Logger.log(requestURL);
  var event_data = JSON.parse(UrlFetchApp.fetch(requestURL).getContentText());
  return event_data;
}

function dumbTest()
{
  Logger.clear();
  Logger.log(getEventsFromAddress("Dalles"));
}
