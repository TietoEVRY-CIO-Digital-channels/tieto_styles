var gulp = require('gulp');
var sass = require('gulp-sass');
var modifyCssUrls = require('gulp-modify-css-urls');
 
gulp.task('sass', function () {
  return gulp.src('assets/scss/**/{*.scss, _*.scss}')
    .pipe(sass().on('error', sass.logError))
    .pipe(modifyCssUrls({
      modify(url, filePath) {
        return `${url}`.replace('../', '');
      },
      prepend: 'assets/',
      // append: '?cache-buster'
    }))
    .pipe(gulp.dest('assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('assets/scss/**/{*.scss, _*.scss}', ['sass']);
});