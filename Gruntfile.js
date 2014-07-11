/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        'ftp-deploy': {
          build: {
            auth: {
              host: process.env.WATPHRARAM9_FTP_HOST,
              port: 21,
              authKey: 'key1'
            },
            src: 'site',
            dest: process.env.WATPHRARAM9_DOC_FTP_DEST,
            exclusions: ['site/**/.DS_Store']
          }
        },
        'shell': {
            'generate': {
                command: 'mkdocs build'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-shell');

    // Default task.
    grunt.registerTask( 'deploy', [ 'shell:generate','ftp-deploy' ]);

};
