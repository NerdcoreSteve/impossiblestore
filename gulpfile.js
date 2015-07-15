var gulp = require("gulp");
var babel = require("gulp-babel");

//TODO why do I have to specify the path in two places?

gulp.task("default", function () {
  return gulp.src("public/src/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/build"));
});

gulp.task("watch", function(){
    gulp.watch('public/src/*.js', ['default']);
});
