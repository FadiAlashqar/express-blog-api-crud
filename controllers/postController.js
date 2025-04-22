// importo l'array contente la losta dei post:
const list = require('../data/postsList.js');

// INDEX
function index (req, res){
    res.json(list);
};

// SHOW
function show (req, res){
    let id = parseInt(req.params.id);
    
    const post = list.find((post) => {
        return post.id === id;
    })

    res.json(post);
};

// STORE
function store(req, res) {
    res.send('Inserimento di un nuovo post');
};

// UPDATE
function update(req, res) {
    res.send(`Modifica totale del post con id ${req.params.id}`);
};

// MODIFY
function modify(req, res) {
    res.send(`Modifica totale del post con id ${req.params.id}`);
};

// DESTROY
function destroy(req, res) {
    res.send(`Cancellazione del post con id ${req.params.id}`);
};

module.exports = {index, show, store, update, modify, destroy};