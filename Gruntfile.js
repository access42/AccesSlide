module.exports = function(grunt) {

  grunt.initConfig({

    myth: {
      dist: {
        files: {
					'css/style.css':'css/sources/style.css',
					'css/themes/default.css':'css/sources/themes/default.css',
 					'css/themes/xmas.css':'css/sources/themes/xmas.css',
 					'css/themes/black.css':'css/sources/themes/black.css', 					
        }
      }
    },

		cmq: {
			dist: {
        files: {
					'css/style.css':'css/style.css',
					'css/themes/default.css':'css/themes/default.css',
					'css/themes/xmas.css':'css/themes/xmas.css',			
					'css/themes/black.css':'css/themes/black.css',			
        }
			},
		},
		
		//et on minify le css
		cssmin: {
				dist:	{
       	 files: {'css/style.min.css':'css/style.css',	}
				},
				theme:	{
       	 files: {'css/themes/default.min.css':'css/themes/default.css'}
				},
				xmas:	{
       	 files: {'css/themes/xmas.min.css':'css/themes/xmas.css'}
				},
				black:	{
       	 files: {'css/themes/black.min.css':'css/themes/black.css'}
				},

			},	
	
  	watch: {
			scripts: {
				files: ['css/**/*.css','css/*.css'],
				tasks: ['myth','cmq','cssmin'],
				options: {
				  spawn: false,
				},
			},
		},

})

	grunt.loadNpmTasks('grunt-myth');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['myth','cmq','cssmin'])
}
