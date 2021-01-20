console.time('todo');
let suma = 0;
console.time('bucle');
for (let i = 0; i < 1000000000; i++){
    suma += 1;
}
console.timeEnd('bucle');
console.log(suma);

suma = 0;

console.time('bucle2');
for (let i = 0; i < 1000000000; i++){
    suma += 1;
}
console.timeEnd('bucle2');
console.log(suma);
console.timeEnd('todo');

console.time('async');
console.log('empieza proceso async');
function asincrona() {
    return new Promise((resolve)=> {
        setTimeout(function(){
            console.log('termina proceso asincrono');
            resolve();
        },1500);
    });
};
asincrona().then(()=>{
    console.timeEnd('async');
})