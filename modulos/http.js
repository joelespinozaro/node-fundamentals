const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('nueva petición');
    console.log(req.url);
    switch(req.url) {
        case '/hola':
            res.write('Hola, qué tal?');
            res.end();
            break;
        default:
            res.write('Error 404: no sé que buscas');
            res.end();
    }

    // res.writeHead(201, {
    //     'Content-Type': 'text/plain'
    // });
    // //Respuesta
    // res.write('hola, http en Nodejs');
    
    res.end();
}

console.log('Escuchando en el puerto 3000');
