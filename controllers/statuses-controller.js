const Status = require('../models/status');

const statusesController = {};

statusesController.index = (req, res) => {
	Status.findAll()
	.then(statuses => {
		res.json(statuses);
	})
	.catch(err => {
		console.log(err);
	})
}

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
			message: "user status created",
			data: status
		})
	})
	.catch(err => {
		console.log(err);
	});
}

statusesController.update = (req, res) => {
	console.log(req);
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