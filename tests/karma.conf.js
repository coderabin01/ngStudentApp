//jshint strict: false
module.exports = function(config) {
    config.set({

        basePath: './',

        files: [
            '../app/bower_components/angular/angular.js',
            '../app/bower_components/angular-ui-router/release/angular-ui-router.js',
            '../app/bower_components/angular-mocks/angular-mocks.js',
            '../app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',

            //Files
            '../app/app.module.js',
            '../app/app.config.js',
            '../app/components/login/login.controller.js',
            '../app/components/jasmine/testpractise.js',
            '../app/components/**/*.js',

            //spec files
            // 'spec/config/config.spec.js',
            //  'specs/components/login/login.spec.js',
            //'specs/components/student/student.controller.spec.js',
            //'specs/components/jasmine/testpractise.spec.js',
            //'specs/components/student/student.service.spec.js',
            'specs/components/modalComponent/studentModal.controller.spec.js',
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: [
            'PhantomJS',
            // 'Chrome'
        ],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        singleRun: true
    });
};
