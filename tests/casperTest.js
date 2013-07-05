// Simple test on Google
casper.test.begin( 'Test casperJS on ' + getBaseUrl(), function suite(test){
  var baseUrl = getBaseUrl();
  casper.start();
  casper.viewport(1024,768);
  casper.userAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36");
  casper.thenOpen( baseUrl, function() {
    test.assertHttpStatus(200, "Successfully loaded page");
    test.assertTextExists( "Google", "We've reached Google" );
    test.assertUrlMatch(/^http:\/\/www.google/, "Google is http");
  });
  casper.run( function() {
    test.done();
  });
});
