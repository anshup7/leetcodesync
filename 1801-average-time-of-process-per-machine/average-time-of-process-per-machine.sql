# Write your MySQL query statement below


select a1.machine_id, ROUND(SUM(a2.timestamp - a1.timestamp)/(SELECT count(distinct process_id) from Activity), 3) as processing_time from Activity a1, Activity a2
where a1.activity_type= "start" AND a2.activity_type = "end" AND
a1.process_id = a2.process_id
AND a1.machine_id = a2.machine_id
group by a1.machine_id




-- Keeping the following for memory purpose. Use it to understand how you entered into the unncessary catesian product bug situation.

-- select * from Activity a1, Activity a2
-- where a1.activity_type= "start" AND a2.activity_type = "end" AND
-- a1.process_id = a2.process_id
-- AND a1.machine_id = a2.machine_id
-- limit 4
-- -- group by a1.machine_id