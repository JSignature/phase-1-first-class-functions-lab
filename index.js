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

function createFareMultiplier(int) {
    return function secondFunction (fare) { 
        fare * int

    }

}

