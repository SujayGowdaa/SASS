/*
1. Importing Gulp Functions:
src: Used to specify the source files.
dest: Used to specify the destination directory for output files.
watch: Watches files for changes and runs specified tasks when changes are detected.
series: Runs Gulp tasks in series, one after another.

2. Importing and Configuring gulp-sass:
This line imports the gulp-sass plugin and configures it to use the sass compiler.

3. Compiling Sass to CSS:
The buildStyles function uses src to select the index.scss file.
The pipe method sends the file through the sass compiler.
The compiled CSS is then sent to the css directory using dest.

4. Watching Files for Changes:
The watchFiles function sets up a watcher on the index.scss file.
When changes are detected, the buildStyles function is triggered.

5. Default Task:
The default task is defined using series to first run buildStyles and then watchFiles.
This means when you run gulp from the command line, it will compile the Sass file and then start watching for changes.
*/

// Import necessary functions from Gulp
const { src, dest, watch, series } = require('gulp');

// Import the gulp-sass plugin and specify the Sass compiler
const sass = require('gulp-sass')(require('sass'));

// Define a function to compile Sass files
function buildStyles() {
  // Source the 'index.scss' file, compile it using Sass, and output the result to the 'css' directory
  return src('SG-UI-LIBRARY/**/*.scss').pipe(sass()).pipe(dest('css'));
}

// Define a function to watch for changes in the 'index.scss' file and run the buildStyles function
function watchFiles() {
  // Watch the 'index.scss' file, and whenever it changes, run the buildStyles function
  watch(['SG-UI-LIBRARY/**/*.scss'], buildStyles);
}

// Define the default Gulp task to first build styles, then watch for file changes
exports.default = series(buildStyles, watchFiles);
