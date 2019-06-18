//引入gulp，gulp-babel的npm模块；
  var gulp = require('gulp');
  var babel = require('gulp-babel');
  var uglify=require('gulp-uglify');   //js压缩
  var rename=require('gulp-rename');
  
  //创建gulp运行代码
  gulp.task('babel', function () { //‘babel’ gulp的脚本名称，自定义命名
      return gulp.src('dist/lazyload.js') //js入口文件，可用绝对路径、相对路径，是文件类型
          //.pipe(babel())
          .pipe(rename({suffix:'.min'}))     //重命名
       		.pipe(uglify())              //运行gulp-babel进行编译
          .pipe(gulp.dest('./dest'))  //编译后的文件输出地址，是文件夹类型
 });