function hola(nombre,miCallback) {
    setTimeout(function() {
        console.log('Hola '+ nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios '+ nombre);
        otroCallback();
    }, 100);

}
console.log('Iniciando, proceso');
hola('Joel',function(nombre) {
    adios(nombre,function() {
        console.log('terminando proceso');
    });
});