var globalTemplate;

function doGet(e) {
  Logger.clear();
  globalTemplate = HtmlService.createTemplateFromFile('index');
  return globalTemplate.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function initMap()
{
  return handleLocation("3836 165th PL SE, Bellevue WA");
}

// In retrospect the majority of all the code is just ferrying data between REST apis and the client

function handleLocation(address)
{
  var return_data = {};
  return_data.location = addressToLocation(address);
  
  return return_data;
}

function handleWeather(lat, lng)
{
  var return_data = {};
  
  return_data.weather = getDarkSkyRequest(lat, lng);
    
  return return_data;
}

function handleEvents(lat, lng)
{
  var return_data = {};

  return_data.events = getEventsFromLatLong(lat, lng).resultsPage.results.event;
  
  return return_data;
}
