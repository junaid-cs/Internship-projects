const express = require('express')
const {
    createdata,
    getworkouts,
    getworkout,
    deletepost,
    updatepost
} = require('../Controllers/workoutControllers')
const routes = express.Router();

routes.get('/',getworkouts)


routes.get('/:id',getworkout)


routes.post('/', createdata)

routes.delete('/:id',deletepost)

routes.patch('/:id',updatepost)

module.exports = routes;