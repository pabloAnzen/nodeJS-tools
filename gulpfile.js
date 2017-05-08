const gulp = require('gulp');

const HubRegistry = require('gulp-hub');
const hub = new HubRegistry("./gulp_tasks/*.js");
var runSequence = require('run-sequence');

/* VARIABLE GLOBAL */
process.env.NODE_ENV = '';

/* DEVELOPMENT TASKS */
gulp.task('build:dev', function() {
    setVariable('dev');
    runSequence('eslint:dev', 'webpack:dev');
});
gulp.task('watch:dev', function() {
    setVariable('dev');
    runSequence('watch');
});
gulp.task('eslint:dev', function(){
    setVariable('dev');
    runSequence('lint');
});
gulp.task('webpack:dev', function(){
    setVariable('dev');
    runSequence('webpackTask');
});

gulp.task('serve:dev', function() {
    setVariable('dev');
    runSequence('watch:dev');
});

/* DISTRIBUTION TASKS */
gulp.task('build:dist', function() {
    setVariable('dist');
    runSequence('eslint:dist', 'webpack:dist', 'ngdoc:dist');
});
gulp.task('eslint:dist', function(){
    setVariable('dist');
    runSequence('lint');
});
gulp.task('webpack:dist', function(){
    setVariable('dist');
    runSequence('webpackTask');
});
gulp.task('ngdoc:dist', ['ngdocs']);

gulp.task('serve:dist', function() {
    setVariable('dist');
    runSequence('watch');
});

/* TESTING TASKS */
gulp.task('build:test', function() {
    setVariable('test');
    runSequence('eslint:test', 'webpack:test');
});
gulp.task('eslint:test', function(){
    setVariable('test');
    runSequence('lint');
});

gulp.task('webpack:test', function(){
    setVariable('test');
    runSequence('webpackTask');
});

gulp.task('serve:test', function() {
    setVariable('test');
    runSequence('watch');
});


function setVariable(arg) {
    process.env.NODE_ENV = arg;
}