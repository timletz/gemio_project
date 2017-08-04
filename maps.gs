function addressToLocation(address) {
  var gcoder = Maps.newGeocoder();
  var loc_data = gcoder.geocode(address);
  var chosen_addr;
  if(loc_data.status != "OK")
  {
    throw "Bad Address";
    return;
  }
  // Just pick the first result for now
  chosen_addr = loc_data.results[0];
  return chosen_addr.geometry.location;
}

