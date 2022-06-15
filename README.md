## _NodeJs-Express-MySql-Cors-CryptoJs_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

this API able to manipulate mySql database

in my case I already have a database in my local machine 
the database named `bangkit` with articles table, articles table have 5 column:

| article_id | article |  mksa  | created_at | updated_at  |
| ---------- | ------- |  ----  | ---------- | ----------- |
| -- auto -- | ------- |  ----  | -- auto -- | -- auto --  |


to crate articles table using this 
```sh
CREATE TABLE articles (
    articleid INT not null auto_increment PRIMARY KEY,
    article VARCHAR(5000),
    mksa VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
 ```
you just need to clone to your PC then
```sh
npm install
```
and
```sh
npm start
```

to test it I using postman

![image](https://i.imgur.com/JyWTrpc.png)

this able to GET, POST, PUT, and DELETE
![image](https://i.imgur.com/fe8uAA0.png)
![image](https://i.imgur.com/Y6CAK7G.png)
![image](https://i.imgur.com/RIUyMXW.png)
![image](https://i.imgur.com/4MHNT1F.png)

 
just tell me if there's any problem or something thanks
