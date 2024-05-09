# Write your MySQL query statement below
select name from Employee where id in(
select m.managerId from Employee m
group by m.managerId
having count(m.managerId) >= 5 and m.managerId is not NULL) 
