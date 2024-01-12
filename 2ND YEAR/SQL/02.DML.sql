-- DML statements: Instert, Update, Delete etc.
	-- insert into customer(column names) values(values); (to insert data)
	-- update student set colname = modvalue where condition; (to make changes)
	-- delete from customer where condition ; (to delete values)
    
show databases;
use bank;

delete from customer;
insert into customer values
	(22,'ayush',52,'456 gh'),
    (52,'ayushMAAN',52,'456 gh'),
	(25,'gautam',19,'werty');
insert into customer (age,cname,address,id) values(22,'ansh',245,456);
select* from customer;

-- drop table student;
create table student(id int, sname varchar(69));

-- to insert values from another table
insert into student 
	select id, cname from customer;
select* from student;

update student 
	set sname ='ayushmaan'
    where id = 22;
select* from student;
update student 
	set sname =(select address from customer where cname ='ayush')
    where id = 22;
select* from student;

delete from customer 
 where id =22;
select*from customer;
delete from customer 
 limit 2;
select*from customer;
