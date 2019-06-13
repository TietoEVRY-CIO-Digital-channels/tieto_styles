var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
var tempPath = 'tmp';
var outputPath = 'docs';

// https://github.com/SC5/sc5-styleguide#build-options
gulp.task('styleguide:generate:dev', function() {
  return gulp.src('styles-guide/**/*.scss')
    .pipe(styleguide.generate({
        title: 'Tieto Styleguide',
        server: true,
        rootPath: tempPath,
        overviewPath: 'OVERVIEW.md',
        disableEncapsulation: true,
        sideNav: true,
        showReferenceNumbers: true,
        commonClass: 'tsg',
        customColors: 'docs/css/_styleguide_colors_override.scss',
        //port: 3001,
        server: true
      }))
    .pipe(gulp.dest(tempPath));
});

gulp.task('styleguide:applystyles:dev', function() {
    return gulp.src('styles-guide/main.scss')
      .pipe(sass({
        errLogToConsole: true
      }))
      .pipe(styleguide.applyStyles())
      .pipe(gulp.dest(tempPath));
  });

gulp.task('styleguide:generate:build', function() {
  return gulp.src('styles-guide/**/*.scss')
    .pipe(styleguide.generate({
        title: 'Tieto Styleguide',
        server: false,
        rootPath: outputPath,
        appRoot: '.',
        customColors: 'docs/css/_styleguide_colors_override.scss',
        //port: 3001,
        overviewPath: 'OVERVIEW.md'
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles:build', function() {
  return gulp.src('styles-guide/main.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:devtask', ['styleguide:generate:dev', 'styleguide:applystyles:dev']);
gulp.task('styleguide:dev', ['styleguide:devtask'], function() {
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  gulp.watch(['styles-guide/**/*.scss', 'styles-library/**/*.scss'], ['styleguide:devtask']);
});

gulp.task('styleguide:build', ['styleguide:generate:build', 'styleguide:applystyles:build']);
