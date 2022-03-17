DROP TABLE IF EXISTS workout_log;
DROP TABLE IF EXISTS appUsers;

CREATE TABLE appUsers(
    id SERIAL PRIMARY KEY,
    username TEXT 
);

CREATE TABLE workout_log (
    id SERIAL PRIMARY KEY,
    date TEXT,
    workoutname TEXT,
    duration TEXT,
    appusersid INTEGER REFERENCES appUsers(id)
);

INSERT INTO appUsers (username) VALUES ('anj');
INSERT INTO appUsers (username) VALUES ('anjali');
INSERT INTO appUsers (username) VALUES ('thing');

INSERT INTO workout_log (date, workoutname, duration, appusersid) VALUES ( '2022-03-14','upper body', '30', 1) ;
INSERT INTO workout_log (date, workoutname, duration, appusersid) VALUES ( '2022-03-14','upper body', '30', 1) ;
INSERT INTO workout_log (date, workoutname, duration, appusersid) VALUES ( '2022-03-14','upper body', '30', 2) ;
INSERT INTO workout_log (date, workoutname, duration, appusersid) VALUES ( '2022-03-14','upper body', '30', 3) ;
INSERT INTO workout_log (date, workoutname, duration, appusersid) VALUES ( '2022-03-14','upper body', '30', 3) ;
INSERT INTO workout_log (date, workoutname, duration, appusersid) VALUES ( '2022-03-14','upper body', '30', 3) ;