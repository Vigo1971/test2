var gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn = require("opn");
//запуск сервера с livereload
gulp.task('connect', function() {
  connect.server({
    root:'app',
    port:8899,
    livereload:true	  
  });
	opn('http://localhost:8899');
});
//работа с html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
// Работа с css
gulp.task('css', function () {
	gulp.src('./app/css/*.css')
	.pipe(connect.reload());
});
gulp.task('js', function () {
	gulp.src('./app/js/*.js')
	.pipe(connect.reload());
});
gulp.task('watch', function () {
	gulp.watch(['./app/*.html'],['html']);
	gulp.watch(['./app/css/*.css'],['css']);
	gulp.watch(['./app/js/*.js'],['js']);
});
gulp.task('default',['connect','watch']);