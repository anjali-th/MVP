DROP TABLE IF EXISTS appUsers;
DROP TABLE IF EXISTS workout_log;

CREATE TABLE appUsers(
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE
);

CREATE TABLE workout_log (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    workout_name TEXT,
    duration INTEGER,
    appUsers_id INTEGER REFERENCES appUsers(id)
);