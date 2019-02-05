'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    // cssmin = require('gulp-clean-css'),
    rigger = require('gulp-rigger'),
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    // rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

    // var path = {
    //     build: { //Тут мы укажем куда складывать готовые после сборки файлы
    //         html: 'build/',
    //         js: 'build/js/',
    //         css: 'build/css/',
    //         img: 'build/img/',
    //         fonts: 'build/fonts/'
    //     },
    //     src: { //Пути откуда брать исходники
    //         html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    //         js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
    //         style: 'src/style/main.scss',
    //         img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
    //         fonts: 'src/fonts/**/*.*'
    //     },
    //     watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    //         html: 'src/**/*.html',
    //         js: 'src/js/**/*.js',
    //         style: 'src/style/**/*.scss',
    //         img: 'src/img/**/*.*',
    //         fonts: 'src/fonts/**/*.*'
    //     },
    //     clean: './build'
    // };

    // var config = {
    //     server: {
    //         baseDir: "./build"
    //     },
    //     tunnel: true,
    //     host: 'localhost',
    //     port: 9000,
    //     logPrefix: "Frontend_Devil"
    // };


    // gulp.task('html:build', function () {
    //     gulp.src(path.src.html) //Выберем файлы по нужному пути
    //         .pipe(rigger()) //Прогоним через rigger
    //         .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
    //         .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
    // });

    // gulp.task('js:build', function () {
    //     gulp.src(path.src.js) //Найдем наш main файл
    //         .pipe(rigger()) //Прогоним через rigger
    //         .pipe(sourcemaps.init()) //Инициализируем sourcemap
    //         .pipe(uglify()) //Сожмем наш js
    //         .pipe(sourcemaps.write()) //Пропишем карты
    //         .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
    //         .pipe(reload({stream: true})); //И перезагрузим сервер
    // });
 

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('src/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('build/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'src' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});
// var gulp = require('gulp');

// gulp.task('mytask', function() {
//     console.log('Привет, я таск!');
// });