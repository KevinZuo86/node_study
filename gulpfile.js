/**
 * Created by zuozhuo on 9/19/14.
 */

'use strict'

var gulp = require('gulp');
//用于设置browserify打包后的输出文件名
var source = require('vinyl-source-stream');
var browserify = require('browserify');
//用于在子模块中使用 根路径require('static-assets/uniq/uniq.js')
require('rootpath')();


gulp.task('browserify_task', function () {
    var b = browserify({
        //entries: ['./api/static/api/foo/bar1.js'],
        //basedir:__dirname
    });
    b.add('./api/static/api/foo/main.js');

    var bundler = b.bundle();

    return bundler
        //通过 vinyl-source-stream 传入输入文件名
        .pipe(source('output.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'));
});


gulp.task('default', ['browserify_task']);

