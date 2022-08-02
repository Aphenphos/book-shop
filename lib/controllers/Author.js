const { Router } = require('express');
const { Author } = require('../models/Authors');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const author = await Author.getById(req.params.id);
    res.json(author);
  })
  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    res.json(authors);
  })
  .post('/', async (req, res) => {
    const author = await Author.insert(req.body);
    if (req.body.bookIds) {
      await Promise.all(req.body.bookIds.map((id) => author.addBookById(id)));
    }
    res.json(author);
  })
;
  

