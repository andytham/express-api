CREATE TABLE IF NOT EXISTS chat_history(
    id SERIAL,
    usr VARCHAR(100) UNIQUE NOT NULL,
    msg TEXT,
    time VARCHAR(50)
);
