var gulp = require('gulp');
var rename = require('gulp-rename');
gulp.task('default', function () {
	gulp.src('./product.css').pipe(rename('index.css')).pipe(gulp.dest('./dist/'));
});
