# Brunel University Computer Science, Level 2 Task 5 Report

These are the files for my Level 2 Task 5 report website. It is built with HTML/CSS (Sass) and jQuery Mobile, and I have also done some extra things - mainly, used [Gulp.js](http://gulpjs.com) as my taskrunner, and used [Node.js](http://nodejs.org) and [Express](http://expressjs.com) to run a small webserver so it is properly hosted. The CSS is written with [Sass](http://sass-lang.com), a pre-processor, to make development easier and faster; Sass compiles to CSS (style.css) and looks very similar, it just has some extra features (such as Variables, Mixins, Functions and Nesting). I have also decided to store my References in a JSON file (`references.json`), as I thought it was an interesting concept. The parser for this is in `assets/js/script.js`, written using the JavaScript library jQuery.

## Accessing and running the app
The website is available on Heroku at [http://l2task5-tom.herokuapp.com](http://l2task5-tom.herokuapp.com). You can also run the website locally if you wish - to do this you'd need to clone this repo (`git clone https://github.com/tomoakley/l2task5`), navigate to the directory in a Terminal window (`cd path/to/dir`) and then run `npm install` to install the necessary dependencies (Gulp, Express, Sass, etc). Once that's done you can run `gulp` in the Terminal and it should start up and tell you that you can access it from `http://localhost:8080`. Enjoy! Note: this was on a Mac (Unix) - not sure about Windows compatibility.
