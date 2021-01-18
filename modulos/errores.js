function otherFunc() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsync(cb) {
    setTimeout(function() {
        try {
            return 3 + p;
        } catch(err) {
            console.error('error en función async');
            cb(err);
        }
    }, 1500);
}

try {
    // serompe();
    seRompeAsync(function(err) {
        console.log(err);
    });
} catch(err) {
    console.error('vaya, hubo un error.', err.message);
    console.log('el proceso sigue...');
}


console.log('está al final');