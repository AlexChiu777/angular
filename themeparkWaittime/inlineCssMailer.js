/*
 * Use this script to send Istanbul code coverage results via email.
 * 
 * NPM REQUIREMENTS:
 *  The following packages need to be installed:
 *   - npm install styliner
 *   - npm install nodemailer
 *   - npm install nodemailer-smtp-transport
 * 
 * Usage: node sendNodeJSCoverageEmail.js <origfile> <basedir> <receipient>
 * 
 *  <origfile>  : This is the original Istanbul index.html from the code coverage report
 *  <basedir>   : TeamCity directory where the index.html resides. Must contain "DevTC" folder (see below)
 *  <recipient> : Email address to send the results to. 
 * 
 * What it does:
 *  Istanbul creates an html report for code coverage. It is a complete web page, and has an index.html,
 *  some CSS style sheets, and relative links to other coverage.
 *  
 *  This script takes the index.html, reads the referenced .css files, and inlines the css, so that external
 *  files are no longer needed. (this is because you can't send multiple files for an html email).
 *  Also, the relative links are prepended with the UNC path to the files: this means that the recipients 
 *  can click on the links in the html email and they will work. 
 *  
 *  NOTE: it assumes the TeamCity folder where the coverage reports reside is shared, and also contains the 
 *        folder DevTC (it looks for this folder to do the substitution). All build machines have this 
 *        folder structure. 
 *        
 */

var nodemailer = require('nodemailer');
var os = require("os");
var hostname = os.hostname();

var originalFile = process.argv[2].toString();
var baseDir = process.argv[3].toString();
var recipient = process.argv[4].toString();

var Styliner = require('styliner');


var uncDrive = '\\\\' + hostname + '\\DevTC';
var uncPath = baseDir.replace(/.*DevTC/gi, uncDrive);


// prependUNCPath is a function called by Styliner for every
// link that is found in the HTML.
function prependUNCPath(path, type) {
    return uncPath + path;
}

// See http://styliner.slaks.net/#about for Styliner options
var options = { url : prependUNCPath, noCSS : true };
var styliner = new Styliner(baseDir, options);

function sendEmail(source) {

    var nodemailer = require('nodemailer');
    var smtpTransport = require('nodemailer-smtp-transport');

    // create reusable transporter object using SMTP transport
    var transport = nodemailer.createTransport(smtpTransport({
        host: 'your-smtp-server.local',  // FIXME: Change this!
        port: 25,
    }));


    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'TeamCity <teamcity@company.com>', // sender address
        to: recipient, // list of receivers
        subject: 'Code Coverage results', // Subject line
        // text: 'Hello world ?', // plaintext body, not used
        html: source // html body
    };

    // send mail with defined transport object
    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });


}


var fs = require('fs')

// Do the reading of the original index.html, and kick everything off.
fs.readFile(originalFile, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    styliner.processHTML(data)
    .then(function (source)
         {

        sendEmail(source);

        fs.writeFile("newindex.html", source, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });

      }

    );

});