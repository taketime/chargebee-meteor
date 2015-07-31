Package.describe({
    name: 'taketime:chargebee',
    version: '0.0.1',
    summary: 'Chargebee for Meteor',
    git: 'https://github.com/taketime/chargebee-meteor.git',
    documentation: 'README.md'
});

Npm.depends({ "chargebee": "1.2.5" });

Package.onUse(function(api) {
    api.use('underscore');
    api.versionsFrom('1.1.0.2');
    api.addFiles('chargebee.js', 'server');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('taketime:chargebee');
    api.addFiles('chargebee-tests.js', 'server');
});
