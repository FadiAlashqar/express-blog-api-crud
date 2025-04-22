// importo express:
const express = require('express');

// importo la classe router:
const router = express.Router();

// importiamo la classe controller:
const postController = require('../controllers/postController.js');

// INDEX
router.get('/', postController.index);

// SHOW
router.get('/:id', postController.show);

// STORE
router.post('/', postController.store);

// UPDATE
router.put('/:id', postController.update);

// MODIFY
router.patch('/:id', postController.modify);

// DESTROY
router.delete('/:id', postController.destroy);

// esporto il router:
module.exports = router;