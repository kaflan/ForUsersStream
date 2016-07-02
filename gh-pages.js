var ghpages = require('gh-pages');
var path = require('path');
ghpages.publish(path.join(__dirname, 'app'), {
    repo: 'git@github.com:kaflan/angularTYpescript2.git',
    message: 'Auto-generated commit'
}, callback);