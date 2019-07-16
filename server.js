const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

server.get('/:id', (req, res) => {
    db('cars').where({ id: req.params.id })
    .first()
    .then(car => {
        if (car) {
            res.status(200).json(car);
        } else {
            res.status(404).json({ message: "not found" });
        }
    })
    .catch(error => res.status(500).json(error));
})

server.post('/', (req, res) => {
    const car = req.body;
    db('cars')
        .insert(car, 'id')
        .then(arrayOfIds => {
            const lastIdInserted = arrayOfIds;
            res.status(201).json(lastIdInserted);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

server.delete('/:id', (req, res) => {
    db('cars').where({ id: req.params.id }).del()
    .then(count => {
        res.status(200).json({ message: `${count} record(s) deleted` });
    })
    .catch(error => res.status(500).json(error));
})

server.put('/:id', (req, res) => {
    db('cars')
    .where({ id: req.params.id }).update(req.body)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: `${count} record(s) updated` });
        } else {
            res.status(404).json({ message: 'not found' });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

module.exports = server;