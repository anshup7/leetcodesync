# Write your MySQL query statement below
select name, bonus from Employee e LEFT JOIN Bonus b 
on e.empid = b.empId
WHERE bonus < 1000 or bonus is NULL