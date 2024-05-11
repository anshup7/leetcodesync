# Write your MySQL query statement below
select p.product_id, ifnull(ROUND(sum(units*price)/sum(units), 2),0) average_price from prices p left join unitssold s
on p.product_id = s.product_id
AND s.purchase_date between p.start_date and p.end_date -- No overlap helped here
group by p.product_id