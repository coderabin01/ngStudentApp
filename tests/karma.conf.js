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
            'specs/components/student/student.controller.spec.js',
            // 'specs/components/jasmine/testpractise.spec.js',
            //'specs/components/student/student.service.spec.js',
            // 'specs/components/modalComponent/studentModal.controller.spec.js',
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: [
            'PhantomJS'
        ],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        singleRun: true,

        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            '../app/components/**/*.js': ['coverage'],
            '../app/components/app*.js':['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        ngHtml2JsPreprocessor: { prependPrefix: '/', moduleName: 'templates' }
    });
};
