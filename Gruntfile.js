module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON( 'package.json' ),
    env: {
      casper: {
        BASEURL: "http://www.google.com",
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

  grunt.registerTask('extendPATH', 'Add the npm bin dir to PATH', function() {
	var pathDelimiter = ':';
	var extPath = 'node_modules/.bin';
	var pathArray = process.env.PATH.split( pathDelimiter );
	pathArray.unshift( extPath );
	process.env.PATH = pathArray.join( pathDelimiter );
	grunt.log.writeln('Extending PATH to be ' + process.env.PATH);
  });

  // grunt for Frontend testing
  grunt.registerTask('default', [ 'env:casper', 'extendPATH', 'casperjs']);
};
