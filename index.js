// Credit to:
// https://coderwall.com/p/fhgu_q/inlining-images-with-gulp-sass
var fs    = require('fs');
var path  = require('path');
var types = require('node-sass').types;

var svg = function(buffer) {
    var svg = buffer.toString()
        .replace(/\n/g, '')
        .replace(/\r/g, '')
        .replace(/\#/g, '%23')
        .replace(/\"/g, "'");

    return '"data:image/svg+xml;utf8,' + svg + '"';
};

var img = function(buffer, ext) {
    return '"data:image/' + ext + ';base64,' + buffer.toString('base64') + '"';
};

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
                var buffer = new Buffer(data);
                var str = ext === 'svg' ? svg(buffer, ext) : img(buffer, ext);
                done(types.String(str));
            });
        }
    };
};
