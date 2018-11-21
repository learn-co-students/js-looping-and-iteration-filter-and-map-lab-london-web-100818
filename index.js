// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
};

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(driver => driver.name);
};

function exactMatch(drivers, criteria) {
  const key = Object.keys(criteria);
  return drivers.filter(driver => driver[key] === criteria[key]);
};

function exactMatchToList(drivers, criteria) {
    return exactMatch(drivers, criteria)
      .map(driver => driver.name);
};