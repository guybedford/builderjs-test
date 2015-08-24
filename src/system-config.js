System.config({
    baseURL: '',
    map: {
        'angular': 'lib/angular/angular.js',
        'angular-resource': 'lib/angular-resource/angular-resource.js',

        'resource-factory': 'common/resource-factory.js',
    },
    paths: {
        'lib/*': 'lib/*',
        'common/*': 'common/*',
        'app': 'app'
    },
    meta: {
        'lib/angular/angular.js': {format: 'global', exports: 'angular'},
        'lib/angular-resource/angular-resource.js': {format: 'global', deps: ['angular']},

        'common/resource-factory.js': {format: 'global', deps: ['angular-resource']}
    },
    packages: {
        'app': {
            defaultExtension: 'js'
        }
    }
});