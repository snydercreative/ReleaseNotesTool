var gulp = require('gulp'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat')
	runSequence = require('run-sequence');

gulp.task('clean', function() {
	return gulp.src(['public/css/**/*.css', 'public/js/**.*.js'])
		.pipe(clean());
});

gulp.task('sass', function() {
	return gulp.src('client/scss/master.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'));
});

gulp.task('concat-js', function() {
	return gulp.src('client/releaseNotesApp/**/*.js')
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('move-html', function() {
	return gulp.src('client/releaseNotesApp/**/*.html')
		.pipe(gulp.dest('public/partials'));
});

gulp.task('watch', function() {
	gulp.watch([
		'client/scss/**/*.scss', 
		'client/releaseNotesApp/**/*.js',
		'client/releaseNotesApp/**/*.html'
	], ['default']);
});

gulp.task('default', ['clean'], function(callback) {
	runSequence(['sass', 'concat-js', 'move-html'], callback);
});

