var gulp=require('gulp');
var sass=require('gulp-sass');
var connect=require('gulp-connect');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var mincss=require('gulp-minify-css');
gulp.task('test',function(){
    console.log('aaa');
});
gulp.task('test1',function(){
    console.log('bb');
});
gulp.task('test3',['test1','test']);  //批量执行
gulp.task('copy',function(){
    gulp.src('index.html').pipe(gulp.dest('dist'));      //src找到文件，通过管道复制倒放dist文件下 没有的话创建  pipe是管道
});
gulp.task('copy-img',function(){
    gulp.src('src/img/*.{jpg,png}').pipe(gulp.dest('dist'));      //把所有的图片拷过去
});
gulp.task('copy-img',function(){
    gulp.src('src/img/**/*.{jpg,png}','!src/img/prev.png').pipe(gulp.dest('dist'));      //把所有的图片和子文件里的图片拷过去  后面是排除的  除了那个文件
});
gulp.task('watch',function(){
    gulp.watch('index.html',['copy-html']);      //监测index   一有变化就执行copy
});
gulp.task('sass',function(){
    gulp.src('src/sass/*.scss').pipe(sass({outputStyle:'expanded'})).pipe(gulp.dest('dist/css')).pipe(connect.reload());      //通过编译sass文件  使css扩展
});
gulp.task('copy-html',function(){
    gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
});
gulp.task('sever',function(){
   connect.server({root:'dist',livereload:true})                //livereload服务启动浏览器自动刷新
});
gulp.task('default',['sever','watch']);
gulp.task('watch1',function(){
    gulp.watch('index.html',['copy-html']);
    gulp.watch('src/sass/*.scss',['sass']);
});
gulp.task('concat',function(){
    gulp.src('src/js/*.js').pipe(concat(index.js)).pipe(gulp.dest('dist/js')).pipe(uglify()).pipe(rename('index.min.js')).pipe(gulp.dest('dist/js'));
    //concat合并js下的所有文件到indexjs  然后放到js下面   uglify压缩文件   rename重命名   然后放回去    css用gulp-minify-css压缩，和这个一样
})

















