var system = require('system');

var DEBUG = true;

var debugLog = function(msg) {
  if(DEBUG) {
    console.log(msg);
  }
};

var getBaseUrl = function() {
  return system.env.BASEURL;
};
