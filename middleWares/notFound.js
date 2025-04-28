// definisco la funzione che mi va a segnalare un anomalia nella rotta
function notFound(req, res, next) {
// restutuisco lo stato di errore 
    res.status(404);

    res.json({
        error: 'Pagina non trovata'
    });
}

// esporto la funzione soprastante
module.exports = (notFound);