var gulp = require('gulp'), // imports gulp file
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins');


gulp.task('styles', function() {
		return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
			.on('error', function(errorInfo) {
				console.log(errorInfo.toString());
				this.emit('end'); // gracefully saying that the task has come to an end.
			})
      .pipe(gulp.dest('./app/temp/styles'));
});
