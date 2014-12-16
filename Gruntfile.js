module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			all: {
				files: {
					"espresso-grid.min.js": ["node_modules/espresso-grid/espresso-grid.min.js"]
				},
				options: {
					preserveComments: true,
					sourceMap: false,
					report: "min",
					beautify: {
						"ascii_only": true
					},
				}
			}
		}
	});

	grunt.registerTask('default', ['uglify:all']);
	grunt.registerTask('minify', ['uglify:all']);
};