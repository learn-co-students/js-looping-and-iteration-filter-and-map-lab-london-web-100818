function driversWithRevenueOver(drivers,value) {
  return drivers.filter(function(driver) { return driver.revenue> value;})
}
function driverNamesWithRevenueOver(drivers, value) {
return  drivers.filter(function(driver) { return driver.revenue> value;}).map(x => x.name)
}

function exactMatch(drivers,condition) {
  return drivers.filter(function(driver){ return driver[Object.keys(condition)]==Object.values(condition);})

}

function exactMatchToList(drivers,condition) {
  return drivers.filter(function(driver){ return driver[Object.keys(condition)]==Object.values(condition);}).map(x => x.name)

}
