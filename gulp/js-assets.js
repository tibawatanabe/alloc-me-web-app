'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

gulp.task('js-assets', function(){
  return gulp.src([path.join(conf.paths.src, '/assets/js/*.js')])
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/assets/js')));
});
