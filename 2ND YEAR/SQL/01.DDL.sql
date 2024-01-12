-- DDL statements: Create, Alter, Drop etc.
	-- create database student; (to create)
	-- drop database bank; (to delete)
	-- alter table customer add address varchar(108) not null;(to edit or add attributes: don't use ";" )

show databases;
drop database bank;
create database bank;
use bank;

create table customer (
	id int,
    cname varchar(69) not null,
    age int
); -- cannot change table contents (change name first)

desc customer;

alter table customer 
add address varchar(108) not null;
desc customer;