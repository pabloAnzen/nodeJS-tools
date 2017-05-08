var webpack     = require('webpack-stream');
var gulp        = require('gulp');

gulp.task('webpackTask', function(){
    return gulp.src('../src/app.js')
        .pipe(webpack(require('../conf/' + process.env.NODE_ENV + '/webpack.config.js')))
        .pipe(gulp.dest('../build/' + process.env.NODE_ENV));
});