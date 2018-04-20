var gulp = require('gulp'),
webpack = require('webpack');

//callback is used so that gulp knows when the task successfully comleted
gulp.task('scripts', ['modernizr'], function(callback) {
  webpack(require('../../webpack.config.js'), function(err, stats) {

    if(err)
      console.log(err.toString());

    console.log(stats.toString());
    callback();
  }); // require the config file wepack.config.js
});
