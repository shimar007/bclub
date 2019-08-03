var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    concat = require('gulp-concat'),
    sassGlob = require('gulp-sass-glob'),
    sourcemaps = require("gulp-sourcemaps");


var paths = {
    styles: {
        src: "components/styles/index.scss",
        dest: "css"
    }
};

// Define tasks after requiring dependencies
function style() {
    return (
        gulp
            .src(paths.styles.src)
            .pipe(sourcemaps.init())
            .pipe(sassGlob())
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(concat('style.min.css'))
            .pipe(gulp.dest(paths.styles.dest))
    );
}

//gulp watch
function watch(){
    style();
    gulp.watch(paths.styles.src, style);
}

exports.style = style;
exports.watch = watch;