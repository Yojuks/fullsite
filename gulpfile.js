'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'), 
    cssnano  = require('gulp-cssnano'),
    rename     = require('gulp-rename'), // Подключаем пакет для минификации CSS
    rigger = require('gulp-rigger'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;
    // cssmin = require('gulp-clean-css'),
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    // rimraf = require('rimraf'),

    gulp.task('sass', function(){ // Создаем таск Sass
        return gulp.src('src/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
    });
    
    gulp.task('browser-sync', function() { // Создаем таск browser-sync
        browserSync({ // Выполняем browser Sync
            server: { // Определяем параметры сервера
                baseDir: 'src' // Директория для сервера - app
            },
            notify: false // Отключаем уведомления
        });
    });
    
    gulp.task('scripts', function() {
        return gulp.src([ // Берем все необходимые библиотеки
            'src/libs/jquery/dist/jquery-3.3.1.min.js', // Берем jQuery
            // 'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('build/js')); // Выгружаем в папку /js
    });
    
gulp.task('css-libs', ['sass'], function() {
    return gulp.src('build/css/libs.css') // Выбираем файл для минификации
    .pipe(cssnano()) // Сжимаем
    .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
    .pipe(gulp.dest('src/css')); // Выгружаем в папку app/css
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами
    gulp.watch('src/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('src/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});
// var gulp = require('gulp');

// gulp.task('mytask', function() {
    //     console.log('Привет, я таск!');
    // });
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