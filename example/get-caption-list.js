var YouTube = require('../lib/youtube');
var config = require('./config');

var youTube = new YouTube(config.key);

youTube.getCaptionListByVideoId('dhwpLACAls8', function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(JSON.stringify(result, null, 2));
  }
});
