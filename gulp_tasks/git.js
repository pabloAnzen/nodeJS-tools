var gulp    = require('gulp');
var git     = require('gulp-git');

gulp.task('gitInit', function(){
    git.init({'cwd': '../'}, function(err){
        if (err) throw err;
    });
}); 

