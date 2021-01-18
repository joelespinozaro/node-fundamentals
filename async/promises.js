function hola(nombre) {
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log('Hola '+ nombre);
            resolve(nombre);
        }, 1000);
    });
};

function adios(nombre) {
    return new Promise((resolve,reject)=> {
        setTimeout(function() {
            console.log('Adios '+ nombre);
            resolve(nombre);
        }, 100);
    });
};

function hablar(nombre) {
    return new Promise((resolve,reject)=> {
        setTimeout(function() {
            console.log('Estoy hablando...');
            // resolve(nombre);
            reject('Error encotrado');
        },1000)
    });
};

// ---
console.log('Iniciando Proceso');
hola('Joel')
    .then(hablar)
    .then(hablar)  
    .then(hablar)  
    .then(hablar)  
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso.');
    })
    .catch(error => console.log(error));