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

async function read1(){
    try{
        let find123 = await doRead(`123.txt`,`utf8`);
        console.log(find123)
        let find456 = await doRead(`456.txt`,`utf8`);
        console.log(find456)
        let find789 = await doRead(`789.txt`,`utf8`);
        console.log(find789)
    }catch(err){
        console.error(err);
    }
}

read1();
