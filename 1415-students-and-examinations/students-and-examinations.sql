# Write your MySQL query statement below
-- SELECT s.student_id, s.student_name, ex.subject_name, Count(ex.student_id) as attended_exams
-- FROM Students s LEFT JOIN Examinations ex
-- ON s.student_id = ex.student_id
-- group by ex.subject_name

-- select student_id, subject_name, count(*) attended_exams from examinations as ex
-- group by subject_name, student_id


-- select * from Subjects sub cross JOIN students as s
-- ON sub.subject_name = ex.subject_name


select s.student_id, s.student_name, s.subject_name, IFNULL(ex.attended_exams, 0) attended_exams from 
(select * from Subjects sub cross JOIN students) as s Left join (select student_id, subject_name, count(*) attended_exams from examinations as ex
group by subject_name, student_id) ex 
on s.student_id = ex.student_id AND s.subject_name = ex.subject_name
order by s.student_id, s.subject_name