# Write your MySQL query statement below
SELECT v.customer_id, count(*) count_no_trans
FROM Visits v LEFT JOIN Transactions t
ON v.visit_id = t.visit_id
WHERE t.visit_id IS NULL
group by v.customer_id