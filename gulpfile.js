'use strict';

var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('run', () => {
	server.run(['bin/www']);
});

gulp.task('watch', () => {
    gulp.watch(['app.js', 'routes/**/*.js', 'public/**/*.js', ['run']]);
});

gulp.task('default', ['watch', 'run']);