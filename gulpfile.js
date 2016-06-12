'use strict';

let gulp = require('gulp');
let watch = require('gulp-watch');
let server = require('gulp-express');
let shell = require('gulp-shell');
let del = require('del');

let paths = {
	scripts: ['app.js', 'routes/**/*', 'public/**/*', 'views/*', 'gulpfile.js']
};

gulp.task('run', () => {
	server.run(['bin/www']);
});

gulp.task('watch', ['run'], () => {
	watch(paths.scripts, () => {
		gulp.start('run');
	});
});

gulp.task('default', ['watch']);

gulp.task('clean', () => {
	return del(['build']);
});

gulp.task('build', ['clean'], () => {
	return gulp.src(['main.js', './views/**/**', './public/**/**'])
		.pipe(gulp.dest('build/electron'));
});

gulp.task('electron', ['build'], shell.task([
	'electron build/electron/main.js'
]));