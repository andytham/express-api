const Status = require('../models/Status');

const statusesController = {};

statusesController.show = (req, res) => {
	Status.findByNickname(req.params.nickname)
	.then(status => {
		res.json(status);
	})
	.catch(err => {
		console.log(err);
	})
}

statusesController.create = (req, res) => {
	Status.create({
		nickname: req.nickname,
		status: req.status
	})
	.then(status => {
		res.json({
			message: "user status created"
		})
	})
	.catch(err => {
		console.log(err);
	});
}

statusesController.update = (req, res) => {
	Status.update({
		status: req.body.status
	}, req.params.nickname)
	.then(status => {
		res.json({
			message: "status successfully updated"
		})
	})
	.catch(err => {
		console.log(err);
	})
}

module.exports = statusesController;