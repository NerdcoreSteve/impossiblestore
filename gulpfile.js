//TODO find out what fs is
var fs = require("fs");
var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");

//TODO why is it "public/src/main.js" in task and "watch" in watch?

gulp.task("default", function () {
    return browserify({ debug: true })
        .transform(babelify)
        .require("public/src/main.js", { entry: true })
        .bundle()
        .on("error", function (err) { console.log("Error: " + err.message); })
        .pipe(fs.createWriteStream("public/build/bundle.js"));
});

gulp.task("watch", function(){
    gulp.watch('public/src/*.js', ['default']);
});
