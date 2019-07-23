CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email varchar(64) not null,
    passwordhash varchar(64) not null,
    bio varchar(1000),
    imagelink varchar(512),
    admin boolean default FALSE
);
