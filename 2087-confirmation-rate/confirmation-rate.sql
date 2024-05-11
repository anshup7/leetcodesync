# Write your MySQL query statement below


select s.user_id, Round(Avg(if((c.action = 'confirmed'), 1, 0)), 2) confirmation_rate
from signups s Left Join confirmations c
on s.user_id = c.user_id
group by s.user_id

-- select ifnull(NULL, 1) from dual