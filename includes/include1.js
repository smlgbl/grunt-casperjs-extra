var system = require('system');
var screenshotFolder = './screenshots/';

var DEBUG = true;

var debugLog = function(msg) {
  if(DEBUG) {
    console.log(msg);
  }
};

var getBaseUrl = function() {
  return system.env.BASEURL;
};

casper.takeScreenshot = function(name) {
  var time = new Date();
  casper.capture( screenshotFolder + time.toJSON() + '-' + name + '.png' );
};
