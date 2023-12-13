// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
    const len = drivers.length;
    return drivers.slice(len-2, len);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier (integer){
    return function(fare){
        return fare * integer;
    }
}
const fareDoubler = createFareMultiplier(2);

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareTripler = createFareMultiplier(3)
function createFareMultiplier(multiplier){
    return function (fare){
        return fare * multiplier;
    }
}

function returnFirstTwoDriver(drivers){
    return drivers.slice(0,2);
  }
function returnLastTwoDriver(drivers){
    return drivers.slice(-2);
  }
function selectDifferentDrivers(drivers, myfunc){
    return myfunc(drivers);
  }