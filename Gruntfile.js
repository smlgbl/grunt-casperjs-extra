module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON( 'package.json' ),
    env: {
      casper: {
        BASEURL: "http://www.google.com",
        PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:./node_modules/.bin",
        PHANTOMJS_EXECUTABLE: "node_modules/casperjs/node_modules/.bin/phantomjs"
      }
    },
    casperjs: {
      options: {
        includes: ['includes/include1.js'],
        test: true
      },
      files: ['tests/**/*.js']
    }
  });
  // casperJS Frontend tests
  grunt.loadNpmTasks( 'grunt-casperjs' );
  grunt.loadNpmTasks( 'grunt-env' );

  // grunt for Frontend testing
  grunt.registerTask('default', [ 'env:casper', 'casperjs']);
};
