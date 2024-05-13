# Write your MySQL query statement below
select query_name, Round(avg(rating/position), 2) quality, 
round((count(if(rating < 3, rating, NULL)) / count(rating))*100, 2) poor_query_percentage
from queries
group by query_name
having query_name is NOT NULL