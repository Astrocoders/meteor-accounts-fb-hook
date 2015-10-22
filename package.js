Package.describe({
  name: 'astrocoders:accounts-fb-hook',
  version: '0.0.1',
  summary: 'Grabs user\'s Facebook info and save them in profile.',
  git: 'https://github.com/Astrocoders/meteor-accounts-fb-hook',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  // This package can be used by particles:cordova-fb
  // or by accounts-facebook. We let the user add one of them.
  api.use([
    'ecmascript',
    'accounts-base'
  ]);

  api.imply('accounts-base');

  api.addFiles('accounts-fb-hook.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('astrocoders:accounts-fb-hook');
  api.addFiles('accounts-fb-hook-tests.js');
});
