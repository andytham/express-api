const History = require('../models/history');

const historyController = {};

historyController.index = (req, res) => {
	History.findAll()
	.then(history => {
		res.json(history);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({err})
	})
}

	historyController.create = (req, res) => {
		History.create({
			usr: req.body.usr,
			msg: req.body.msg,
			time: req.body.time
		})
		.then(history => {
			res.json({
				message: "history entry created",
				data: history
			})
		})
		.catch(err => {
			console.log(err);
		})
	}



module.exports = historyController;