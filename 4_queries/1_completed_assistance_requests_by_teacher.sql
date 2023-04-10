-- SELECT count(assistance_requests.id) as total_asistances, name
-- FROM teachers
-- JOIN assistance_requests ON teacher_id = teachers.id
-- WHERE name = 'Waylon Boehm'
-- GROUP BY name;


SELECT count(assistance_requests.*) as total_assistances, teachers.name
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;