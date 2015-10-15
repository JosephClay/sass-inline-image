# sass-inline-image

Use the `inline-image` function from Compass in [gulp-sass](https://www.npmjs.com/package/gulp-sass) ([node-sass](https://www.npmjs.com/package/node-sass)).

## usage

```js
// in gulpfile
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassInlineImage = require('@hps/sass-inline-image');
gulp.src('style.scss')
    .pipe(
        sass({
            functions: sassInlineImage({ /* options */ })
        })
    )
    .pipe(gulp.dest('./css'));
```

```scss
body {
    background: url(inline-image('path/to/image.png'));
}
```

[credit](https://coderwall.com/p/fhgu_q/inlining-images-with-gulp-sass)