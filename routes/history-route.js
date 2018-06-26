const express = require('express');
const historyRouter = express.Router();
const historyController = require('../controllers/history-controller');

historyRouter.get('/', historyController.index);
historyRouter.post('/', historyController.create);

module.exports = historyRouter;