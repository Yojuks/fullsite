'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'), 
    cssnano = require('gulp-cssnano'),
    rename  = require('gulp-rename'), // Подключаем пакет для минификации CSS
    rigger = require('gulp-rigger')
    // browserSync = require('browser-sync').create();
    // browserSync = require("browser-sync"),
    // reload = browserSync.reload;
    // cssmin = require('gulp-clean-css'),
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    // rimraf = require('rimraf'),
    
    gulp.task('sass', function() { // Создаем таск Sass
         gulp.src('src/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('build/css')) // Выгружаем результата в папку app/css
        // .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
    });
    
    gulp.task('watch', function() {
        gulp.watch('src/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами
        gulp.watch('src/*.html'); // Наблюдение за HTML файлами в корне проекта
        gulp.watch('src/js/**/*.js'); // Наблюдение за JS файлами в папке js
    });

    // gulp.task('stream', function () {
    //     // Endless stream mode
    //     return watch('build/**/*.css', { ignoreInitial: false })
    //         .pipe(gulp.dest('build'));
    // });
    
    // gulp.task('serve', ['sass'], function() {

    //     browserSync.init({
    //         server: "src"
    //     });
    
    //     gulp.watch("src/scss/*.scss", ['sass']);
    //     gulp.watch("src/*.html").on('change', browserSync.reload);
    // });
    
    // gulp.task('sass', function() {
    //     return gulp.src("src/scss/*.scss")
    //         .pipe(sass())
    //         .pipe(gulp.dest("build/css"))
    //         .pipe(browserSync.stream());
    // });
    
    // gulp.task('default', ['serve']);

  
