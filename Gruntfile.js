module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON( 'package.json' ),
    env: {
      casper: {
        add: {
          BASEURL: "http://www.google.com",
          PHANTOMJS_EXECUTABLE: "node_modules/casperjs/node_modules/.bin/phantomjs"
        },
        extend: {
          PATH: {
            value: 'node_modules/.bin',
            delimiter: ':'
          }
        }
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
  grunt.registerTask('default', [ 'env:casper',  'casperjs']);
};
