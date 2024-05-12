# Write your MySQL query statement below


select project_id, Round(Avg(experience_years),2) average_years from Project JOIN Employee
on Project.employee_id = Employee.employee_id
group by Project.project_id