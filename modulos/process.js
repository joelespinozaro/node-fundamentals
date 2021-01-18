// const process = require('process');

process.on('beforeExit', function() {
    console.log('El proceso va a terminar');
});

process.on('exit', function() {
    console.log('El proceso ha terminado');
});

// process.on('uncaughtRejection')

process.on('uncaughtException', (err,origen) => {
    console.error('ha ocurrido un error, no capturado');
    console.error(err.message);
    setTimeout(()=>{
        console.log('Este mensaje viene de uncaugthException');
    },1000)
})

funcionNoExiste();