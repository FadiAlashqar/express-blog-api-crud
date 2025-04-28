// importo express:
const express = require('express');

// iniziliazzo express all'interno di una variabile:
const app = express();

// definisco la porta:
const port = 3000;

// importo il router:
const postRouter = require('./router/posts.js');
// importo la funzione cje mi rileva gli errori
const errorsHandler = require('./middleWares/errorsHandler.js');

// comunico al server di interpretare le informazioni contenute nel body della richiesta come json
app.use(express.json());

// definisco la rotta base: 
app.get('/', (req, res) => {
    res.send('Homepage')
});

// creo le rotte attraverso il router:
app.use('/posts', postRouter);

app.use(errorsHandler);

// metto il server in ascolto:
app.listen(port, () => {
    console.log(`In ascolto dalla porta ${port}`)
});