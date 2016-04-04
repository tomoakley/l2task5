var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var nano = require('gulp-cssnano');
var shell = require('gulp-shell');

var onError = function(error) {
  notify.onError({
    title:    "Gulp Build Error",
    subtitle: error.file.replace(/^.*[\\\/]/, '') + ":" + error.line + ":" + error.column,
    message:  error.message.replace(/^.*[\\\/\_\.](scss)\s*[0-9\:]*\s*/, ''),
    sound:    "Beep"
  })(error)
  this.emit('end')
}

gulp.task('styles', function () {
  return gulp.src('./assets/styles/src/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    errLogToConsole: true,
    outputStyle: 'expanded',
    sourceComments: true
  }).on('error', onError))
  .pipe(nano())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./assets/styles/build'))
});

gulp.task('watch', function() {
    gulp.watch('assets/styles/src/**/*.scss', ['styles']);
});

gulp.task('server', shell.task([
  'node server.js'
]));

gulp.task('default', ['watch', 'server']);
