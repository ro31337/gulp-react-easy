### Problem

To start with basic ES6 React.js application you need to install a bunch of packages like browserify, babelify, babelify transforms for es2015 and react. You also need to configure them. Depending on experience it takes 1-3 hours, and your code looks bit ugly.

### Solution

With `gulp-react-easy` it's simplified to:

```javascript
reactEasy({file: 'src/app.jsx'}).to('bundle.js') // pipe from here (see below)
```

And you need to install only one package: `gulp-react-easy`.

### Usage

```
npm i gulp gulp-react-easy --save-dev
```

Create gulp file:

```javascript
var gulp = require('gulp');
var reactEasy = require('gulp-react-easy');

gulp.task('build', function() {
  return reactEasy({
      file: 'src/app.jsx',
      debug: true // optional, false by default
    })
    .to('bundle.js')
    .pipe(gulp.dest('.'));
});
```

Run gulp:

```
gulp build
```

It saves browserified and babelified `bundle.js` to `.` directory

### Example projects

[React-easy-example1](https://github.com/ro31337/react-easy-example1)

### License

MIT
