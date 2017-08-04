// Code to add future compatibility with later versions of Ecmascript

// From Google's site: https://developers.google.com/apps-script/guides/services/#basic_javascript_features
/*
Apps Script is based on JavaScript 1.6, plus a few features from 1.7 and 1.8. 
Many basic JavaScript features are thus available in addition to the built-in 
and advanced Google services: you can use common objects like Array, Date, RegExp, 
and so forth, as well as the Math and Object global objects. 
However, because Apps Script code runs on Google's servers 
(not client-side, except for HTML-service pages), 
browser-based features like DOM manipulation or the Window API are not available
*/

// Array.from
// ES 2015
if(!Array.from)
{
  Array.from = function(object)
  {
    return Array.prototype.slice.call(object);
  };
}
