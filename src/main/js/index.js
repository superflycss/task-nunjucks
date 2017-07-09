//==================================================
//  Task
//  njk
//  For the description see
//  [SupeflyCSS Test Task](https://github.com/superflycss/task-nunjucks/)
//==================================================

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

var PLI = require('@superflycss/pli');

//---------------------------------
gulp.task('njk', function() {
  return gulp
    .src(PLI.SRC_TEST_HTML)
    .pipe(nunjucksRender({
      path: [PLI.src.main.nunjucks]
    }))
    .pipe(gulp.dest(PLI.target.test.html));
});
