# Write your MySQL query statement below

select product_id, year first_year, quantity, price from sales where
(product_id,year) IN(
select product_id, MIN(year) first_year
from sales
group by product_id)


-- select MIN(year) from sales where product_id = 100;