// definisco la funzione che mi va a segnalare gli errori
function errorsHandler(err, req, res, next) {
// restutuisco lo stato di errore 
    res.status(500);

// restitisco un json contente le specifiche dell'errore rilevato
    res.json({
    error: 'Si è verificato un errore, riprova più tardi'
    
});
}

// esporto la funzione soprastante
module.exports = errorsHandler;