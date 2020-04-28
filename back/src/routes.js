const express = require('express')
const UserController = require('./controllers/UserController')
const PropertiesController = require('./controllers/PropertiesController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

routes.get('/imovel', PropertiesController.index)
routes.post('/imovel', PropertiesController.create)
routes.delete('/imovel/:id', PropertiesController.delete)

routes.post('/sessions', SessionController.create);

module.exports = routes;