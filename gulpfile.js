'use strict';

let gulp = require('gulp');
let server = require('gulp-express');
let shell = require('gulp-shell');
let del = require('del');

let paths = {
	scripts: ['app.js', 'routes/**/*.js', 'public/**/*.js', 'gulpfile.js']
};

gulp.task('clean', () => {
	return del(['build']);
});

gulp.task('run', () => {
	server.run(['bin/www']);
});

gulp.task('watch', () => {
    gulp.watch([paths.scripts, ['run']]);
});

gulp.task('default', ['watch', 'run']);

gulp.task('electron', ['clean'], () => {
	return gulp.src(['main.js', './views/**/**', './public/**/**'])
		.pipe(gulp.dest('build/electron'));
});
