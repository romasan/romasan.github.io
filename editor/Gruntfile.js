module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
			
			concat: {
				dist: {
					src: [
						'js/main.js',
						'js/*.js'
					],
					dest: './index.js'
				}
			},

			babel: {
				options: {
					sourceMap: true,// dev
					presets: ['babel-preset-es2015']
				},
				dist: {
					files: {
						'./index.js': './index.js'
					}
				}
			},
			
			watch: {
				scripts: {
					files: ['js/*.js'],
					tasks: [
						'concat',
						'babel'
					],
					options: {
						spawn: false
					}
				}
			}
		});

		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-babel');

		grunt.registerTask('default', [
			'concat',
			'babel' ,
			'watch'               
		]);
};
