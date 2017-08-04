var darkSkyKey = "REPLACE_ME";

// Implement firebase caching?

function darkSkyTest()
{
  alert(getDarkSkyRequest(-10.1, 0.7));
}

function getDarkSkyRequest(latitude, longitude) {
  var requestUrl = "https://api.darksky.net/forecast/%s/%f,%f".format(darkSkyKey, latitude, longitude);
  return JSON.parse(UrlFetchApp.fetch(requestUrl).getContentText());
}

function dumbTest()
{
  return getDarkSkyRequest(47.6858, -122.192);
}

function getWeather(latitude, longitude)
{
  return getDarkSkyRequest(latitude, longitude);
}
