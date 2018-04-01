var gulp = require('gulp'), // imports gulp file
watch = require('gulp-watch'), // imports gulp-watch package
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
      notify: false,
      server: {
        baseDir: "app"
      }
  });

  // we need to pass two arguments in watch function
  // watch(path_of_the_file_to_watch, what function to do when a change is detected)
  watch('./app/index.html', function() {
    browserSync.reload();
  });

	watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject'); // start a task
  });
});


gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css') //we need to indicate where it can find the new css file
    .pipe(browserSync.stream());
    //stream() method will pipe whatever the content that was piped into
    // available on the browser.
});
