var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'dist'), {
  branch: 'master',
  repo: 'https://${GH_TOKEN}@github.com/nteract/nteract.github.io.git'
});
