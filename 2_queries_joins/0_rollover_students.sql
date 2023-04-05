SELECT students.name as student_name, cohorts.name as cohort_name, cohorts.start_date as cohorts_start_date, students.start_date as student_start_date
FROM students INNER JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.start_date <> students.start_date
ORDER BY cohorts_start_date;

-- COMPASS ANSWER:
-- SELECT students.name, cohorts.name, cohorts.start_date as cohort_start_date, students.start_date as student_start_date
-- FROM students
-- JOIN cohorts ON cohort_id = cohorts.id
-- WHERE cohorts.start_date != students.start_date
-- ORDER BY cohort_start_date;