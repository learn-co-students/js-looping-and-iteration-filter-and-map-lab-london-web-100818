// Code your solution here:
function driversWithRevenueOver(array, revenue) {
    return array.filter(element => element.revenue > revenue)
}

function driverNamesWithRevenueOver(array, revenue){
    return driversWithRevenueOver(array, revenue)
        .map(element => element.name)
}

function exactMatch(array, object) {
    const key = Object.keys(object)
    return array.filter(element => element[key] === object[key] )
}  

function exactMatchToList(array, object) {
    return exactMatch(array, object)
        .map(e => e.name)
}

