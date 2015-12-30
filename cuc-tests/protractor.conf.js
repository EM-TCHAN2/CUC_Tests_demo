exports.config = {
  allScriptsTimeout: 11000,

  onPrepare: function(){
    browser.driver.manage().window().maximize();
    browser.executeScript("document.body.style.zoom='100%';");
  },

  // ---------------------------------------------------------------------------
  // ----- What tests to run ---------------------------------------------------
  // ---------------------------------------------------------------------------

  // Spec patterns are relative to the location of this config.
  specs: [
    'date-picker-tests/date-picker-func-spec.js'
  ],

  // Patterns to exclude.
  exclude: [],

  // Alternatively, suites may be used. When run without a command line
  // parameter, all suites will run. If run with --suite=smoke or
  // --suite=smoke,full only the patterns matched by the specified suites will
  // run.
  suites: {
    functionaltests: '/**/*func-spec.js',
    uitests: '/**/*ui-spec.js',
    unittests: '/**/*unit.js',
    fullregression: '/**/*spec.js'
  },

  resultJsonOutputFile: 'C:/CUC Testresults/testresults.log',

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://cp1tfsbuild5/controls/',

  framework: 'mocha',

  mochaOpts: {
    //defaultTimeoutInterval: 30000,
    timeout: 30000
  }
};
