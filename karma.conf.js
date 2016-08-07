module.exports = function(config){
    config.set({

        basePath : './',
        files : [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/app.js',
            'app/directives/**/*.js',
            'app/services/**/*.js',
            'app/modules/**/*.js',
            'app/modules/**/*.spec.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
