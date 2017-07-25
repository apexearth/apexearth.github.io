module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files:   [
                    'src/**/*.js',
                    'src/**/*.css'
                ],
                tasks:   ['build'],
                options: {
                    interrupt:  true,
                    livereload: true
                }
            }
        },

        clean: {
            build: [
                'build/'
            ]
        },

        browserify: {
            dist: {
                options: {
                    transform: [['babelify', {presets: ['es2015', 'react']}]]
                },
                src: ['src/index.js'],
                dest: 'build/index.js',
            }
        },

        connect: {
            server: {
                options: {
                    port:       8080,
                    hostname:   '*',
                    livereload: true,
                    open:       {
                        target: "http://localhost:8080/"
                    }
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['browserify']);
    grunt.registerTask('development', ['build', 'connect', 'watch']);
};