module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),  
		autoshot: {
			default_options: {
				options: {
					path: 'build',
					remote: {
						files: [
							{ src: 'http://google.com/', dest: 'google.png', delay: '5000' },
							{ src: 'https://github.com/', dest: 'github.png', delay: '5000' },
						]
					},
					viewport: [
						'320x480',
						'480x320',
					]
				},
			},
		},
	});
	grunt.loadNpmTasks('grunt-autoshot');
	grunt.registerTask('default', ['autoshot']);
};
