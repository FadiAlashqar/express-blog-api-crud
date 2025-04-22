// importo express:
const express = require('express');

// importo la classe router:
const router = express.Router();

// INDEX
router.get('/', (req, res) => {
    res.send('Lista dei post');
});

// SHOW
router.get('/:id', (req, res) => {
    res.send(`Dettaglio del post con id ${req.params.id}`);
});

// STORE
router.post('/', (req, res) => {
    res.send('Inserimento di un nuovo post');
});

// UPDATE
router.put('/:id', (req, res) => {
    res.send(`Modifica totale del post con id ${req.params.id}`);
});

// MODIFY
router.patch('/:id', (req, res) => {
    res.send(`Modifca parazile del post con id ${req.params.id}`);
});

// DESTROY
router.delete('/:id', (req, res) => {
    res.send(`Cancellazione del post con id ${req.params.id}`);
});

// esporto il router:
module.exports = router;