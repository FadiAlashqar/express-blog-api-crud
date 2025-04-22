// importo express:
const express = require('express');

// iniziliazzo express all'interno di una variabile:
const app = express();

// definisco la porta:
const port = 3000;

// importo il router:
const postRouter = require('./router/posts.js');

// definisco la rotta base: 
app.get('/', (req, res) => {
    res.send('Homepage')
});

// creo le rotte attraverso il router:
app.use('/posts', postRouter);

// metto il server in ascolto:
app.listen(port, () => {
    console.log(`In ascolto dalla porta ${port}`)
});