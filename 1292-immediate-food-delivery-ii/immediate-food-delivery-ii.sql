# Write your MySQL query statement below

select round(avg(order_date = customer_pref_delivery_date)*100, 2) immediate_percentage from delivery where 
(order_date, customer_id) in
(select min(order_date), 
customer_id 
from delivery
group by customer_id)


-- select avg(order_date = customer_pref_delivery_date) from delivery