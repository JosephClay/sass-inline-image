// Credit to:
// https://coderwall.com/p/fhgu_q/inlining-images-with-gulp-sass
var fs    = require('fs');
var path  = require('path');
var types = require('node-sass').types;

var svg = function(buffer, svgToBase64) {
    var encoding = svgToBase64 ? 'base64' : 'utf8';
    var svg = buffer.toString()
        .replace(/\n/g, '')
        .replace(/\r/g, '')
        .replace(/\"/g, "'");

    if(svgToBase64) {
      buffer = new Buffer(svg);
      svg = buffer.toString('base64');
    } else {
      svg = encodeURIComponent(svg);
    }

    return '"data:image/svg+xml;' + encoding + ',' + svg + '"';
};

var img = function(buffer, ext) {
    return '"data:image/' + ext + ';base64,' + buffer.toString('base64') + '"';
};

module.exports = function(options) {
    options = options || {};

    var base = options.base || process.cwd();
    var svgToBase64 = options.svgToBase64 === true;

    return {
        'inline-image($file)': function(file) {
            // we want to file relative to the base
            var relativePath = './' + file.getValue();
            var filePath = path.resolve(base, relativePath);

            // get the file ext
            var ext = filePath.split('.').pop();

            // read the file
            var data = fs.readFileSync(filePath);

            var buffer = new Buffer(data);
            var str = ext === 'svg' ? svg(buffer, svgToBase64) : img(buffer, ext);
            return types.String(str);
        }
    };
};
