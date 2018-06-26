const db = require('../db/config');
const History = {};

History.findAll = () => {
	return db.query(
		`
		SELECT * FROM chat_history
		`
	);
};

History.create = history => {
	return db.one(
		`
		INSERT INTO chat_history
		(usr, msg, time)
		VALUES ($1, $2, $3)
		RETURNING *
		`,
		[history.usr, history.msg, history.time]
	)
}

module.exports = History;