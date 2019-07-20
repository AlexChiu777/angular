// include the Themeparks library
const Themeparks = require("themeparks");

// configure where SQLite DB sits
// optional - will be created in node working directory if not configured
// Themeparks.Settings.Cache = __dirname + "/themeparks.db";

// access a specific park
//  Create this *ONCE* and re-use this object for the lifetime of your application
//  re-creating this every time you require access is very slow, and will fetch data repeatedly for no purpose
const DisneyWorldMagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
const DisneyWorldEpcot = new Themeparks.Parks.WaltDisneyWorldEpcot();
const DisneyWorldAnimalKingdom = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();
const DisneyWorldHollywoodStudios = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();



// Access wait times by Promise
function GetWaitTimes(park) {
    return new Promise(function(resolve) {
        if (park === 'DisneyWorldMagicKingdom') {
            DisneyWorldMagicKingdom.GetWaitTimes().then((rideTimes) => {
                resolve(rideTimes);
            }).catch((error) => {
                console.error(error);
            });
        } else if (park === 'DisneyWorldEpcot') {
            DisneyWorldEpcot.GetWaitTimes().then((rideTimes) => {
                resolve(rideTimes);
            }).catch((error) => {
                console.error(error);
            });
        } else if (park === 'DisneyWorldAnimalKingdom') {
            DisneyWorldAnimalKingdom.GetWaitTimes().then((rideTimes) => {
                resolve(rideTimes);
                // rideTimes.forEach((ride) => {
                //     console.log(`${ride.name}: ${ride.waitTime} minutes wait (${ride.status})`);
                // });
            }).catch((error) => {
                console.error(error);
            });
        } else if (park === 'DisneyWorldHollywoodStudios') {
            DisneyWorldHollywoodStudios.GetWaitTimes().then((rideTimes) => {
                resolve(rideTimes);
            }).catch((error) => {
                console.error(error);
            });
        }
    });
};  

function GetOpeningTimes(park) {
    return new Promise(function(resolve) {
        if (park === 'DisneyWorldMagicKingdom') {
            DisneyWorldMagicKingdom.GetOpeningTimes().then((parkTimes) => {
                resolve(parkTimes);
            }).catch((error) => {
                console.error(error);
            });
        } else if (park === 'DisneyWorldEpcot') {
            DisneyWorldEpcot.GetOpeningTimes().then((parkTimes) => {
                resolve(parkTimes);
            }).catch((error) => {
                console.error(error);
            });
        } else if (park === 'DisneyWorldAnimalKingdom') {
            DisneyWorldAnimalKingdom.GetOpeningTimes().then((parkTimes) => {
                resolve(parkTimes);
                // rideTimes.forEach((ride) => {
                //     console.log(`${ride.name}: ${ride.waitTime} minutes wait (${ride.status})`);
                // });
            }).catch((error) => {
                console.error(error);
            });
        } else if (park === 'DisneyWorldHollywoodStudios') {
            DisneyWorldHollywoodStudios.GetOpeningTimes().then((parkTimes) => {
                resolve(parkTimes);
            }).catch((error) => {
                console.error(error);
            });
        }
    });
};  

// GetWaitTimes('DisneyWorldHollywoodStudios').then(data=>{
//     console.log(data);
// });

module.exports = {
    getWaitTimes : GetWaitTimes,
    getOpeningTimes: GetOpeningTimes
}


// you can also call GetOpeningTimes on themeparks objects to get park opening hours