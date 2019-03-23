var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.readdir('../FileSystem', 'utf-8', function(err, files) {

    fs.writeFile('./text.txt', '', function(err) {});
    
    for(var i = 0; i < files.length; i++) {

        fs.appendFile('./text.txt', files[i] + '\n', function(err) {
            console.log('Zapisano'.green, );
        });
    }
});