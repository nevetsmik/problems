SELECT a.name, b.name from employees as a, (select name, salary from employees) as b where a.salary < b.salary
