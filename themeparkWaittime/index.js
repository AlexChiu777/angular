

const dateFormat = require('dateformat');

const disneySchedule = require ('./disneyWorldWaitTimeCaller.js');
const emailClient = require('./emailer.js');


// call to get the individual parks wait time
// disneyWaittime.getWaitTimes('DisneyWorldHollywoodStudios', function(rideTimes) {
    
//     rideTimes.forEach((ride) => {
//                 console.log(`${ride.name}: ${ride.waitTime} minutes wait (${ride.status})`);
//             });
// });

var datetime = new Date();
var dateString = formatDate(datetime);





var dataPromise = Promise.all([disneySchedule.getOpeningTimes('DisneyWorldMagicKingdom')
,disneySchedule.getWaitTimes('DisneyWorldMagicKingdom')
,disneySchedule.getOpeningTimes('DisneyWorldAnimalKingdom'), disneySchedule.getWaitTimes('DisneyWorldAnimalKingdom'), 
disneySchedule.getOpeningTimes('DisneyWorldEpcot'),disneySchedule.getWaitTimes('DisneyWorldEpcot'), 
disneySchedule.getOpeningTimes('DisneyWorldHollywoodStudios'), disneySchedule.getWaitTimes('DisneyWorldHollywoodStudios')
]);

const AutoWaitTimeMailer = () => {
    dataPromise.then(function(dataArray) {
        let emailTableContents = [];
        let openingTimeContent = "";   //park opening times 
        let specialTimeContent = "";   //park closing times
        let parkName = ""; //park name
        let tableContent = "";

        for (var j=0; j < dataArray.length; j++) {
            var data = dataArray[j];
            //opening times will mod 0
            if (j % 2 === 0) {
                
                for (var i=0; i < data.length; i++) {
                    if (dateString === data[i].date) {
                        var parkOpeningTime = Date.parse(data[i].openingTime);
                        var parkClosingTime = Date.parse(data[i].closingTime);
                        openingTimeContent = "<h3>Park Hours - " +  dateFormat(parkOpeningTime, "h:MM:ss TT") + " - " +  dateFormat(parkClosingTime, "h:MM:ss TT") + "</h3>";
                        
                        var specialArray = data[i].special;
                        if (specialArray !== undefined) {
                            data[i].special.forEach(special=> {
                            if (special.type === "Extra Magic Hours") {
                                var specialOpeningTime = Date.parse(special.openingTime);
                                var specialClosingTime = Date.parse(special.closingTime);
                                specialTimeContent = "<h4>" + special.type + " " + dateFormat(specialOpeningTime, "h:MM:ss TT") + "  -  " + dateFormat(specialClosingTime, "h:MM:ss TT") + "</h4>";
                            }
                        });
                        }
                        break;
                    }
                }
            } else {
                //attraction data will be mod 1
                tableContent = "<table style='border:1px solid black;border-collapse: collapse;width:50%'>";
                tableContent = tableContent + "<tr><th style='border: 1px solid black;border-collapse: collapse;'>Attraction Name</th><th style='border: 1px solid black;border-collapse: collapse;'>Wait Times</th><th style='border: 1px solid black;border-collapse: collapse;'>Status</th>"
                data.forEach((ride) => {
                    var str = ride.id;
                    if (str.includes("WaltDisneyWorldHollywoodStudios")) {
                        parkName = "Hollywood Studios";
                    } else if (str.includes("WaltDisneyWorldMagicKingdom")) {
                        parkName = "Magic Kingdom";
                    } else if (str.includes("WaltDisneyWorldAnimalKingdom")) {
                        parkName = "Animal Kingdom";
                    } else if (str.includes("WaltDisneyWorldEpcot")) {
                        parkName = "Epcot";
                    } 
                    
                
                    tableContent = tableContent + "<tr><td style='border: 1px solid black;border-collapse: collapse;'>" + ride.name + "</td>";
                    
                    tableContent = tableContent + "<td style='border: 1px solid black;border-collapse: collapse;'>" + ride.waitTime + "mins </td>";
                    
                    if (ride.status === "Operating") {
                        tableContent = tableContent + "<td style='border: 1px solid black;border-collapse: collapse;background-color:Green;'>" + ride.status + "</td></tr>";   
                    } else {
                        tableContent = tableContent + "<td style='border: 1px solid black;border-collapse: collapse;background-color:Red;'>" + ride.status + "</td></tr>";   
                    }

                    
                });

                tableContent = tableContent + "</table>"

                let titleContent = "<h2>" + parkName + "</h2>";
                let parkHtmlContent =  titleContent + openingTimeContent + specialTimeContent + tableContent ;

                emailTableContents.push(parkHtmlContent);   
            }
        };

        let htmlContent = "<html><body>";

        emailTableContents.forEach(parkContent => {
            htmlContent = htmlContent + parkContent;

        });

        htmlContent = htmlContent + "</body></html>";

        
        emailClient.sendMail('Walt Disney World Attraction WaitTime - ' + dateString, htmlContent);
    }).catch(function(error) {
        console.log(error);
    }).then(() => {
        setTimeout(AutoWaitTimeMailer, 1000 * 60 * 15); // refresh every 15 mins
    })
};

//start
AutoWaitTimeMailer();

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}