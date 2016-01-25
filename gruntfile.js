module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),  
		autoshot: {
			default_options: {
				options: {
					path: 'build',
					remote: {
						files: [
							{ src: 'http://inter1ads.com/?l=Kke4EnLSHF3KqTr&language=en&tr=default', dest: '01.png', delay: '5000' },
							{ src: 'http://inter1ads.com/?l=OMjpxkJJLDp5dzJ&language=en&tr=default', dest: '02.png', delay: '5000' },
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
