let nombre = process.env.NOMBRE || 'Default';
let web = process.env.WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es: '+ web);

console.log('otra cosa...'+ nombre);