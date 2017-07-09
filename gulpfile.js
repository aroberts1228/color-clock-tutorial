var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server();
});

gulp.task('default', ['webserver']);

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});
