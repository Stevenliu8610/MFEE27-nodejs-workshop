const fs = require('fs');

function doRead(path, options){
    return new promises((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if(err){
                return reject('error', err);
            }
            resolve(data);
        });
    });
}

doRead('123.txt', 'utf8').then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });