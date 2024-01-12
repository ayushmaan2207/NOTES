-- Queries : WHERE clause, compound WHERE clause using AND & OR
use bank;
-- drop table employee;
create table employee(id int,ename varchar(69),salary int,department varchar(99),age int);
insert into employee values(1,'ayush',1000,'marketing',19),(2,'gautam',2000,'sales',19),(3,'ansh',3000,'sales',20),(4,'shruti',4000,'it',20);

-- here, WHERE clause used to get 2nd max salary
select ename from employee where salary=(select max(salary) from employee where salary <> (select max(salary) from employee));
select sum(salary) from employee;
-- AND & OR
select * from employee
where department = 'sales' or (age >19 AND salary > 2000);