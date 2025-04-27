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
    // definisco l'id del nuovo post
    let newId = list[list.length - 1].id + 1;

    const {title, content, image, tags} = req.body;

    const newPost = {
        id: newId,
        title,
        content,
        image,
        tags
    };

    list.push(newPost);
    
    res.json(newPost);
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
    let id = parseInt(req.params.id);
    
    const post = list.find((post) => {
        return post.id === id;
    });

    list.splice(list.indexOf(post), 1);

    console.log(list);
    
    res.status(204).end();
};

module.exports = {index, show, store, update, modify, destroy};