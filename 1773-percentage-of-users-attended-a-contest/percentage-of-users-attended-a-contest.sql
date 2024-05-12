# Write your MySQL query statement below
-- For each context


-- select * from users JOIN (select count(user_id) users from register group by contest_id) as newu
-- ON users.user_id = 


select contest_id, Round((count(user_id)/(select count(*) from users))*100, 2) percentage 
from register group by contest_id
order by percentage desc, contest_id asc