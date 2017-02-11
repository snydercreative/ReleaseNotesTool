var gulp = require('gulp'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean');

gulp.task('clean-css', function() {
	gulp.src('public/css/master.css')
		.pipe(clean());
});

gulp.task('sass', ['clean-css'], function() {
	gulp.src('client/scss/master.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
	gulp.watch('client/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);

