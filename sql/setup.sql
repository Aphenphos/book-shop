-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE if exists books;
DROP TABLE if exists authors;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS as IDENTITY PRIMARY KEY,
    title VARCHAR,
    released INT
);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS as IDENTITY PRIMARY KEY,
    name VARCHAR,
    dob VARCHAR,
    pob VARCHAR
);

INSERT INTO books (
    title,
    released
)
VALUES
    ('A', 2000),
    ('B', 2001),
    ('C', 2002),
    ('D', 2003)
;

INSERT INTO authors (
    name,
    dob,
    pob
)
VALUES
    ('William', '1/1/1800', 'Town'),
    ('Billiam', '8/8/5200', 'City'),
    ('Milliam', '4/4/400', 'Field')
;