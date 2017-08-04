// I'm not sure at which point I should just dump it all in a "misc.gs" file
// The lack of a directory structure is pretty not great

function songkickDateString(date)
{
  return "%04d-%02d-%02d".format(date.getFullYear(), date.getMonth(), date.getDate());
}
