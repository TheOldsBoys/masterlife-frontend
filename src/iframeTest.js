var request = require('request');

const url = "https://www.youtube.com/upload";

request(url, function(err, response) {
  var isBlocked = 'No';

  // If the page was found...
  if (!err && response.statusCode === 200) {

    // Grab the headers
    var headers = response.headers;

    // Grab the x-frame-options header if it exists
    var xFrameOptions = headers['x-frame-options'] || '';

    // Normalize the header to lowercase
    xFrameOptions = xFrameOptions.toLowerCase();

    // Check if it's set to a blocking option
    if (
      xFrameOptions === 'sameorigin' ||
      xFrameOptions === 'deny'
    ) {
      isBlocked = 'Yes';
    }
  }

  // Print the result
  console.log(isBlocked + ', this page is blocked');
});