module.exports = function(grunt) {
  'use strict';
  var configObject = require('./grunt/config');
  var packageJson = grunt.file.readJSON("package.json");
  grunt.config.init(configObject);

  // Load Grunt Plugins
  Object.keys(packageJson.devDependencies)
    .slice(1).forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('test', ['jshint']);
};
