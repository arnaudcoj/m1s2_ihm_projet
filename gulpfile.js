var gulp = require('gulp');
var gutil = require('gulp-util');
//var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
//var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
var babel = require('gulp-babel');
var ngAnnotate = require('gulp-ng-annotate');
var del = require('del');
//var sh = require('shelljs');
var coffee = require('gulp-coffee');



var paths = {
  sass: ['./scss/**/*.scss'],
  scripts: ['app/js/models/**/*.js','app/js/**/*.js']
};
var appfiles = ['app/**/*','!app/js/**/*'];

gulp.task('default', ['sass','clean-build','ugly']);

gulp.task('compile',['sass','coffee']);

gulp.task('build', ['clean-build','compile','concat'])

gulp.task('coffee', function(done) {
  gulp.src('./scripts/**/*.coffee')
  .pipe(coffee({bare: true})
  .on('error', gutil.log))
  .pipe(gulp.dest('./app/js/'));
  done();
});

gulp.task('clean-build',function (done) {
  del.sync(['./build/js/app.concat.js','./build/**/*']);
  done();
});

gulp.task('sass', function(done) {
  gulp.src('./scss/app.styles.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./app/css/'));
    // .pipe(minifyCss({
    //   keepSpecialComments: 0
    // }))
    // .pipe(rename({ extname: '.min.css' }))
    // .pipe(gulp.dest('./www/css/'))
    done();
});

gulp.task('cp-build',function (done) {
  gulp.src(appfiles)
  .pipe(gulp.dest('build/'));
  done();
});

gulp.task('concat',['cp-build'],function (done) {
  gulp.src(paths.scripts)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('app.concat.js'))
    .pipe(gulp.dest('build/js/'))
    .on('end',done);
});

gulp.task('ugly', ['concat'], function(done){
    gulp.src('./buil/js/app.concat.js')
      .pipe(rename('app.min.js'))
      .pipe(ngAnnotate())
      .pipe(uglify().on('error',gutil.log))
      .pipe(gulp.dest('build/js/'))
      .on('end',done);
});


gulp.task('libs', function () {
  // libs installed from bower
  gulp.src(paths.libs.bower,{base: paths.libs.baseBower})
    .pipe(gulp.dest('./www/lib/'));
  // libs installed from npm
  gulp.src(paths.libs.npm,{base: paths.libs.baseNPM})
    .pipe(gulp.dest('./www/lib/'));
});

/*Pas besoin*/
gulp.task('resources', function () {
  gulp.src(paths.resources.all,{base: paths.resources.base})
  .pipe(gulp.dest('./platforms/android/res/raw/'));
});
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
