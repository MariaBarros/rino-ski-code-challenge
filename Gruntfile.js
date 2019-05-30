'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {      
      dist: {
        src: ['src/*.js', 'src/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      },
      test: {
        src: ['src/Constants.js', 'src/Core/*.js', 'src/Entities/**/*.js'],
        dest: 'dist/js/<%= pkg.name %>-test.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },    
    jshint: {
      files: ['Gruntfile.js', '<%= concat.dist.dest %>', 'test/**/*.js'],
      options: {        
        jshintrc: true        
      }
    },
    watch: {
      files: ['src/*.js','src/**/*.js', '**/*.sass'],
      tasks: ['concat', 'jshint', 'uglify','sass','cssmin']      
    },
    sass: {
      dist: {
        files: {
          'dist/css/<%= pkg.name %>.css' : 'src/sass/game.sass'
        }
      }
    },
    cssmin : {
      target : {
        src : ["dist/css/<%= pkg.name %>.css"],
        dest : "dist/css/<%= pkg.name %>.min.css"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-jshint');  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');  

  grunt.registerTask('default', ['concat', 'jshint', 'uglify']);

  grunt.registerTask('build', ['concat', 'uglify']);

};