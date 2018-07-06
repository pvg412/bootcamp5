const gulp = require('gulp'); // создали перем. gulp и в неё импортировали пакет ('gulp'),
                              // через require - зайди в папку (node modules), найди папку (gulp) и оттуда вытяни всё,
                              // что связано с 'gulp'
                              // создаем её для того, чтобы мы могли пользоваться инструкциями пакет gulp
const rigger = require('gulp-rigger');
const runSequence = require('run-sequence');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();



/*// прописываем метод
gulp.task('task-name', function () {
    return gulp.src('./src') // взять файлы с помощью gulp.src;
        .pipe(aGulpPlugin()) // Пропустить их через gulp-плагин - ключевок слово -      .pipe - труба;
        .pipe(aGulpPlugin()) // Пропустить их через gulp-плагин - ключевок слово -      .pipe - труба;
        .pipe(aGulpPlugin()) // Пропустить их через gulp-плагин - ключевок слово -      .pipe - труба;
        .pipe(aGulpPlugin()) // Пропустить их через gulp-плагин - ключевок слово -      .pipe - труба;
        .pipe(gulp.dest('./build')); // Положить рузльтат в указанную папку;
});
*/

// gulp.task - их можно объединять, если их написано больше одного ('html', 'css', '')
gulp.task('html', function () {
    return gulp.src('./src/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
});

gulp.task('css', function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream());
});

gulp.task('img', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images/'))
);

gulp.task('fonts', () =>
    gulp.src('src/fonts/*')
        .pipe(gulp.dest('build/fonts/'))
);

gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
});

gulp.task('del', function () {
    return del('./build')
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('src/html/*.html', ['html']);
    gulp.watch('src/scss/*.scss', ['css']);
    gulp.watch('src/js/*.js', ['js']);
});

gulp.task('build', function(callback) {
    runSequence(
        'del',
        'html',
        'css',
        'img',
        'fonts',
        'js',
        'browser-sync',
        'watch',
        callback);
});