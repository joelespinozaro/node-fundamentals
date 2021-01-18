const fs = require('fs');

//cb = callback

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data)=> {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta,contenido, function(err) {
        if(err) {
            console.error('No se pudo escribir '+ err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta,cb);
}

// leer(__dirname + '/archivo.txt', console.log);
// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
borrar(__dirname + '/archivo1.txt', console.log);