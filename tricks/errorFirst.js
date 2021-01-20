function asincrona(callback) {
    setTimeout(()=> {
        try {
            let a = 2 + z;
            callback(null, a);   
        } catch(e) {
            callback(e);
        }
    }, 1000);
}

asincrona(function(err,dato) {
    if(err){
        console.error(err);
        return false;
        // throw err; No funciona en funciones asíncronas
    } else {
        console.log(dato);
    }
})