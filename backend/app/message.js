const express = require('express');
const path = require('path');
const multer = require('multer');
const nanoid = require('nanoid');
const fileDb = require('../fileDb');
const config = require('../config');

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null, config.uploadPath);
   },
    filename: (req, file, cb) => {
       cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    const messages = await fileDb.getItems();
    res.send(messages);
});

router.get('/:id', async (req, res) => {
   const message = await fileDb.getItemById(req.params.id);
   if(!message) {
       return res.status(404).send({error: 'Not found'});
   }
   res.send(message);
});

router.post('/', upload.single('image'), async (req, res) => {
    const message = req.body;
    if (message.message === '') {
        res.status(400).send({error: 'Please enter message'});
    }
    else {
    if (message.author === '') {
        message.author = 'Anonymous';
   }
   if (req.file) {
       message.image = req.file.filename;
   }
   await fileDb.addItem(message);
   res.send(message.id);
    }
});

module.exports = router;