/*gulp functions*/
var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('style', async function () {
await gulp.src('style.css')
.pipe(autoprefixer())
.pipe(gulp.dest('build'))
});

                              
gulp.task('watch', async function () {
await gulp.watch('style.css', gulp.series('style'));
return
});
