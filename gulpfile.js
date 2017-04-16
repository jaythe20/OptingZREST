/**
 * Created by jaythe20 on 15/04/17.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    nodemon({
        script: './bin/server.js',
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function(){
            console.log("Restarting..");
        });
});
