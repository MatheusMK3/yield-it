var Q = require('q');

var sync = {};

sync.sleep = function (millis) {
  var deferredResult = Q.defer();
  setTimeout(function() {
    deferredResult.resolve();
  }, millis);
  return deferredResult.promise;
}

sync.make = function () {
  var finished = false;
  var output = [];
  var cb = function () {
    finished = true;
    output = arguments;
  }
  var result = function *() {
    while(!finished) { yield sync.sleep(1); }
    if(output.length == 1) output = output[0];
    return output;
  }

  return {
    callback: cb,
    result: result
  }
}

module.exports = sync.make;