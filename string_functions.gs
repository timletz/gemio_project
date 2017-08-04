// Add a format wrapper as a shorthand
if(!String.prototype.format) {
  String.prototype.format = function() {
    var args = Array.from(arguments); // Convert to true array
    args.unshift(this); // Make the first arg be the string itself
    Logger.log(args);
    return Utilities.formatString.apply(undefined, args);
  };
}


