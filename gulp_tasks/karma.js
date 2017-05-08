var gulp    = require('gulp');
var Server  = require('karma').Server;
const path  = require('path');

gulp.task('test', function(done){
    new Server({
        configFile: path.win32.resolve(process.cwd(), '..') + '/conf/karma.conf.js'
    }, done).start();
});