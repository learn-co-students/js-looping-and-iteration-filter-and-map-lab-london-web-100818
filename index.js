// Code your solution here:
function driversWithRevenueOver(drivers, num) {
    return drivers.filter(function (n) {return n.revenue > num})
}

driverNamesWithRevenueOver = (drivers, num) => {
    const names = driversWithRevenueOver(drivers, num)
        .map((driver) => {
       return driver.name
    })
    return names
}

function exactMatch(extendedDrivers, criteria) {
    let key = Object.keys(criteria)[0];
    let value = Object.values(criteria)[0];

    return extendedDrivers.filter(function (n) {return n[key] === value })
}

function exactMatchToList(extendedDrivers, criteria) {
    const names = exactMatch(extendedDrivers, criteria).map((driver) => {
        return driver.name
    }) 
    return names;
}
