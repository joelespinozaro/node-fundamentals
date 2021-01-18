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

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Estoy hablando...');
        callbackHablar();
    },1000)
}

function conversacion(nombre,veces,callbackChat) {
    if(veces > 0) {
        hablar(function() {
            conversacion(nombre,veces - 1, callbackChat);
        })
    } else {
        adios(nombre,callbackChat);
    }
}


console.log('Proceso Iniciado');
hola('Joel', function(nombre) {
    conversacion(nombre, 3, function(){
        console.log('Proceso Terminado');
    })
});
// -- 

// console.log('Iniciando, proceso');
// hola('Joel',function(nombre) {
//     hablar(function () {
//         hablar(function() {
//             hablar(function() {
//                 adios(nombre,function() {
//                     console.log('terminando proceso');
//                 });
//             });
//         });
//     });
// });