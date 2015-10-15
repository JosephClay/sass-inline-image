# sass-inline-image

`npm i sass-inline-image`

Use the `inline-image` function from Compass in [gulp-sass](https://www.npmjs.com/package/gulp-sass) ([node-sass](https://www.npmjs.com/package/node-sass)).

## usage

```js
// in gulpfile
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassInlineImage = require('sass-inline-image');
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

## Credit

Credit to [Sergii Iavorskyi](https://coderwall.com/p/fhgu_q/inlining-images-with-gulp-sass) at [coderwall][https://coderwall.com/].


## License

The MIT License (MIT)

Copyright (c) 2014 Joseph Clay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
