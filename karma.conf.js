//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/*.js',
      'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-bootstrap/*.js',
      'components/**/*.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
        'karma-phantomjs-launcher',
        'karma-firefox-launcher',
        'karma-jasmine',
        'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
      singleRun : true

  });
};