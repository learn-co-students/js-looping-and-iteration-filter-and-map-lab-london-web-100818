function driversWithRevenueOver(arr, rev) {
    for (const driver of arr) {
  return arr.filter(driver => driver.revenue > rev);
    }
    
}

function driverNamesWithRevenueOver(arr, rev) {
    arr2 = driversWithRevenueOver(arr, rev)
   return  arr2.map(driver => driver.name)
}

function exactMatch(arr, obj) {
 return arr.filter(driver => driver[Object.keys(obj)[0]] === Object.values(obj)[0])
}

function exactMatchToList(arr, obj) {

arr2 = exactMatch(arr, obj)
return arr2.map(driver => driver.name)

}