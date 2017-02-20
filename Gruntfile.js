if(process.argv.indexOf('dev') >= 0) {
	console.log('DEV');
}

module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
			
			"bower-install-simple": {
				options: {
						color: true
						// directory: "lib"
				},
				"prod": {
						options: {
								production: true
						}
				},
				"dev": {
						options: {
								production: false
						}
				}
			},

			bower_concat: {
				all: {
					dest: 'js/common.js',
					// exclude: []
				}
			},
			
			concat: {
				dist: {
					src: [
						'src/data.js',
						'src/index.js',
						'src/*.js'
					],
					dest: 'js/index.js'
				}
			},

			babel: {
				options: {
					sourceMap: true,// dev
					presets: ['babel-preset-es2015']
				},
				dist: {
					files: {
						
						'js/index.js': 'js/index.js'

						// 'js/index.js': 'tmp/index.js'
						
						// src: [
						// 	'js/index.js'
						// ],
						// dest: 'tmp/index.js'
					}
				}
			},
			
			// uglify: {
			// 	build: {
			// 		src: 'js/index.js',
			// 			dest: 'js/index.min.js'
			// 	}
			// },

			uglify: {
				build: {
					files: [
						{
								// expand: true,
								src: 'js/index.js',
								dest: 'js/index.js'
								// cwd: 'app/scripts'
						},
						{
								src: 'js/common.js',
								dest: 'js/common.js'
						}
					]
				}
			},
			
			watch: {
				scripts: {
					files: ['src/*.js'],
					tasks: [
						'concat',
						'babel' //,
						// 'uglify'
					],
					options: {
						spawn: false
					}
				}
			}
		});

		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks("grunt-bower-install-simple");
		grunt.loadNpmTasks('grunt-bower-concat');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-babel');

		grunt.registerTask('dev', [
			// 'bower-install-simple',
			// 'bower_concat'        ,
			'concat'              ,
			'babel'               ,
			// 'uglify'              ,
			'watch'               
		]);

		grunt.registerTask('default', [
			'bower-install-simple',
			'bower_concat'        ,
			'concat'              ,
			'babel'               ,
			'uglify'
		]);
};
