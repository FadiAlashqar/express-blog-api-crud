// INDEX
function index (req, res){
    res.send('Lista dei post');
};

// SHOW
function show (req, res){
    res.send(`Dettaglio del post con id ${req.params.id}`);
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