Package.describe({
  name: 'yasaricli:whirl',
  version: '0.0.1',
  summary: 'Pure css loading animations with minimal effort for meteor',
  git: 'https://github.com/yasaricli/meteor-whirl.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  // add css
  api.addFiles('whirl.css');
});
