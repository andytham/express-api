CREATE TABLE user_statuses(
id SERIAL,
nickname VARCHAR(100) UNIQUE,
bio VARCHAR(500)
);