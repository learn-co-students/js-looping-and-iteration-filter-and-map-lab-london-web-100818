// Code your solution here:

function driversWithRevenueOver(array, number){
    return array.filter(function(element){return element.revenue >= number});
}

function driverNamesWithRevenueOver(array, number){
    const newArray = driversWithRevenueOver(array, number);
    return newArray.map(function(element){return element.name});
}

function exactMatch(array, operation){
    const key = Object.keys(operation);
    return array.filter(function(element){return element[key] === operation[key]})
}

function exactMatchToList(array, operation){
    newArray = exactMatch(array, operation);
    return newArray.map(function(element){return element.name})
}
