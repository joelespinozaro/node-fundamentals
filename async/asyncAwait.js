async function hola(nombre) {
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log('Hola '+ nombre);
            resolve(nombre);
        }, 2000);
    });
};

async function adios(nombre) {
    return new Promise((resolve,reject)=> {
        setTimeout(function() {
            console.log('Adios '+ nombre);
            resolve(nombre);
        }, 100);
    });
};

async function hablar(nombre) {
    return new Promise((resolve,reject)=> {
        setTimeout(function() {
            console.log('Estoy hablando...');
            resolve(nombre);
        },1000)
    });
};

async function main() {
    let nombre = 'Joel';
    await hola(nombre);
    await hablar(nombre);
    await hablar(nombre);
    await hablar(nombre);
    await adios(nombre);
};

main();