const express = require('express');
const statusesRouter = express.Router();
const statusesController = require('../controllers/statuses-controller');

statusesRouter.get('/', statusesController.index);
statusesRouter.get('/:nickname', statusesController.show);
statusesRouter.post('/', statusesController.create);
statusesRouter.patch('/:nickname', statusesController.update);

module.exports = statusesRouter;