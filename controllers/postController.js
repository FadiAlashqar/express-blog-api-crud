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

    res.status(201);

    res.json(newPost);
};

// UPDATE
function update(req, res) {
    // Faccio in modo che l'id mi venga restituito come numero
    let id = parseInt(req.params.id);

    const post = list.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "404",
            message: "Post non trovato"
        })
    }
    
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(list);
    
    res.send(post);
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