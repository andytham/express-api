const express = require('express');
const statusesRouter = express.Router();
const statusesController = require('../controllers/statuses-controller');

statusesRouter.get('/', statusesController.index);
statusesRouter.get('/name/:nickname', statusesController.show);
statusesRouter.post('/', statusesController.create);
statusesRouter.patch('/name/:nickname', statusesController.update);

module.exports = statusesRouter;