# Usage
As simple as it gets, just remember, this is meant to be used inside generator functions:

    var make = require('yield-it');

    // Now invoke it

    // Create instance
    var fun = make();

    // We set our instance's callback function to any function
    setTimeout(fun.callback, 2000);

    // Await for the result
    yield fun.result();

# Results
The result function will also pass ANY arguments sent to the callback, so if your function required an callback in the function(err, data) format, your result will be in the format of an array:

    ['the-error', 'the-data'] // Not as strings, but well, you understood ;)