var gulp = require('gulp');
var sass = require('gulp-sass');
var modifyCssUrls = require('gulp-modify-css-urls');
var browserSync = require('browser-sync').create();
var { exec } = require('child_process');

// Generating CSS from SCSS
gulp.task('sass', function () {
  return gulp.src('assets/scss/**/{*.scss, _*.scss}')
    .pipe(sass().on('error', sass.logError))
    .pipe(modifyCssUrls({
      modify(url, filePath) {
        return `${url}`.replace('../', '');
      },
      prepend: 'assets/',
    }))
    .pipe(gulp.dest('assets/css'));
});

// Generating Style Guide
gulp.task('guide', ['sass'], () => {
  exec('npm run guide', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`${stdout}`);
    console.log(`${stderr}`);

    browserSync.reload();
  });
});

// Static server
gulp.task('sync', function() {
  browserSync.init({
      server: {
          baseDir: "./docs"
      }
  });

  gulp.watch(['assets/**/*', '!assets/css/**/*'], ['guide']);
});

// Default Gulp task
gulp.task('default', ['sync']);
