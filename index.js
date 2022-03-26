const returnFirstTwoDrivers = function (params) {
    const drivers = []
    for (let index = 0; index < 2; index++) {
      drivers.push(params[index])
        
    }
    return drivers
}

const returnLastTwoDrivers = function (params) {
    const drivers = []
    const paramsCut = params.slice(-2)
   for (let index = 0; index < 2; index++) {
      drivers.push(paramsCut[index])
       
   }
   return drivers
    
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (int) {
    return function anotherFunction(fare) {
           return int * fare
    }
}

 function fareDoubler(int) {
     return int * 2
 }

 function fareTripler(int) {
    return int * 3
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    
    return returnFirstTwoDrivers(arrayOfDrivers)
}
function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers) {
    
    return returnLastTwoDrivers(arrayOfDrivers)
}

