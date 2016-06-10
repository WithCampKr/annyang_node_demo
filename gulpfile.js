'use strict';

let gulp = require('gulp');
let server = require('gulp-express');
let paths = {
	scripts: ['app.js', 'routes/**/*.js', 'public/**/*.js', 'gulpfile.js']
};

gulp.task('run', () => {
	server.run(['bin/www']);
});

gulp.task('watch', () => {
    gulp.watch([paths.scripts, ['run']]);
});

gulp.task('default', ['watch', 'run']);