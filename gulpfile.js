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
gulp.task('test3',['test1','test']);  //����ִ��
gulp.task('copy',function(){
    gulp.src('index.html').pipe(gulp.dest('dist'));      //src�ҵ��ļ���ͨ���ܵ����Ƶ���dist�ļ��� û�еĻ�����  pipe�ǹܵ�
});
gulp.task('copy-img',function(){
    gulp.src('src/img/*.{jpg,png}').pipe(gulp.dest('dist'));      //�����е�ͼƬ����ȥ
});
gulp.task('copy-img',function(){
    gulp.src('src/img/**/*.{jpg,png}','!src/img/prev.png').pipe(gulp.dest('dist'));      //�����е�ͼƬ�����ļ����ͼƬ����ȥ  �������ų���  �����Ǹ��ļ�
});
gulp.task('watch',function(){
    gulp.watch('index.html',['copy-html']);      //���index   һ�б仯��ִ��copy
});
gulp.task('sass',function(){
    gulp.src('src/sass/*.scss').pipe(sass({outputStyle:'expanded'})).pipe(gulp.dest('dist/css')).pipe(connect.reload());      //ͨ������sass�ļ�  ʹcss��չ
});
gulp.task('copy-html',function(){
    gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
});
gulp.task('sever',function(){
   connect.server({root:'dist',livereload:true})                //livereload��������������Զ�ˢ��
});
gulp.task('default',['sever','watch']);
gulp.task('watch1',function(){
    gulp.watch('index.html',['copy-html']);
    gulp.watch('src/sass/*.scss',['sass']);
});
gulp.task('concat',function(){
    gulp.src('src/js/*.js').pipe(concat(index.js)).pipe(gulp.dest('dist/js')).pipe(uglify()).pipe(rename('index.min.js')).pipe(gulp.dest('dist/js'));
    //concat�ϲ�js�µ������ļ���indexjs  Ȼ��ŵ�js����   uglifyѹ���ļ�   rename������   Ȼ��Ż�ȥ    css��gulp-minify-cssѹ���������һ��
})

















