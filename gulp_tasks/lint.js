const gulp      = require('gulp');
var eslint      = require('gulp-eslint');

gulp.task('lint', function(){
    return gulp.src('../src/app.js')
    .pipe(eslint(
        {
            configFile: "../conf/" + process.env.NODE_ENV + "/.eslintrc.js",
            fix: true
        }
    ))
    .pipe(eslint.format())
    .pipe(gulp.dest('../src'));
});