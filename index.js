// Credit to:
// https://coderwall.com/p/fhgu_q/inlining-images-with-gulp-sass

var fs    = require('fs');
var path  = require('path');
var types = require('node-sass').types;

module.exports = function(options) {
    options = options || {};

    var base = options.base || process.cwd();
    return {
        'inline-image($file)': function(file, done) {
            // we want to file relative to the base
            var relativePath = './' + file.getValue();
            var filePath = path.resolve(base, relativePath);

            // get the file ext
            var ext = filePath.split('.').pop();

            // read the file
            fs.readFile(filePath, function(err, data) {
                if (err) { return done(err); }

                // base 64 encode the data
                var img = (new Buffer(data)).toString('base64');
                // format the string...
                var dataImg = 'data:image/' + ext + ';base64,' + img;
                // ...win
                done(types.String(dataImg));
            });
        }
    };
};
