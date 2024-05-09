-- SUBQERIES: simple & correlated using IN, EXISTS, NOT EXISTS 

-- Simple Subquery with IN
use bank;
-- select E1 from employee group by E2  (E1 & E2 should be same or E1 should be aggregate func: max, min, sum, avg & count) 
select department,count(*)from employee group by department having count(*)<2;  -- cannot use where while using group by
select ename,salary,department from employee where salary IN (select max(salary) from employee group by department); -- instead of '=' we use 'in' because it is giving more than one value 
 
-- correlated Subquery with EXISTS & NOT EXISTS
create table project(eid int ,pid  varchar(99) ) ;
insert into project	values (2,'p1'),(3,'p2');
select * from employee where eid EXISTS (select id from project where employee.eid = project.id);