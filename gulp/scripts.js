'use strict';

var path = require('path');
var fs   = require('fs');
var gulp = require('gulp');
var conf = require('./conf');
var es   = require('event-stream');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

function getModules(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

gulp.task('rootScript', function() {
  return gulp.src([
      path.join(conf.paths.src, '/app/index.*.js'),
      path.join(conf.paths.src, '/app/components/**/*.js'),
      path.join(conf.paths.src, '/app/**/*.router.js'),
      path.join(conf.paths.src, '/app/lib/**/*.js')
    ])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.concat('app.js'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/assets/js')))
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size())
  ;
});

gulp.task('scripts', ['rootScript'], function () {

  var modules = getModules(path.join(conf.paths.src, 'app/modules'));

  var streams = modules.map(function(module) {

    return gulp.src([
        path.join(conf.paths.src, 'app/**', module, '/*.js'),
        path.join('!' + conf.paths.src, '/app/**/*.router.js'),
        path.join('!' + conf.paths.src, '/app/lib/**/*.js')
      ])
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe($.concat( module + '.js'))
      .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/assets/js')))
      .pipe(browserSync.reload({ stream: true }))
      .pipe($.size())
    ;
  });

  if (streams.length === 0) {
    done();
  }

  return es.merge.apply(null, streams);
});

