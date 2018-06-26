const db = require('../db/config');
const Status = {};

Status.findAll = () => {
	return db.query(
		`
		SELECT * FROM user_statuses
		`
	);
};

Status.findByNickname = nickname => {
	return db.oneOrNone(
		`
		SELECT * FROM user_statuses
		WHERE nickname = $1
		`,
		[nickname]
	)
}

Status.create = status => {
	return db.one(
		`
		INSERT INTO user_statuses
		(nickname, status)
		VALUES ($1, $2)
		RETURNING *
		`,
		[status.nickname, status.status]
	);
};

Status.update = (status, nickname) => {
	return db.one(
		`
		UPDATE user_statuses SET
			status = $1
		WHERE nickname = $2
		`,
		[status.status, nickname]
	);
};

module.exports = Status;