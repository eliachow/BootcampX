-- SELECT SUM(duration) as total_duration
-- FROM assignment_submissions
-- JOIN students
-- ON students.id = assignment_submissions.id
-- WHERE students.name = 'Ibrahim Schimmel';


SELECT sum(assignment_submissions.duration) as total_duration
FROM assignment_submissions
JOIN students 
ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';