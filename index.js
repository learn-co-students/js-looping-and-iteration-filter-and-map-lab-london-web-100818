// Code your solution here:

const driversWithRevenueOver = (driver, revenueCompare) => {

  const driverNameArray = driver.filter(driver => driver.revenue > revenueCompare)

  driverNameArray.map(x => x.name)

  return driverNameArray;

}


const driverNamesWithRevenueOver = (driver, revenueCompare ) => {

    let newDriver = [];

      for (let i of driver){
        if (i.revenue > revenueCompare){
            newDriver.push(i.name)
        }
      }
      return newDriver;
}


const exactMatch = (driver, compare) => {

  const driverArray = driver.filter(driver => driver.name === compare.name || driver.revenue === compare.revenue);

  return driverArray;

}

const exactMatchToList = (driver, compare) => {
    let r = []
    const driverArray = driver.filter(driver => driver.name === compare.name || driver.revenue === compare.revenue);

      for (let i of driverArray){
          r.push(i.name);
      }
      return r;
}
