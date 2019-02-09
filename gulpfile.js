'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');
    
gulp.task('scss', function() { // Создаем таск Sass
      gulp.src('src/sass/**/*.scss') // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('build/css')) // Выгружаем результата в папку app/css
    // .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['scss']); // Наблюдение за sass файлами
    gulp.watch('src/*.html'); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('src/js/**/*.js'); // Наблюдение за JS файлами в папке js
});

gulp.task('default', ['scss', 'watch']);